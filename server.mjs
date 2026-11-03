/*
 * 考勤本 · 局域网同步服务
 * 用法：双击「启动同步服务.bat」（或 node server.mjs）
 * 电脑和手机连同一个 WiFi，手机浏览器打开下面打印的地址即可，
 * 两边的数据自动同步，保存在本目录的 kq-data.json。
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 5217;
const HTML_FILE = path.join(__dirname, 'index.html');
const DATA_FILE = path.join(__dirname, 'kq-data.json');
const BACKUP_DIR = path.join(__dirname, 'backups');
const MAX_BACKUPS = 50;
const STARTED_AT = Date.now();

let html;
try { html = fs.readFileSync(HTML_FILE); }
catch { console.error('找不到 index.html，请把本脚本放在 kq-book 目录里运行。'); process.exit(1); }

// 应用壳静态件（PWA manifest + 图标），启动时读入内存
const STATIC_FILES = {};
for (const [route, [file, type]] of Object.entries({
  '/manifest.webmanifest': ['manifest.webmanifest', 'application/manifest+json; charset=utf-8'],
  '/icon-192.png': ['icon-192.png', 'image/png'],
  '/icon-512.png': ['icon-512.png', 'image/png'],
})) {
  try { STATIC_FILES[route] = { body: fs.readFileSync(path.join(__dirname, file)), type }; } catch { /* 缺文件就 404 */ }
}

let lastBackupAt = 0;
function backupOnce() {
  if (!fs.existsSync(DATA_FILE)) return;
  const now = Date.now();
  if (now - lastBackupAt < 60_000) return; // 一分钟内最多备一次
  lastBackupAt = now;
  try {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    const name = 'kq-' + new Date().toISOString().replace(/[:.]/g, '-') + '.json';
    fs.copyFileSync(DATA_FILE, path.join(BACKUP_DIR, name));
    const files = fs.readdirSync(BACKUP_DIR).filter(f => f.endsWith('.json')).sort();
    while (files.length > MAX_BACKUPS) fs.unlinkSync(path.join(BACKUP_DIR, files.shift()));
    dailySnapshot();
  } catch (e) { console.warn('备份失败:', e.message); }
}

/* ---------- 每日快照：一天一份，独立目录，保底 180 天 ---------- */
const SNAP_DIR = path.join(__dirname, 'snapshots');
const MAX_SNAPS = 180;
function dailySnapshot() {
  try {
    fs.mkdirSync(SNAP_DIR, { recursive: true });
    const d = new Date();
    const name = 'snapshot-' + d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0') + '.json';
    const dest = path.join(SNAP_DIR, name);
    if (fs.existsSync(dest)) return; // 今天已有快照，不动
    fs.copyFileSync(DATA_FILE, dest);
    log('每日快照已存：' + name);
    const files = fs.readdirSync(SNAP_DIR).filter(f => f.endsWith('.json')).sort();
    while (files.length > MAX_SNAPS) fs.unlinkSync(path.join(SNAP_DIR, files.shift()));
  } catch (e) { console.warn('快照失败:', e.message); }
}

function readData() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
  catch { return null; }
}

function log(msg) {
  console.log('[' + new Date().toLocaleTimeString('zh-CN', { hour12: false }) + '] ' + msg);
}

const server = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://local');

  if (u.pathname === '/' || u.pathname === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(html);
    return;
  }

  const sf = STATIC_FILES[u.pathname];
  if (sf) {
    res.writeHead(200, { 'Content-Type': sf.type, 'Cache-Control': 'no-store' });
    res.end(sf.body);
    return;
  }

  if (u.pathname === '/api/data') {
    if (req.method === 'GET') {
      const d = readData();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify(d || { updatedAt: 0, data: null }));
      return;
    }
    if (req.method === 'PUT') {
      let body = '';
      req.on('data', c => { body += c; if (body.length > 5e6) req.destroy(); });
      req.on('end', () => {
        try {
          const j = JSON.parse(body);
          if (!j || typeof j !== 'object' || !j.data || typeof j.data !== 'object') throw new Error('bad payload');
          backupOnce();
          fs.writeFileSync(DATA_FILE, JSON.stringify(j));
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end('{"ok":true,"updatedAt":' + (Number(j.updatedAt) || Date.now()) + '}');
          log('收到同步：日薪 ' + (j.data.settings ? j.data.settings.dailyWage : '?')
            + ' / ' + Object.keys(j.data.days || {}).length + ' 天 / ' + (j.data.loans || []).length + ' 笔借支');
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end('{"ok":false}');
          log('同步数据无效，已拒绝');
        }
      });
      return;
    }
    res.writeHead(405); res.end(); return;
  }

  if (u.pathname === '/api/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end('{"ok":true,"app":"kq-book"}');
    return;
  }

  /* 服务状态：数据规模 / 最近备份 / 快照情况，浏览器直接打开就能看 */
  if (u.pathname === '/api/status') {
    const d = readData();
    let lastBackup = null, snaps = 0, latestSnap = null;
    try {
      const bf = fs.readdirSync(BACKUP_DIR).filter(f => f.endsWith('.json')).sort();
      if (bf.length) lastBackup = bf[bf.length - 1];
    } catch { /* 无备份目录 */ }
    try {
      const sf = fs.readdirSync(SNAP_DIR).filter(f => f.endsWith('.json')).sort();
      snaps = sf.length;
      if (sf.length) latestSnap = sf[sf.length - 1];
    } catch { /* 无快照目录 */ }
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({
      ok: true,
      app: 'kq-book',
      days: d && d.data ? Object.keys(d.data.days || {}).length : 0,
      loans: d && d.data ? (d.data.loans || []).length : 0,
      rateSegs: d && d.data ? (d.data.rateSegs || []).length : 0,
      updatedAt: d ? d.updatedAt : 0,
      lastBackup,
      snapshots: snaps,
      latestSnap,
      startedAt: STARTED_AT
    }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('not found');
});

server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.error('端口 ' + PORT + ' 被占用。换一个端口再运行：set PORT=5218 && node server.mjs');
  } else {
    console.error('服务出错:', e.message);
  }
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('==============================================');
  console.log('  考勤本同步服务已启动');
  console.log('  手机（连同一个 WiFi）浏览器打开：');
  const seen = new Set();
  for (const list of Object.values(os.networkInterfaces())) {
    for (const ni of list) {
      if (ni.family === 'IPv4' && !ni.internal && !seen.has(ni.address)) {
        seen.add(ni.address);
        console.log('    http://' + ni.address + ':' + PORT);
      }
    }
  }
  console.log('  本机调试：http://localhost:' + PORT);
  console.log('  数据文件：' + DATA_FILE);
  console.log('  首次运行如弹出 Windows 防火墙，请勾选"专用网络"并允许。');
  console.log('  关闭本窗口即停止同步（手机会变成离线本地记录）。');
  console.log('==============================================');
});
