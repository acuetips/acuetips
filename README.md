# GOD OF CUE TIP

GNUHR 風格的撞球皮頭展示網站。黑色主題、無電商功能，純展示。

## 開始

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 客製化 CSS

所有視覺設定集中在 `src/styles/tokens.css`：

- `--color-bg` — 背景色
- `--color-text` — 文字色
- `--text-stroke` — 文字描邊（GNUHR 風格關鍵）
- `--spacing-*` — 間距
- `--product-thumb-size` — 列表縮圖大小

元件樣式在 `src/app/globals.css`，商品資料在 `src/data/products.ts`。

## 技術

- Next.js 15 (App Router)
- TypeScript
- CSS Variables（高度客製化）
- IBM Plex Mono（GNUHR 風格等寬替代字型）
