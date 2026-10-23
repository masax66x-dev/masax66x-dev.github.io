# X株ストック (XStock Stocker) — 技術仕様・機能一覧 / Technical Specifications

- **アプリ名 / App Name:** X株ストック (XStock Stocker)
- **カテゴリ / Category:** Finance / Utilities (ファイナンス / ユーティリティ)
- **プラットフォーム / Platform:** iOS (iPhone)
- **開発者 / Developer:** MASAHIRO SAITO (`masax66x`)
- **App Store URL:** https://apps.apple.com/jp/app/id6757352103
- **価格 / Price:** Free / 無料

---

## 1. アプリ概要 / Overview
- **日本語:** **X株ストック** は、SNS（Xなど）やWebで見かけた気になる日本株のスクリーンショット・画像から、オンデバイスOCR（文字認識）と内蔵の東証上場銘柄マスタを照合して「4桁の証券コード・銘柄名」を自動抽出し、画像や一言メモと一緒にローカル保存・整理できる個人投資家向け銘柄アイデア管理アプリです。
- **English:** **XStock Stocker (X株ストック)** is an iOS stock idea manager for individual investors. It automatically extracts 4-digit Japanese TSE stock codes and company names from screenshots using on-device OCR matched against a built-in Tokyo Stock Exchange company master database, allowing users to organize stock ideas alongside zoomable screenshots and notes.

---

## 2. コア機能・特徴 / Core Features

### 2.1 画像からの銘柄コード自動抽出 / Auto Stock Code Extraction (OCR × TSE Master)
- カメラロールからスクリーンショットや画像を選択すると、オンデバイス文字認識（OCR）により画像内のテキストを解析し、内蔵の東証上場企業マスタデータと照合して4桁の証券コードおよび企業名を自動検出します。
- Analyzes text in selected screenshots via on-device OCR and cross-references the built-in TSE company database to detect 4-digit stock codes and company names—even when multiple stocks appear in a single image.

### 2.2 スクリーンショット＆一言メモの一元管理 / Zoomable Screenshots & Quick Notes
- 登録した銘柄ごとに、元となったスクリーンショット画像（ピンチズーム拡大表示対応）と自由記述のメモを紐づけて保存。「なぜこの銘柄に注目したのか」を後から一目で振り返ることができます。
- Attaches the original screenshot (with pinch-to-zoom support) and custom text notes to each stock entry so you always remember the context of your investment idea.

### 2.3 完全オンデバイス処理・プライバシー保護 / 100% On-Device Privacy
- 画像の文字認識（OCR）および銘柄データはすべてお使いのiPhone端末内（ローカルストレージ）で処理・保存されます。外部サーバーへの画像送信やアカウント登録は一切不要です。
- All OCR processing and stock records remain 100% on your iPhone with zero external server uploads.
