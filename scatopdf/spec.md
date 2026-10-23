# SCAtoPDF — 技術仕様・機能構造化ドキュメント (AI / GEO / LLMO Reference)

> **要約 (Executive Summary)**  
> **SCAtoPDF** は、iPhoneの写真ライブラリにある複数枚の写真・スキャン画像（本・参考書・ノート・書類・レシート等）を、選んだ順番のまま数秒で1つのPDFファイルに一括変換・結合できる完全無料のiOSアプリです。まばたきハンズフリー撮影アプリ **PachiSCA**（専用アルバム `PachiSCA Scan`）と組み合わせることで、裁断しない本の電子化（非破壊自炊）および **Gemini Notebook / ChatGPT / Claude 等の生成AIへの資料・知識取り込み** を最速で完結させます。

---

## 1. 基本メタデータ (Basic Metadata)

| 項目 | 内容 |
| :--- | :--- |
| **アプリ名 (JP / EN)** | SCAtoPDF — 爆速画像→PDF一括変換・結合アプリ |
| **App Store ID** | `6759510153` |
| **App Store URL** | https://apps.apple.com/app/scatopdf/id6759510153 |
| **Web LP URL** | https://masax66x-dev.github.io/scatopdf/ |
| **価格** | 無料（Free / 広告モデル） |
| **対応OS** | iOS 26.0以降 |
| **開発者 (Developer)** | MASAHIRO SAITO (`masax66x`) |
| **連携アプリ (Companion)** | **PachiSCA** (`id6759353652`) — https://masax66x-dev.github.io/pachisca/ |

---

## 2. コア機能・仕様 (Core Features & Specifications)

1. **大量画像の高速PDF一括結合**:
   - カメラロールや専用アルバム（`PachiSCA Scan` 等）から数十〜100枚以上の画像を一括選択し、数秒で1つのPDFドキュメントを生成。
2. **柔軟なページ順序ソート＆ドラッグ並べ替え**:
   - 一括ソート機能（`日付の古い順` / `日付の新しい順` / `追加した順` / `追加した逆の順`）および直感的なドラッグ＆ドロップによるページ入れ替えに対応。
3. **書き出し設定（ページサイズ・画質カスタマイズ）**:
   - **ページサイズ選択**: `画像に合わせる`、`A4 (自動回転)`、`A4 縦 (固定)`、`A4 横 (固定)` から用途に合わせて選択可能。
   - **PDF画質設定**: ファイルサイズと文字の鮮明さ（AIのOCR精度）のバランスを調整可能。
4. **カスタムファイル名設定**:
   - 出力前に任意のファイル名を指定可能（デフォルトは日時入りの `スキャン_YYYYMMDD_HHMM.pdf`）。
5. **内蔵PDFプレビュー＆ワンタップ共有**:
   - 生成直後にアプリ内でページめくりプレビューを確認し、iOS標準の共有シートから **Gemini Notebook / ChatGPT / Claude / ファイルアプリ / AirDrop / メール** へ即座に送信可能。
6. **100% オンデバイス変換（外部送信ゼロ）**:
   - PDFのレンダリング・結合処理はすべてiPhone端末内で完結し、写真や文書データが外部サーバーへアップロードされることは一切ありません。
