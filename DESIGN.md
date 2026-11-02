---
name: 考勤本（kq-book）· 磁带 J 卡圆珠笔账
description: 工地日结记工本——一个月是一盒磁带，卡头手写总额就是实发；白卡纸上一支圆珠笔、一支红笔。
colors:
  paper: "#fbfaf6"
  paper-dim: "#f3f1e8"
  desk: "#e9e6dd"
  warm-white: "#fdf8f2"
  input-white: "#ffffff"
  ink-b: "#1d3f9e"
  ink-b-deep: "#17327f"
  ink-r: "#c0392b"
  ink-r-deep: "#a52f1f"
  ink-2: "#55587f"
  rule: "rgba(29,63,158,.16)"
  rule-strong: "rgba(29,63,158,.4)"
  sync-idle: "#e8c9b8"
  sync-on: "#8fd6a2"
  sync-busy: "#f2d06b"
  sync-err: "#f2b705"
  punch-shade: "rgba(0,0,0,.14)"
  veil: "rgba(30,42,94,.35)"
typography:
  display:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "78px"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "23px"
    fontWeight: 700
    letterSpacing: "0.08em"
  title:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "17px"
    fontWeight: 700
    letterSpacing: "0.06em"
  body:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: 'ui-monospace,"Cascadia Mono",Consolas,"Liberation Mono",monospace'
    fontSize: "11px"
    letterSpacing: "0.2em"
  data:
    fontFamily: 'ui-monospace,"Cascadia Mono",Consolas,"Liberation Mono",monospace'
    fontSize: "15.5px"
    fontWeight: 700
  hero-base:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "74px"
    fontWeight: 700
    lineHeight: 1.04
  hero-wide:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "86px"
    fontWeight: 700
    lineHeight: 1.04
  currency:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "32px"
    fontWeight: 700
  currency-sm:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "34px"
    fontWeight: 700
  date-glyph:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "21px"
    fontWeight: 700
  close-glyph:
    fontFamily: 'ui-monospace,"Cascadia Mono",Consolas,"Liberation Mono",monospace'
    fontSize: "20px"
  icon-glyph:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "19px"
    fontWeight: 700
  stepper-glyph:
    fontFamily: 'ui-monospace,"Cascadia Mono",Consolas,"Liberation Mono",monospace'
    fontSize: "18px"
  micro-lg:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "14px"
    fontWeight: 700
  micro:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "13.5px"
  control:
    fontFamily: '"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif'
    fontSize: "13px"
  quick:
    fontFamily: 'ui-monospace,"Cascadia Mono",Consolas,"Liberation Mono",monospace'
    fontSize: "12.5px"
  note:
    fontFamily: '"Microsoft YaHei","PingFang SC","HarmonyOS Sans SC",system-ui,sans-serif'
    fontSize: "12px"
rounded:
  sm: "2px"
  md: "3px"
  pill: "50%"
spacing:
  xs: "4px"
  sm: "9px"
  md: "14px"
  lg: "18px"
  xl: "36px"
  line: "27px"
components:
  button-primary:
    backgroundColor: "{colors.ink-b}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "11px 14px"
  button-primary-hover:
    backgroundColor: "{colors.ink-b-deep}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-b}"
    rounded: "{rounded.sm}"
    padding: "11px 14px"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink-r}"
  input-field:
    backgroundColor: "{colors.input-white}"
    textColor: "{colors.ink-b}"
    rounded: "{rounded.sm}"
    height: "44px"
  tab-face:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    padding: "11px 14px 9px"
  tab-face-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink-b}"
---

# Design System: 考勤本（kq-book）· 磁带 J 卡圆珠笔账

## Overview

**Creative North Star: "磁带 J 卡 · 圆珠笔账"（Cassette J-Card Ballpoint Ledger）**

一个月是一盒磁带：A 面是逐日曲目单（出工单），B 面是月历与账目，卡背贴借支与设置；J 卡卡头用圆珠笔手写体微倾写着这个月的实发总额，像刚写完的一笔账。整个系统建立在"纸"的材质想象上：`#fbfaf6` 白卡纸浮在 `#e9e6dd` 桌面上，纸面印着 27px 一格的横线，左缘一列打孔（30px，窄屏 24px）。气质粗粝、直接、数字为王——刻意拒绝办公室 SaaS 感与"精致小卡片"感（PRODUCT.md 品牌承诺）。

书写工具只有两支笔：一支圆珠笔蓝 `#1d3f9e` 写下全部账目与人话，一支红笔 `#c0392b` 只上红条标、当日标记与扣款警示。字迹分两个声部：人话用系统楷体（KaiTi/STKaiti，离线零依赖约束下的手写替代），一切数字、日期、序号用等宽字体 + tabular-nums，像用尺子写出来的账。动效预算极小（单文件离线应用的自觉）：全站唯一的大动效是当日抽屉 220ms 自底部滑入，配 200ms 遮纱淡入，其余状态切换瞬时完成，`prefers-reduced-motion` 下全部关闭。

**Key Characteristics:**
- 纸质世界观：横线纸 27px 行律 + 左缘打孔列，控件全是标准件，纸只是材质
- 双笔双色：圆珠笔蓝写一切，红只给条标、当日点、½ 标与扣款金额
- 数字走 mono（tabular-nums），人话走楷体；sans 声部只准出现在"打字"场合（输入框、备注）
- 点线引导（2px dotted）是每条流水从状态词画到金额的签名收笔
- 阴影只有两种语义：纸浮在桌上的卡影、条标/主按钮的戳印硬影
- 触控优先：主路径（track 行、日历格、抽屉控件、dock）46–64px，输入件 44px
- 桌面 ≥920px 折成 A/B 双栏并排，像摊开的两面磁带卡

## Colors

一支圆珠笔蓝记账、一支红笔批注的白卡纸系统；蓝是书写墨，红是品牌条与扣款警示，纸色家族承担全部中性面。

### Primary
- **圆珠笔蓝 Ballpoint Blue** (`#1d3f9e`, CSS 变量 `--ink-b`)：全站书写墨与主色。正文文字色（body 直接取它）、标题、按钮、选中态、月历出工实心格、抽屉描边、toast 底、点线引导与横线纸的母色（rule/rule-strong 都是这个蓝的透明度）。
- **深蓝 Pressed Blue** (`#17327f`)：主按钮 hover/按压的加深态，只存在于交互反馈，不做静态色。

### Secondary
- **条标红 Ribbon Red** (`#c0392b`, `--ink-r`)：顶部红条标底色（44px sticky，含 theme-color 与 PWA theme）、今日日期与今日标记点、半天 ½ 标、当日未记的负数总额、focus 描边（2px outline offset 2px）、hover 警示。
- **深红 Deep Red** (`#a52f1f`, `--ink-r-deep`)：一切扣款金额的专属墨色——借支行金额 `−¥`、借支小计、"借支 −¥"副行，让"被扣掉的钱"在账面上自成一类。

### Tertiary
- **次级墨 Faded Ink** (`#55587f`, `--ink-2`)：写得很轻的圆珠笔——未选中页签、辅助说明、歇班行、星期/序号、placeholder、mono 小标（11px SIDE A/B/BACK）。对比度实测 6.5:1（对 paper），小字号也过 AA。

### Neutral
- **卡纸白 Paper** (`#fbfaf6`, `--paper`)：唯一的内容承载面，卡片本体与按钮文字色（蓝底上的"纸色字"）。
- **旧卡纸 Paper-dim** (`#f3f1e8`, `--paper-dim`)：半天日历格底、dock 底部渐变纸托（transparent → 30% 处）、磁带 B 面的暗部。
- **桌面灰 Desk** (`#e9e6dd`)：卡纸之外的"桌面"，打孔洞透出的底色，让白卡纸有"放在桌上"的物理感。
- **暖白 Warm White** (`#fdf8f2`)：红条标上的文字与图标色（红底上的纸色字）。
- **输入白 Input White** (`#ffffff`)：所有输入框/步进器内芯，与纸面微差区分"可写字的格子"。
- **发丝蓝线 Rule** (`rgba(29,63,158,.16)`)：表格行线、借支行上下边、区块分隔——蓝墨最轻的痕迹。
- **重蓝线 Rule-strong** (`rgba(29,63,158,.4)`)：输入框边、日历格边、合计线、stepper 边——蓝墨用力的痕迹。

### Named Rules
**The 一笔蓝 Rule.** 全部账目书写只用圆珠笔蓝 `#1d3f9e`。红笔只出现在三处：红条标、当日标记（today 日期/圆点/inset 环）、扣款语义（深红金额、负数总额、½ 标）。红永不参与正文书写。

**The 纸色分层 Rule.** 中性面只有四个层级：桌面 `#e9e6dd` → 卡纸 `#fbfaf6` → 输入白 `#ffffff` → 旧纸 `#f3f1e8`（暗部/半天格）。新界面不得发明第五种底色。

## Typography

**Display/Body Font:** 系统楷体 `"KaiTi","Kaiti SC","STKaiti","DFKai-SB",serif`（`--hand`，离线零依赖约束下手写声部的替代，取舍记录于 PRODUCT.md）
**Data Font:** `ui-monospace,"Cascadia Mono",Consolas,"Liberation Mono",monospace`（`--mono`，全部数字）
**Typing Font:** `"Microsoft YaHei","PingFang SC","HarmonyOS Sans SC",system-ui,sans-serif`（`--sans`，仅输入框与备注）

**Character:** 楷体执笔写人话，等宽字体用尺子写数字——手写感与账目精确感的分工是这套系统的字骨。sans 是"打字声部"：只准出现在用户往里打字的场合（输入框 15px、备注 12px），界面文案永不使用。

### Hierarchy
- **Display**（楷体 700, 74px 基准 / **78px** @≤560px 主视口 / 86px @≥920px, line-height 1.04, tracking −0.01em）：唯一用它的地方是卡头手写总额 `¥`+数字；整行微倾 `rotate(-.7deg)`，墨色 `#1d3f9e`，带 1.5px 1.5px 0 rgba(0,0,0,.14) 的压痕 text-shadow——"刚写完的一笔账"。`¥` 符号 32px（≤560 为 34px）。负数换红墨。
- **Headline**（楷体 700, 23px, tracking .08em）：A 面月账标题（"11 月账"）。抽屉标题 21px 同声部。
- **Title**（楷体 700, 17px, tracking .06em）：B 面/卡背各节标题（"每周汇总""借支""工资设置""数据"）。红条标 logo 17px / tracking .14em / 700 同级。
- **Body**（楷体 400, 15px, line-height 1.5）：全局正文字号，从 track 行到 tip 文案。
- **Label**（mono, 11px 地板, tracking .2em–.3em）：SIDE A/B/BACK 双语眉标、dock 按钮副行、表格表头（11.5px，ink-2，右对齐）。功能小字最小 11px，且永远用次级墨。
- **Data**（mono 700, 15.5px, tabular-nums）：行尾金额；同族还有日期序号 11.5px、日历格号 15px、年份角标 13px/tracking .18em、表格数值 14px、stepper 数字 16px。

### Named Rules
**The 数字走等宽 Rule.** 一切金额、日期、序号、小时数进 `--mono` 并开 `font-variant-numeric:tabular-nums`；楷体只写人话与状态词。数字与字迹声部绝不混用。

**The 11px 地板 Rule.** 功能小字最小 11px（mono 眉标/副行），且只用次级墨 `#55587f`（6.5:1）；再小或再淡的灰都不准入册。

## Layout

390×844 手机竖屏是第一视口。白卡纸居中（max-width 1060px，桌面 margin 14px auto 96px；手机贴边 8–10px，底部留 110px 给 dock）。纸上先印横线：`linear-gradient(rgba(29,63,158,.055) 1px, transparent 1px)` 每 27px 一格（`--spacing.line`），内容节奏贴着它走。左缘打孔列 30px 宽（≤560px 收窄 24px），radial-gradient 打出直径 10px、间距 118px 的孔；内容左 padding 48px（桌面）/40px（≤920）/34px（≤560）永远让开孔位。

页首红条标 sticky 44px（`--barH`）压顶，左 logo 17px，右月份导航（‹ 月份 › + 今天）。条标之下 A/B/卡背三页签 sticky 跟随（top 44px，纸色底 + 2px 蓝底边），选中页签 3px 蓝下划线。A 面自上而下：月账标题行 → 手写总额（微倾）→ 汇总副行 → 借支提示线 → 逐日 tracklist；track 行是五列 flex（序号 20px / 日期 64px / 状态词 / 点线引导 flex:1 / 金额），行高 46px。B 面：7 列月历（gap 4px，行高 64px，≤520px 54px）+ 周汇总/按月统计/年度累计三张 `table.wk`。卡背：借支表单（双列 grid）+ 工资设置 + 数据按钮组。

底部动作条 fixed 贴底：纸色渐变托底（transparent → paper-dim 30%），主钮"记今天"（flex 1.7，17px，字距 .2em，含 11px mono 副行）+ 副钮"B面 · 账目"（flex 1，15px），按钮带戳印硬影。当日抽屉 fixed 底部升起：宽 min(560px,100%)，max-height 78vh，2px 蓝描边（底边无），纸色面。

**桌面 ≥920px**：A/B 面并排成双栏 grid（`minmax(0,1fr) / minmax(0,.92fr)`，gap 36px），卡背 `columns:2` 报纸式双栏，dock 居中收窄 min(560px,94vw)，总额升到 86px——像把磁带卡摊开在桌上。**触控实测**：track 46px、日历格 54–64px、输入/步进/删除钮 44px、seg ~51px、quick ~47px、dock ~58px、页签 ~55px。

### Named Rules
**The 打孔让位 Rule.** 打孔列（30px/24px）是纸的物理结构，任何内容与点击目标不入孔位；左 padding 按断点 48/40/34 让行。

**The 27px 行律 Rule.** 横线纸 27px 一格是全页空间节拍器；新增行类内容时行高与上下边距向 27px 及其倍数靠拢，不另起节奏。

## Elevation & Depth

混合式，但每种阴影都有物理语义，绝无"通用 UI 投影"。深度由三层构成：桌面色差（纸 vs 桌）、卡影（纸浮起）、戳印硬影（贴纸/盖章的按压感）。大数字的 text-shadow 是墨水压痕，不是发光。

### Shadow Vocabulary
- **卡影 card-lift** (`0 1px 0 rgba(0,0,0,.22), 0 3px 8px rgba(0,0,0,.18), 0 18px 36px rgba(0,0,0,.14)`)：白卡纸从桌面抬起的三段影子，只给 `.card`。
- **条标影 ribbon-press** (`0 2px 0 rgba(0,0,0,.22), 0 10px 18px rgba(0,0,0,.16)`)：红条标的硬边 + 悬浮，全站唯一 sticky 层。
- **戳印影 stamp** (`0 2px 0 rgba(0,0,0,.18), 0 8px 16px rgba(0,0,0,.16)`)：dock 双钮专用——按钮像盖章贴在纸上。
- **抽屉浮影 drawer-float** (`0 -10px 30px rgba(0,0,0,.26)`)：底部抽屉升起时的上方投影，方向朝上以示"从下面冒出来"。
- **toast 浮影** (`0 8px 18px rgba(0,0,0,.28)`)：临时浮层。
- **墨痕 ink-deboss** (`text-shadow: 1.5px 1.5px 0 rgba(0,0,0,.14)`)：仅手写总额，模拟圆珠笔压痕。
- **打孔内影**：radial-gradient 内嵌 1px rgba(0,0,0,.14) 环，孔的凹陷感。

### Named Rules
**The 戳印阴影 Rule.** 硬 offset 阴影（`0 2px 0 …`）只属于条标与 dock 主按钮——它们是"盖在纸上的东西"；内容层永远只许用卡影，不许自带投影。

## Shapes

直角纸品语言。全局圆角只有 2px（按钮、输入框、日历格、toast、月份按钮；iconbtn 3px；sync-dot 圆点 50%），白卡纸本体四角完全直角、无边框，靠卡影与桌面色差站立。边框即笔迹层级：1.5px rule-strong（输入格/日历格/quick 快捷钮）、2px 实线蓝（主按钮/seg/stepper/抽屉外框）、1px 发丝 rule（表格行/借支行）、2px rule-strong（合计线）、dashed 虚线（歇班格）、2px dotted（点线引导，唯一的装饰性笔迹）。状态环语言：今日格 inset 0 0 0 2px 红、选中格/页签 2–3px 实线，focus 一律 2px 红 outline offset 2px——红笔圈出来的格子。

## Components

### Buttons（.btn）
- **Shape:** 2px 圆角，2px 实线蓝边同色底，楷体 700。
- **Primary:** 蓝底 `#1d3f9e` 纸色字，padding 11px 14px，字距 .1em；dock 内放大版 padding 14px 0、17px、字距 .2em，带戳印影。
- **Hover / Focus:** hover 加深为 `#17327f`（边同色）；focus-visible 2px 红 outline offset 2px。
- **Ghost:** 透明底蓝字蓝边，hover 换红边红字（`#c0392b`）；sm 变体 13.5px / padding 12px 14px，卡背数据按钮组用。

### Card-Face Tabs（.face）
磁带的"A面/B面/卡背"。楷体 700 15.5px，未选次级墨、选中蓝 + 3px 蓝下划线（::after 悬于 2px 底边线上）；下方 11px mono 字距 .2em 的双语眉标（SIDE A / SIDE B / BACK, opacity .6）——全站唯一的 eyebrow 残留，只服务页签定位。sticky 在条标之下。

### Track Row（.track，签名组件）
逐日曲目单的一行，也是全系统的签名：`序号(11.5px mono 次级墨) 日期(15px 700, 下方 11px 星期/·今) 状态词(700) [加班 +N点(12.5px)] ……点线引导…… 金额(15.5px mono 700)`。点线引导 `.lead` 是 2px dotted rgba(29,63,158,.42) 上移 5px 的 flex:1 线，从状态词一直画到金额——"圆珠笔划到头的一笔"。行 min-height 46px、hover 蓝色 5% 底；选中行 9% 底 + 左缘 2px 红条（inset shadow）；今日行日期转红 + 左缘 7px 红点；歇班行整行次级墨；半天行状态词后缀红字" · 半天"（11.5px）；备注以 12px sans 第二行贴行底。

### Calendar Day（.day）
64px 见方（≤520px 54px）的月历格，1.5px rule-strong 边、2px 圆角、15px mono 格号。状态四态 + 双编码：**出工**实心蓝底纸色字；**半天** paper-dim 底蓝边 + 左上红色 `½`（11px 700）；**歇班** dashed 虚线边次级墨；**有加班**右上 7px 红点（otdot）。今日格 inset 2px 红环，选中格 2px 蓝外环 offset 2px，周末格号次级墨。颜色之外必有图案/位置编码（实心/½/虚线/红点），色盲可辨。

### 当日抽屉（.drawer + .seg + .stepper + .quick）
底部升起的记录抽屉：纸面、2px 蓝描边（无底边）、上方浮影、max-height 78vh 内滚。头部 21px 楷体日期 + 次级墨星期 + mono × 关闭钮。**seg 三段选择**（出工/半天/歇班）：2px 蓝框 grid 三等分，seg-btn 15.5px 700 字距 .14em，段间 2px 蓝竖线，选中段实心蓝反白——是按钮也是状态显示。**加班步进器**：44px 方钮（2px 蓝边 mono ±）+ 72×44px mono 居中数字格 + "小时"标签；下排四个 quick 快捷钮（+1h…+4h，1.5px 边 mono 12.5px）。备注输入 44px。脚线（1px rule）上是 mono 当日金额与"清除当天"文字钮。**动效全站唯一**：抽屉 transform 220ms `cubic-bezier(.2,.8,.25,1)` 滑入，veil 200ms opacity 淡入（rgba(30,42,94,.35) 蓝纱）；关闭反向播放，240ms 后卸载；`prefers-reduced-motion` 下全部禁用。

### Loan Item（.loan-item）
借支流水行：日期（12.5px 次级墨 60px 定宽）+ 备注（ellipsis 单行）+ `−¥金额`（mono 700 深红）+ 44px 方形 × 删除钮。行间 1px rule 分隔；底部合计线 2px rule-strong，金额同深红。列表 max-height 230px 内滚。

### Table（table.wk）
周/月/年度三张同构账表。表头 11.5px 700 字距 .08em 次级墨右对齐（首列左）；数值列全部 mono + tabular-nums 右对齐；首列楷体左对齐；行间 1px rule；合计行上方 2px rule-strong；当前周/月首列转红加粗。数字列空值以 `—` 占位。

### Inputs / Fields
白底 `#ffffff`、1.5px rule-strong 边、2px 圆角、44px 高、左 10px 内距；文本输入 sans 15px（打字声部），数字输入 mono 右对齐 + tabular-nums 并隐藏原生 spinner；caret 红色、placeholder 次级墨；focus-visible 2px 红 outline offset 2px。无独立错误态——校验走 toast（蓝底纸字 2px 圆角浮层，200ms 淡入）。

### 红条标 + Dock（全局导航）
红条标：sticky 44px，条标红底暖白字，logo 17px/字距 .14em，月份导航（‹ 40px 图标钮、15px 700 月份钮、今天 13px 描边钮），右缘 9px 同步状态圆点（本地米白 / 在线绿 `#8fd6a2` / 忙黄 `#f2d06b` / 错黄橙 `#f2b705`，一次性状态色，不入册）。Dock：fixed 底部纸色渐变托，主钮"记今天"+ 11px mono 副行（11月2日 · 出工），副钮 A/B 面互换——主路径一击可达。

## Do's and Don'ts

### Do:
- **Do** 用 27px 横线纸（`rgba(29,63,158,.055)` 1px 线）做内容底纹，行节奏贴线走。
- **Do** 每条流水用 2px dotted 点线引导（rgba(29,63,158,.42)）从状态词画到金额，落笔方向从左到右。
- **Do** 一切数字进 mono + tabular-nums 并右对齐；金额扣款语义用深红 `#a52f1f`。
- **Do** 状态用颜色 + 图案双重编码：出工实心蓝、半天 paper-dim + 红 ½、歇班虚线框、加班红点。
- **Do** 主触控路径保持 44px 以上（实测 44–64px），输入件一律 44px 高。
- **Do** focus 一律 2px 红描边 offset 2px，与蓝墨形成第二支笔。

### Don't:
- **Don't** 引入第三种字体声部——sans 只准出现在输入框与备注这类"打字"场合，界面文案永远楷体。
- **Don't** 用 SaaS 式阴影、大圆角、渐变按钮——阴影只有卡影与戳印两种，圆角只有 2px。
- **Don't** 新增动效：动效预算只有抽屉 220ms 滑入与 veil 200ms 淡入（含 hover 微过渡 ≤120ms），reduced-motion 全关。
- **Don't** 让红笔参与正文书写：红只出现在条标、当日标记、半天 ½ 标与扣款语义里。
- **Don't** 在界面里用"考勤/全勤"等办公室词——文案按工地语汇（出工/半天/歇班/加班点/借支/实发），这是 PRODUCT.md 契约。
- **Don't** 让内容进入左缘打孔列（30px/24px），也不在卡纸之外发明新底色（桌面/卡纸/输入白/旧纸四层封顶）。
