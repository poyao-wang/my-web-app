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

## 大工程(候選)

- [ ] 遷移 Vite + 升級 React 17 → 18/19、TypeScript 4.4 → 5.x(CRA 已終止維護,這是依賴全面翻新的前提)
- [ ] 縮小 JS bundle:未壓縮約 1MB、無 code splitting(lottie / gsap 是大戶)

### 大工程備註(2026-08-22,給新 session 的 context)

- **動機(一次解決三件事)**:①CRA 已終止維護;②GitHub 158 個 Dependabot alert
  全是 react-scripts 工具鏈的 transitive deps(DoS 類為主、不進瀏覽器 bundle,
  實際風險低,所以不急著個別修);③Node 25 跑 webpack 4 需要 OpenSSL workaround。
  遷移後三者一併消失
- **必須原樣保留**:i18n 即 CMS 架構(`public/locales/` 三份 JSON 內容不動)、
  GSAP ScrollTrigger 捲動動畫行為、Lottie 對應(`animeFns.ts`)、單一 `index.css`、
  Firebase Hosting 部署 flow(產出還是要進 `build/` 或改 firebase.json)
- **已知必改點**:`ReactDOM.render` → `createRoot`(React 18)、TS 4.4 → 5.x
  型別會收緊、React 18 StrictMode 在 dev 會 double-invoke effects——各 section 的
  gsap timeline 都在 `useEffect` 建,`[]` deps 是刻意的,遷移時要驗證動畫不會建兩次
- 動手前先跟 owner 確認範圍(要一次到位 React 19,還是先 18 穩一版)
