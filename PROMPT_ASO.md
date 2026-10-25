# PROMPT_ASO.md — App Store Optimization (ASO) メタデータ管理 & 成長戦略

**最終更新日:** 2026-10-23  
**対象リポジトリ:** `masax66x-dev.github.io`  
**主対象アプリ:** **PachiSCA** (`id6759353652`) / **SCAtoPDF** (`id6759510153`) / **HOUKOUKU CAM** (`id6756608831`)

---

## 1. アナリティクス課題分析と「ダウンロードが伸びる」3大対策

### 1.1 現状の数値ボトルネック（App Store Connect 実績）
| アプリ名 | 表示回数 (Impressions) | 詳細ページ閲覧 (PPV) | 初回DL数 | ページ閲覧➔DL率 (CVR) | 最優先の伸ばし方 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **PachiSCA** | 728 | 44 | 5 | **11.4%** | ①「本スキャン・自炊・AI取り込み」検索ワード網羅で表示増<br>②「SCAtoPDF連携でPDF化まで完結」を明記してCVRを30%へ引き上げ |
| **SCAtoPDF** | 738 | 34 | 4 | **11.8%** | PachiSCAとのセット訴求（相互送客）で両方同時にDLさせる |
| **HOUKOUKU CAM** | 1,890 | 79 | 25 | **31.6%** | 100バイト超過で切れていた後半キーワード（「現場写真」「報告書」）を先頭へ救出 |

### 1.2 ダウンロード数を底上げする3つの柱
1. **【即時反映（審査不要）】プロモーションテキスト（170文字）の刷新**:
   - 詳細ページを開いたユーザーの約88%が離脱していた原因（「まばたきで撮った後、どうやってPDFやAIにするの？」という疑問）を、冒頭3行のプロモーションテキストで即座に解消します。
2. **【次回アプデ時】100バイト厳守キーワード＆サブタイトルの最適化**:
   - 「まばたきカメラ」という手段だけでなく、ユーザーが実際に検索する**目的ワード（`自炊`, `本`, `スキャン`, `電子化`, `生成AI`, `ハンズフリー`, `参考書`, `ノート`, `PDF`）**を100バイト上限ギリギリ（99バイト）まで配置します。
3. **【Web / GEO / LLMO】GitHub Pages個別LP（Smart App Banner ＋ 構造化データ）**:
   - iPhoneのSafariで開いた瞬間に画面最上部へApple公式の「App Storeで開く」バナー（Smart App Banner）を自動表示し、1タップでストアへ誘導します。
   - `spec.md` と JSON-LD により、ChatGPT / Perplexity / Gemini に「本を裁断せずに電子化してAIに読ませるアプリ」として優先引用（GEO/LLMO）させます。

---

## 2. PachiSCA（`id6759353652`）ASOメタデータ（コピペ用）

### 2.1 タイトル & サブタイトル（最大30文字）
- **🇯🇵 日本語**
  - **名前 (Title):** `PachiSCA - まばたきで本・書類を連続スキャン` （27文字）
  - **サブタイトル (Subtitle):** `両手で本を押さえたまま自動シャッター！非破壊自炊＆AI取り込み` （30文字）
- **🇺🇸 英語 (English)**
  - **Name (Title):** `PachiSCA: Blink Book Scanner` （28 chars）
  - **Subtitle:** `Hands-Free Camera for Study AI` （30 chars）

---

### 2.2 プロモーションテキスト（最大170文字・審査不要で今すぐ変更可能！）

#### 🇯🇵 日本語（153文字 / 170文字制限）
```text
【両手で本を押さえたまま、まばたきで連続スキャン！】分厚い本や参考書・ノートを裁断せずに高速電子化。画面タップ一切不要、0.4秒目を閉じるだけで自動シャッター！姉妹アプリ「SCAtoPDF」と連携して、Gemini NotebookやChatGPT等の生成AIへの資料取り込みが最速で完結します。完全無料。
```

#### 🇺🇸 英語（168文字 / 170文字制限）
```text
Hands-free book & note scanner! Hold thick books open with both hands and blink (0.4s) to trigger the shutter. Pair with SCAtoPDF to feed PDFs into AI tools. 100% free!
```

---

### 2.3 キーワード（最大100バイト厳守・スペースなしカンマ区切り）

> **重要ルール:** App Storeのキーワード欄は「100文字」ではなく**「100バイト（UTF-8）」**上限です。以下の文字列はバイト数を厳密に検証済みです。

#### 🇯🇵 日本語キーワード（99バイト / 100バイト上限）
```text
自炊,本,スキャン,電子化,生成AI,ハンズフリー,連写,ノート,参考書,書類,PDF
```

#### 🇺🇸 英語キーワード（97バイト / 100バイト上限 ※日本ストアでも合算インデックス）
```text
blink,shutter,handsfree,book,scanner,digitize,study,notes,document,capture,auto,camera,AI,PDF,OCR
```

---

### 2.4 概要・説明文 (Description)

#### 🇯🇵 日本語
```text
「分厚い本や参考書を両手で押さえると、スマホのシャッターボタンが押せない…」
「本を裁断せずに（傷つけずに）電子化して、Gemini NotebookやChatGPTなどの生成AIに取り込みたい！」

PachiSCA（パチスカ）は、そんな悩みを解決する【完全無料】のまばたきハンズフリー連続スキャンカメラです。

スマホを卓上スタンドに置き、両手でしっかり本を開いて押さえたまま「パチッ」と0.4秒目を閉じるだけ。
画面に一切触れることなく、手ブレゼロで次々とページを連続撮影できます。

━━━━━━━━━━━━━━━━━━━━
■ 本を傷つけず、生成AIへ最速で取り込む3ステップ
━━━━━━━━━━━━━━━━━━━━
【STEP 1】PachiSCAでハンズフリー連写
両手で本を押さえ、「ページをめくる ➔ 0.4秒目を閉じる」を繰り返すだけ。撮影した画像は自動的に専用アルバム「PachiSCA Scan」に整理されます。

【STEP 2】姉妹アプリ「SCAtoPDF」（無料）で一括PDF化
「PachiSCA Scan」アルバムの写真を選択してワンタップするだけで、数十〜数百ページの画像が数秒で1つのPDFファイルに結合されます。

【STEP 3】生成AI（Gemini Notebook / ChatGPT / Claude）へ投入！
完成したPDFをAIツールに読み込ませれば、専門書の要約、試験対策の暗記問題作成、資料横断検索がすぐに行えます。

━━━━━━━━━━━━━━━━━━━━
■ PachiSCAの5大特徴
━━━━━━━━━━━━━━━━━━━━
1. 自然なまばたきでは誤爆しない「0.4秒ホールド判定」
Apple純正のVisionフレームワークで目の開閉度（EAR値）を毎秒20回リアルタイム解析。無意識の瞬き（0.1〜0.2秒）をスルーし、意識的に0.4秒目を閉じたときだけシャッターを切ります。

2. 目の感度スライダー ＆ 練習用「テストモード」
スタンドの角度や照明に合わせて感度を0.01単位で微調整可能。「テストモード」をONにすれば、写真を保存せずにシャッター反応だけを事前チェックできます。

3. 専用アルバム「PachiSCA Scan」への自動振り分け
スキャンした本のページが日常のプライベート写真と混ざらないため、PDF化や撮影後の整理が圧倒的にスムーズです。

4. 1.0x〜5.0x ズーム ＆ 左右パネル切替
スタンドの高さに合わせたズーム調整や、横画面時の操作パネル左右入れ替えに対応。

5. 100% オンデバイス処理でプライバシー完全保護
フロントカメラの映像や顔の特徴点データはiPhone端末内のメモリ上でのみ判定に使われ、保存・外部サーバーへの送信は一切行われません。

・Webサポート＆詳細ガイド: https://masax66x-dev.github.io/pachisca/
```

#### 🇺🇸 英語 (English)
```text
"When I hold a thick book open with both hands, I don't have a third hand to tap the camera shutter..."
"I want to digitize books and notes without cutting the spine so I can feed them into Gemini Notebook, ChatGPT, or Claude!"

PachiSCA is a 100% FREE hands-free document & book scanning camera powered by on-device blink detection.

Simply place your iPhone on a desk stand, hold your book flat with both hands, and close your eyes for 0.4 seconds. PachiSCA automatically fires the shutter—zero screen tapping, zero camera shake!

■ 3 Steps to Feed Books into Generative AI
1. Scan Hands-Free with PachiSCA: Turn the page, blink for 0.4s, and repeat. All pages are neatly saved into the dedicated "PachiSCA Scan" album.
2. Merge with "SCAtoPDF" (Free Companion App): Select your scans and combine 50+ pages into a single PDF in seconds.
3. Upload to AI: Drop your PDF into Gemini Notebook, ChatGPT, or Claude for instant summaries, Q&A, and study guides.

■ Key Features
• Smart 0.4s Hold Detection: Ignores natural involuntary blinks (0.1–0.2s) and triggers only when you intentionally close your eyes for 0.4 seconds.
• Adjustable Eye Sensitivity & Test Mode: Fine-tune sensitivity with live EAR feedback and test triggers without saving photos.
• Dedicated "PachiSCA Scan" Album: Keeps your book scans separate from personal photos.
• 1.0x–5.0x Zoom & Landscape Left/Right UI Toggle.
• 100% On-Device Privacy: Face and eye landmark analysis runs entirely in local memory using Apple Vision. No face data is ever stored or transmitted.
```

---

## 3. 姉妹アプリ SCAtoPDF（`id6759510153`）ASOメタデータ（相互送客用）

### 3.1 プロモーションテキスト（最大170文字・審査不要で今すぐ変更可能！）
- **🇯🇵 日本語（147文字）:**
```text
【大量の写真を数秒で1つのPDFに一括変換！】スマホで撮影した本・ノート・書類の画像を、選んだ順番のまま瞬時にPDF化。まばたきハンズフリー撮影アプリ「PachiSCA」で撮りためたアルバムもワンタップで結合でき、生成AIへの資料取り込みや非破壊自炊・レポート提出が爆速で完結します。完全無料。
```
- **🇺🇸 英語（168文字）:**
```text
Instantly merge multiple photos & scans into a single PDF in seconds! Reorder pages, set custom names, and pair with PachiSCA for fast AI document ingestion. 100% free.
```

### 3.2 キーワード（100バイト厳守）
- **🇯🇵 日本語（100バイト）:**
```text
画像,写真,変換,結合,まとめる,自炊,本,スキャン,書類,ノート,生成AI,電子化
```
- **🇺🇸 英語（96バイト）:**
```text
photo,image,convert,merge,combine,book,scan,scanner,document,notes,study,report,free,AI,OCR,file
```

---

## 4. HOUKOUKU CAM（`id6756608831`）ASOメタデータ（コピペ用）

### 4.1 プロモーションテキスト（最大170文字・審査不要で今すぐ変更可能！）
- **🇯🇵 日本語（158文字 / 170文字上限）:**
```text
方位・仰角・GPS住所・日時から、好きな画像やAI切り抜きスタンプ・自由な文字まで、写真1枚に必要な情報をすべて凝縮して合成！リアルタイム撮影はもちろん、撮影済み写真のあとから編集・比率トリミングにも完全対応。現場記録・不動産調査・業務報告から、グルメ記録やSNS投稿まで幅広く活躍します！
```
- **🇺🇸 英語（166文字 / 170文字上限）:**
```text
Condense everything you need into a single photo! Overlay compass azimuth, GPS address, date, custom images, AI cutout stamps, and text onto live or saved photos.
```

### 4.2 キーワード（100バイト厳守・100バイト超過で切れていた「現場写真・報告書」を救出済み）
- **🇯🇵 日本語（99バイト / 100バイト上限）:**
```text
方位,コンパス,不動産,工事,現場,報告書,スタンプ,日付,切り抜き,背景透過,合成,記録,住所
```
- **🇺🇸 英語（98バイト / 100バイト上限）:**
```text
camera,photo,overlay,azimuth,compass,report,stamp,AI,cutout,GPS,location,date,note,survey,work,map
```

---

## 5. App Store スクリーンショット改修指針（CVR 11.4% ➔ 30%+ への改善）

詳細ページを訪れたユーザーが最初の3秒で「自分に必要なアプリだ」と直感できるよう、スクリーンショット1〜4枚目の上部キャプションを以下の構成に統一します：

1. **1枚目（最大のベネフィット＆実演写真）**:
   - **背景画像**: 両手で本を開いて押さえ、スタンド上のiPhoneがページを映している実写（`pachisca_demo.jpg`）
   - **大見出し**: `両手で本を押さえたまま` / `まばたきで撮影！`
   - **小見出し**: `画面タップ一切不要のハンズフリー連続スキャン`
2. **2枚目（主用途：生成AIへの取り込み）**:
   - **大見出し**: `生成AIへの取り込みに！` / `本を傷つけずサクサク電子化`
   - **小見出し**: `Gemini Notebook・ChatGPT用の資料作成が爆速に`
3. **3枚目（誤作動防止＆感度調整UIの安心感）**:
   - **大見出し**: `0.4秒閉眼で誤爆ゼロ` / `感度調整＆テストモード搭載`
   - **小見出し**: `自然なまばたきでは切れず、狙った瞬間だけパシャッ`
4. **4枚目（SCAtoPDF連携でPDF化まで完結）**:
   - **大見出し**: `専用アルバムに自動整理` / `ワンタップで一括PDF化！`
   - **小見出し**: `姉妹アプリ「SCAtoPDF」連携で60ページも数秒でPDFへ`

---

---

## 5. 1mmHeadBall（`id6781898961`）ASOメタデータ（v1.4 更新版・コピペ用）

> **【APP_STORE_MARKETING_STRATEGY 準拠】**
> - タイトル・サブタイトルに含まれる単語（AI, 顔認識, ヘディング, 写真, 合成, 動画等）はキーワード欄から完全排除し、枠を100%有効活用。
> - 日本語キーワードはUTF-8で99バイト（上限100バイト厳守）。
> - 英語（US）キーワードも95バイトで配置し、日本ストアでのインデックス数を倍増。

### 5.1 タイトル & サブタイトル（各30文字以内厳守）
- **🇯🇵 日本語**
  - **名前 (Title):** `1mmHeadBall - AI顔認識ヘディング写真合成` （27文字）
  - **サブタイトル (Subtitle):** `写真を選ぶだけで頭にピタッ！9大球技の爆笑写真＆動画作成` （28文字）
- **🇺🇸 英語 (English)**
  - **Name (Title):** `1mmHeadBall: AI Face Header` （26 chars）
  - **Subtitle:** `9 Sports Balls & Animated Video` （30 chars）

---

### 5.2 プロモーションテキスト（最大170文字・審査不要で即時反映！）

#### 🇯🇵 日本語（148文字 / 170文字制限）
```text
【写真を選ぶだけで爆笑ヘディング写真が完成！】AIが顔を自動認識し、サッカー・野球・バスケなど人気9大球技のボールを頭頂部1mmにピタッと配置。さらに上空からボールが落ちてくるダイナミック動画も一瞬で生成！完全オンデバイス処理で写真が外部に送信されない安心設計。部活や友達の思い出を盛り上げよう！
```

#### 🇺🇸 英語（164文字 / 170文字制限）
```text
Instant AI face detection balances 9 sports balls 1mm above heads! Create custom balls, auto-unify group photos, and export dynamic sequential fly-in videos. 100% free!
```

---

### 5.3 キーワード（最大100バイト厳守・スペースなしカンマ区切り）

#### 🇯🇵 日本語キーワード（99バイト / 100バイト上限 ※タイトル・サブタイトルと完全非重複）
```text
サッカー,野球,バスケ,テニス,バレー,アメフト,部活,コラージュ,ネタ,加工
```

#### 🇺🇸 英語キーワード（95バイト / 100バイト上限 ※日本ストアでも合算インデックス）
```text
soccer,baseball,basketball,football,tennis,volleyball,rugby,sports,funny,photo,head,ball,camera
```

---

### 5.4 このバージョンの最新情報（What's New in This Version）

#### 🇯🇵 日本語
```text
1mmHeadBall v1.4 アップデート！

・【9大球技セレクション】サッカー、野球、バスケに加え、テニス、バレーボール、アメフト、ラグビー、アイスホッケー、クリケットの全9種に対応！
・【カスタムボール追加】アルバムから好きなボール画像を登録して頭に乗せられるようになりました！
・【スタジアム背景】選んだボールに合わせてホーム画面が各競技のコート・グラウンドにダイナミック変化！
・【動画生成の進化】頭上へ落ちてくる順番飛来アニメーションの画質とパフォーマンスを大幅に向上しました。
・その他、操作性および軽微なUIの改善を行いました。
```

#### 🇺🇸 英語 (English - U.S.)
```text
What's New in 1mmHeadBall v1.4:

- 9 Sports Available: In addition to Soccer, Baseball, and Basketball, enjoy Tennis, Volleyball, American Football, Rugby, Ice Hockey, and Cricket!
- Custom Ball Registration: Import any ball image from your photo library with automatic cutout!
- Dynamic Sports Courts: Stadium and court backgrounds automatically switch to match your selected sport.
- Video Creation Upgrade: Enhanced video encoding and smooth arrival animations.
- Minor UI improvements and performance optimizations.
```

---

### 5.5 概要・説明文 (Description)

#### 🇯🇵 日本語
```text
「1mmの精度が勝敗を分ける」

弾丸のようなシュートが飛んでくる。ほんの一瞬、ボールが頭にわずか「1ミリ」だけ触れ、絶妙にコースを変えてゴールネットを揺らす——。

「1mmHeadBall」は、スポーツの試合で最も劇的で、極限の集中力が生み出す「奇跡の1ミリの瞬間」を再現し、選手の張り詰めた熱狂と緊張感をファンとして体感・共有するためのアプリです。

サッカーの劇的ヘディング弾、野球、バスケ、テニス、バレー……写真の中のあなたの頭の上に、絶妙なバランスでボールを配置。
あの勝敗を分ける「ギリギリ」の瞬間の熱狂をあなた自身で体感し、仲間やスポーツファン同士でシェアして盛り上がりましょう！

【主な特徴】
1. 9大人気球技 ＆ 球種連動スタジアム背景:
   サッカー、野球、テニス、バレーボール、バスケットボール、アメリカンフットボール、ラグビー、アイスホッケー、クリケットの全9種に対応。選んだ球種に合わせて背景がリアルタイムに各競技のフィールドやコートにダイナミック変化します。
2. Vision AI による顔自動認識＆全体サイズ統一:
   複数人が並んだ集合写真でも、全員の顔を自動検出してボールの大きさを綺麗に統一配置。
3. カスタムボール作成（AI自動切り抜き）:
   写真ライブラリの画像から、愛用のマイボールやチームのボールをAIが自動で切り抜いてカスタム球として登録・名前変更可能！
4. 順番に降ってくる！ダイナミックショート動画生成:
   ボールが上空から回転しながら順番に落ちてくる躍動感あるMP4動画を自動生成。SNSで注目を集めること間違いなし！
5. 安心の100%完全オンデバイス処理:
   写真や顔データが外部サーバーに送信されることは一切ありません。オフラインでも安心してご利用いただけます。
```

#### 🇺🇸 英語 (English - U.S.)
```text
"1 millimeter determines victory or defeat."

A bullet-fast shot flies through the air. In a split second, the ball grazes the head by just 1mm, subtly changing trajectory to shake the net...

"1mmHeadBall" is created for sports fans to relive and share the dramatic, edge-of-your-seat intensity of that "miracle 1mm touch." 
Precisely balance soccer, baseball, basketball, and 9 sports balls atop your head in any photo. Feel the heart-pounding tension of decisive sports moments and share the passion with your teammates and fellow fans!

[Key Features]
1. 9 Popular Sports & Dynamic Stadium Courts:
   Supports Soccer, Baseball, Tennis, Volleyball, Basketball, Football, Rugby, Ice Hockey, and Cricket. The background dynamically changes into authentic sports courts matching your ball!
2. Vision AI Face Detection & Unified Scaling:
   Automatically detects faces in group photos and balances ball sizes cleanly for everyone.
3. Custom Ball Creation (AI Auto-Cutout):
   Import and automatically cut out your favorite ball from your photo library to register as a custom ball!
4. Dynamic Sequential Fly-In Video Generation:
   Generate dramatic MP4 videos with balls flying in sequentially with realistic contact AO shadowing.
5. 100% On-Device Privacy:
   All image processing is performed entirely on your device. No personal data or photos are ever sent to external servers.
```

---

### 5.6 SNS（X / Twitter）プロモーション用投稿文

#### 本ポスト（1投稿目：全角139文字 / 成果物画像1枚添付・URL厳禁）
```text
友達や部活の集合写真、普通に撮るだけだと盛り上がりに欠けることありませんか😭

自作アプリ「1mmHeadBall」なら
①写真を選ぶだけで全員の頭に球がピタッ
②9大球技＋愛用球を登録
③落ちてくる動画も一瞬

完全無料で写真も外に出ません！
#個人開発 #iPhoneアプリ
```

#### リプライ欄（ツリー1段目：導線用）
```text
▼ App Store（完全無料DL）
https://apps.apple.com/us/app/1mmheadball/id6781898961

▼ 図解マニュアル・Webサイト
https://masax66x-dev.github.io/headball.html

完全オンデバイスAIなので、写真や顔データが外部サーバーに送信されることは一切ありません🔒
```

---

## 6. AIアシスタント用 ASO継続アップデート・プロンプトテンプレート

今後、機能追加や季節トレンドに合わせてASOを更新する際は、以下のプロンプトをそのままAIに入力してください：

```markdown
あなたはiOSアプリのASO（App Store Optimization）およびコンバージョン最適化の専門家です。
以下の制約条件を厳守して、PachiSCA（およびSCAtoPDF）のApp Store Connect用メタデータを更新してください。

【厳守ルール】
1. 日本語キーワードはUTF-8エンコードで「100バイト以内」（全角約30文字＋カンマ）に収め、スペースを入れないこと。
2. アプリ名やサブタイトルに含まれる単語はキーワード枠で重複させないこと。
3. 英語（US）キーワード枠も日本のApp Storeで合算インデックスされるため、95〜100バイトで英語の関連検索語を網羅すること。
4. プロモーションテキストは170文字以内とし、審査なしで即時CVRを高める「ペイン解消＋生成AI取り込み＋完全無料」の訴求を入れること。
```
