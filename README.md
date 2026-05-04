# 濟州島員工旅遊 App

ITRI 資通服科福委會 5 天 4 夜濟州島員工旅遊(2026/5/21–5/25)的個人旅遊輔助 App。

> Live demo: https://fankurt.github.io/jeju_trip_app/

## 功能

5 個底部 Tab:

- **首頁** — 今日行程、花費快覽、快速入口
- **行程** — 出發/回程航班、5 日卡片(可點入查看詳情)
- **記帳** — 韓元 ↔ 台幣 換算、分類佔比、按日明細
- **必買** — 個人 checklist、分類管理、退稅提示
- **須知** — 出發前準備、行李、跟團規範、緊急聯絡(可撥號)、退稅

資料以 `localStorage` 持久化,離線可用。

## 開啟方式

直接雙擊 `index.html` 即可在瀏覽器開啟,或部署到任意靜態 host。

> 因 in-browser Babel 在 `file://` 下不能透過 XHR 抓外部 JSX,React 程式碼直接內嵌在 `index.html` 裡。

## 檔案結構

```
.
├── index.html   # 入口 + 內嵌 React app
├── styles.css   # 設計系統 + 樣式
└── data.js      # 行程、航班、必買、須知等靜態資料
```

## 技術

- React 18 (CDN UMD build)
- Babel Standalone(瀏覽器即時編譯 JSX)
- Pure CSS(設計 token 採 CSS variables)
- 無 build step、無後端

## 設計

設計稿在另一個 `design_handoff_jeju_trip_app/` 資料夾,包含完整 design tokens、資料 schema 與 6 個 screen 的 spec。
