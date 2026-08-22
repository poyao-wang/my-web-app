# Poyao.Wang 作品集網站 — Claude 操作指引

## 專案概覽

Poyao Wang 的個人作品集網站(https://poyao.wang),單頁 React app,部署在
Firebase Hosting(專案 `poyao-wang`)。2020-04 用 Create React App 建立,
2022-02 之後閒置約四年半,2026-08 起重啟維護,同月完成 CRA → Vite 遷移。

技術棧:Vite 8、React 19、TypeScript 5.9(2026-08-22 從 CRA 4 / React 17 /
TS 4.4 一次到位升級)。
owner 正在重新熟悉 TypeScript——改動保持小、跟既有 pattern 一致,大改前先討論。

## 文件分工

- **README.md** — 給人看的操作手冊:環境設定、folder 結構、常用指令、部署
- **CLAUDE.md**(這份)— 給 Claude 的操作指引:Log/Agent Inbox 規則、架構知識、踩坑紀錄
- **log.md** — chronological log(常更新,留根目錄方便隨手看)
- **docs/todo.md** — 待辦清單

同一件事只在其中一份寫,其他份用連結指過去。

## 環境

- 本機 Node v25.8.1(Vite 8 需要 Node 20.19+ / 22.12+)。CRA 時代
  `NODE_OPTIONS=--openssl-legacy-provider` 的 workaround 已隨 2026-08-22 遷移移除,
  指令直接跑即可;dev port 從 3000 改為 5173
- 部署:`npm run build` 後 `firebase deploy`(firebase.json 伺服 `build/`,
  Vite 的 `build.outDir` 也設 `build/` 對接);firebase-tools 不是 devDependency,
  用全域或 `npx`。登入憑證在本機(2026-08-22 重新授權過),失效時
  `npx firebase-tools login --no-localhost` 走網頁拿 authorization code
- 沒有測試檔也沒有 test runner(jest / testing-library 隨 Vite 遷移移除);
  檢查用 `npm run typecheck`(tsc)和 `npm run lint`(ESLint 10 flat config)

## 資料夾結構

```
index.html      Vite 入口 HTML(SEO meta 都在這)
vite.config.ts  Vite 設定(outDir: "build" 對接 firebase.json)
eslint.config.js  ESLint 10 flat config
public/         靜態資源(build 原樣拷貝)
  locales/        en/ja/zh translation.json = 翻譯檔 + 網站內容來源
  assets/         圖片
  404.html        自訂 404 頁(Firebase Hosting 自動採用根目錄的 404.html)
src/
  components/     Section* / NavBar / …(單頁由 PageHome 組合五個 section)
  assets/         Lottie 動畫 JSON、背景 SVG
  utils/          animeFns.ts(動畫名稱 → JSON 對應)
  mainData.model.ts  locale JSON 的型別定義(RootObject 對應整份 translation.json)
  i18n.js         i18next 設定
  index.css       全站樣式(單一檔案,BEM-ish)
docs/           維護文件:todo.md
0_Inbox/        暫存資料(不進 git)
```

## 架構知識

- **內容即 i18n 檔**:`public/locales/{en,ja,zh}/translation.json` 同時是翻譯檔和網站
  CMS——所有文案(nav、hero、about、skills、projects、contact)都在裡面。改網站內容
  = 改這三份 JSON,三種語言結構必須一致(`fallbackLng: "en"`)。改內容形狀 = 同步更新
  `src/mainData.model.ts` + 三份 locale。元件用 `t("sectionX", { returnObjects: true })`
  讀取再 cast 成 model 裡的 interface。
- **Lottie 動畫**:`src/assets/animations/*.json`,以 `AnimeName` union(定義在
  mainData.model.ts)當 key,`src/utils/animeFns.ts` 的 switch 把 key 對應到檔案。
  新增動畫 = 放 JSON + 加 case + 加 union member + locale 引用。
- **GSAP 捲動動畫**:每個 Section 元件在 `useEffect` 建 `gsap.timeline` 掛
  `ScrollTrigger`(多為 `scrub`),refs 由父元件往下傳(如 `IconWithContainer` 的
  ref 是 props 傳入)。React 19 起 timeline 包在 `gsap.context()` 裡、cleanup 做
  `ctx.revert()`(lottie 實例則 `destroy()`)——StrictMode 在 dev 會
  mount→cleanup→mount,沒有 cleanup 會疊出雙倍 ScrollTrigger / lottie;production
  單一 mount 不受影響。`useEffect` 的 `[]` deps + `eslint-disable` 是刻意的,
  timeline 只在 mount 建一次。
- **樣式**:只有一份全域 `src/index.css`,BEM-ish class(`section-skills`、
  `skill-items__col`),section id 如 `page-home__section-skills`。改版面幾乎一定
  動這個檔;RWD 靠 `mobile-hide` 之類的 class。
- **沒有 router**:App.tsx 直接 render `PageHome`(2026-08 移除了裝飾用的
  react-router-dom);404 頁交給 `public/404.html`,不進 React。

## Log 格式

`log.md` 是單一 chronological log,格式:`YYYY-MM-DD HH:MM [類別] 動作`,
新條目 append 在檔尾(最新在最下面)。

說「log」時同步更新 `log.md`、`README.md`(結構異動時)、`docs/todo.md`(完成打勾)。

## Agent Inbox

說「agent inbox」時,將本 session 的重要進展寫入:
`/Users/poyaowang/Documents/projects/life-os/data/agent-inbox.md`

格式:在檔案最上方插入一筆(新的在前):
```
## YYYY-MM-DD HH:MM [my-web-app] {標題}
{1–3 行摘要,說明做了什麼、現在狀態、下一步}
```

## 踩坑紀錄

- CRA 時代已結束:2026-08-22 遷移 Vite 8 + React 19 + TS 5.9 + i18next 26,
  全新 lockfile 讓 158 個 Dependabot alert(全屬 react-scripts transitive deps)
  一次消失。遺留的升級決策(JS bundle 瘦身、TS 7)見 docs/todo.md「大工程」
- macOS 的 AirPlay Receiver 占用 5000 port——Firebase Hosting emulator 起不來時
  會自動改跳 5002,記得 `curl http://127.0.0.1:5002`(或去系統設定關 AirPlay)
- `npm run build` 的兩個警告是已知項目:lottie-web 內部用 `eval`(套件本身行為)、
  chunk > 500 kB(未壓縮約 1.1 MB,瘦身列在 docs/todo.md,別誤當遷移回歸)
- Firebase 給的兩個預設網域(`*.web.app`、`*.firebaseapp.com`)和自訂網域
  `poyao.wang` 是同一個部署、不互相轉址——對外一律用 `poyao.wang`;
  og:url / canonical 的 SEO 拆分問題已於 2026-08-22 修正並部署上線

## 溝通

繁體中文,口語輕鬆,簡潔不廢話。
