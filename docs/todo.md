# 待辦清單

維護工作的 backlog。完成的事項打勾,並在 `log.md` 記一筆(做了什麼)。

## 快速修正(分鐘級)

- [x] 關閉 [src/i18n.js](src/i18n.js) 的 `debug: true`(正式環境 console 太吵)
- [x] 修正 [public/index.html](public/index.html) 的 `og:url`:`poyao-wang.web.app` → `poyao.wang`,順手補 `<link rel="canonical" href="https://poyao.wang/" />`

## 本機環境(重啟的第一步)

- [x] `npm install`(4 年沒裝,留意 peer dependency 警告)
- [x] 用 `NODE_OPTIONS=--openssl-legacy-provider npm start` 跑起 dev server,確認本機還能開發(webpack 4 在 Node 17+ 需要 workaround)

## 小整修(小時級)

- [x] 決定 react-router-dom 去留:只有一條 `/` 路由,其實可直接 render `PageHome` → 已移除 react-router-dom(含 @types),App.tsx 直接 render
- [x] 自訂 404 頁(目前是 Firebase 預設頁;單頁網站影響不大,可順手做) → `public/404.html`,Firebase Hosting 自動採用
- [ ] 清掉 lint 的 5 個 `no-unused-vars` 警告(ItemAbout / ItemProject 未用的解構 prop、NavBar 的 `props`、SectionProjects 的 `e`)——都是 CRA 時代就有的 dead code,Vite 遷移時刻意只降為 warning 不改 code(eslint.config.js 有註解)

## 大工程(候選)

- [x] 遷移 Vite + 升級 React 17 → 18/19、TypeScript 4.4 → 5.x(CRA 已終止維護,這是依賴全面翻新的前提) → 2026-08-22 完成:一次到位 Vite 8 / React 19 / TS 5.9 / i18next 26 / ESLint 10,全新 lockfile `npm audit` 0 vulnerabilities(原 158 個 Dependabot alert 全屬 react-scripts 工具鏈),詳見 log.md 與 commit 19632a2
- [ ] 縮小 JS bundle:未壓縮約 1.1MB、無 code splitting(lottie JSON ~416KB inline 是大戶)——Vite 遷移時刻意不改(行為 100% 不變),另開做
- [ ] TS 7(Go 重寫版)評估——typescript-eslint 支援度跟上再說
