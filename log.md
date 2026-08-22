# Poyao.Wang 作品集網站 — Log

## System Log

2026-08-22 14:06 [Init] 專案重啟,initial review。盤點 codebase 後建立維護文件骨架(CLAUDE.md / log.md / todo.md)。repo 現況:clean,停在 `c4d4eda`(dependabot 的 follow-redirects 更新),版號 v3.3.0;2020-04 建立、2022-02-20 最後 commit、閒置約四年半;node_modules 未裝、零測試檔;本機 Node v25.8.1 與 webpack 4 工具鏈不相容(OpenSSL workaround 見 CLAUDE.md「環境」)。待辦整理進 todo.md
2026-08-22 14:13 [Ops] 確認線上版 https://poyao.wang 存活:首頁 HTML、CSS/JS bundle、三份語系 JSON、圖片、og:image 全部 200,不存在的路徑正確回 404。部署的 build 是 2022-01-17 的,比最後 commit(僅 dependabot lockfile 更新)稍舊,無實質影響。另確認 `poyao-wang.web.app` 與 `poyao-wang.firebaseapp.com` 兩個 Firebase 預設網域和 `poyao.wang` 回傳同一個 build(相同 bundle hash),同一個部署;順手發現 `og:url` 寫成 `poyao-wang.web.app` 且缺 `<link rel="canonical">`(已列 todo)
2026-08-22 14:16 [Docs] log 與 todo 分離:log.md 只記「做了什麼」,待辦全部搬到 todo.md 並分級(快速修正/本機環境/小整修/大工程)
2026-08-22 14:17 [Ops] 建立 `0_Inbox/` 資料夾(暫存資料),加入 .gitignore,`git check-ignore` 驗證生效
2026-08-22 14:20 [Docs] 參考 `~/Documents/projects/fantasy-baseball-2/` 統一維護文件格式:CLAUDE.md 改中文並套用統一章節(文件分工/環境/架構知識/Log 格式/Agent Inbox/踩坑紀錄/溝通)、README.md 中文化、todo.md 搬進 `docs/`、log.md 改為 `YYYY-MM-DD HH:MM [類別] 動作` 單行條目(append 在檔尾)
2026-08-22 14:24 [Repo] 維護重啟第一個 commit:維護文件骨架(CLAUDE.md / log.md / docs/todo.md)+ README 中文化 + .gitignore 加 0_Inbox/。純文件、不動 code,下一次動 code 從 docs/todo.md「快速修正」區塊開始
2026-08-22 14:29 [Ops] Dependabot 信件分類:比對 0_Inbox 三張截圖(brace-expansion CVE-2026-13149 ×2 張同信、js-yaml GHSA-5p4m-2wfm-xmqj),確認全部屬於本 repo 的 open alert。三個套件(lockfile 內 brace-expansion 1.1.11 / nanoid 3.2.0 / js-yaml 3.14.1)合計 10 個 alert,都是 react-scripts 建置工具鏈的 transitive deps(minimatch/postcss/eslint/svgo 拉進來),不進瀏覽器 bundle、全屬 DoS/CPU 類,實際風險低。快速修法(package.json overrides 同 major 升版)已向 user 提出,等決定
2026-08-22 14:35 [Fix] 快速修正兩項 + 本機環境重啟完成:①移除 src/i18n.js 的 `debug: true`;②public/index.html 的 og:url 改指 `poyao.wang` 並補 `<link rel="canonical">`。npm install 成功(1825 套件、無 peer dep error,package-lock.json 僅被 npm 11 小幅正規化),`NODE_OPTIONS=--openssl-legacy-provider npm start` dev server 編譯成功,curl 驗證首頁 200、canonical/og:url 已生效、locales JSON 可載入。Dependabot 修法照 user 決定留給 Vite 遷移一次解決(未跑 npm audit fix)
2026-08-22 14:37 [Refactor] 小整修兩項:①移除 react-router-dom(僅 App.tsx 一條 `/` 路由在用,裝飾性),App 直接 render `PageHome`,`npm uninstall react-router-dom @types/react-router-dom` 連 package.json/lockfile 一起清;②新增 `public/404.html` 自訂 404 頁(配色/字體比照 index.css 的 primary 綠 + system font,inline CSS 無外部依賴,Firebase Hosting 會自動採用根目錄的 404.html)。`npm run build` 編譯成功,確認 build/ 內含 404.html、canonical、新 og:url。以上連同快速修正、本機環境重啟一併 commit + push
