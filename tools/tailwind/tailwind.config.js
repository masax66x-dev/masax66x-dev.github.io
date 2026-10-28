// LPページ用 Tailwind CSS（外部CDNを使わず assets/tailwind.css に静的ビルド）
// HTMLのクラスを追加・変更したら、リポジトリ直下で以下を実行して再ビルドする:
//   npx tailwindcss@3 -c tools/tailwind/tailwind.config.js -i tools/tailwind/input.css -o assets/tailwind.css --minify
module.exports = {
  content: ["./pachisca/index.html", "./xstock/index.html", "./scatopdf/index.html", "./clonzmaker/index.html"],
  theme: { extend: {} },
  plugins: [],
};
