@echo off
chcp 65001 >nul
title 考勤本同步服务
cd /d "%~dp0"
echo 正在启动考勤本同步服务，启动后请不要关闭本窗口...
node server.mjs
echo.
echo 服务已停止。按任意键关闭窗口。
pause >nul
