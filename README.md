# Poyao.Wang 作品集網站

Poyao Wang 的個人作品集網站,單頁 React app,部署在 Firebase Hosting。
2020-04 用 Create React App(含 TypeScript)建立,2022-02 之後閒置,
2026-08 起重啟維護,同月從 CRA 遷移到 Vite。

- 線上版:https://poyao.wang
- 設計稿:[Figma](https://www.figma.com/file/tPiTGrs85heowM44lInapP/Poyao.Wang?node-id=2%3A2)
- repo:https://github.com/poyao-wang/my-web-app

## 技術棧

- React 19 + TypeScript 5.9(Vite 8;2026-08 從 Create React App 4 遷移)
- 動畫:GSAP(ScrollTrigger 捲動動畫)+ Lottie(hero/about/project 動畫)
- 多語系:i18next,en / ja / zh 三語
- 部署:Firebase Hosting(專案 `poyao-wang`)

## 資料夾結構

```
my-web-app/
├── README.md
├── CLAUDE.md                       給 Claude Code 的操作指引
├── log.md                          維護 log(最新在檔尾)
├── index.html                      Vite 入口 HTML(SEO meta 都在這)
├── vite.config.ts                  Vite 設定(outDir: "build" 對接 firebase.json)
├── eslint.config.js                ESLint flat config
├── docs/
│   └── todo.md                     待辦清單
├── public/                         靜態資源(build 原樣拷貝)
│   ├── locales/                    en/ja/zh translation.json = 翻譯檔 + 網站內容
│   └── assets/                     圖片
├── src/
│   ├── components/                 Section* / NavBar / PageHome …
│   ├── assets/                     Lottie JSON、背景 SVG
│   ├── utils/animeFns.ts           Lottie 動畫名稱 → JSON 對應
│   ├── mainData.model.ts           locale JSON 的型別定義
│   ├── i18n.js                     i18next 設定
│   └── index.css                   全站樣式(單一檔案)
└── 0_Inbox/                        暫存資料(不進 git)
```

## 改網站內容

文案、技能清單、專案卡片、聯絡連結全部在 `public/locales/{en,ja,zh}/translation.json`,
不在元件裡——改內容就是改這三份 JSON(三種語言結構必須一致),改完重新 build 部署。
內容形狀要變動時,連 `src/mainData.model.ts` 的型別一起改。細節見 CLAUDE.md「架構知識」。

## 本機開發

```bash
git clone https://github.com/poyao-wang/my-web-app.git
cd my-web-app
npm install
npm start        # dev server(http://localhost:5173)
```

其他指令:`npm run build`(tsc 型別檢查 + vite build,產出 `build/`)、
`npm run preview` 本機預覽正式 build、`npm run typecheck`、`npm run lint`。
需要 Node 20.19+(CRA 時代的 `--openssl-legacy-provider` workaround 已不需要)。

## 部署

```bash
npm run build          # 產出 build/
firebase deploy        # Firebase Hosting,專案 poyao-wang
```

Firebase 另有兩個預設網域(`poyao-wang.web.app`、`poyao-wang.firebaseapp.com`)
和 `poyao.wang` 指向同一個部署,無法關閉;對外請一律用 `poyao.wang`。

## 維護文件

- 做了什麼:`log.md`
- 待辦:`docs/todo.md`
- 給 Claude Code 的指引(架構知識、踩坑紀錄):`CLAUDE.md`
