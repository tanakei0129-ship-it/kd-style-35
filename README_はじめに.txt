KD STYLE 35 — iPhone PWA版

1. このフォルダ内のファイルを全て同じ構成でHTTPS対応のホスティング（例：GitHub Pages）へアップロードします。
2. iPhoneのSafariで公開URLを開きます。
3. 共有メニュー → ホーム画面に追加 →「Webアプリとして開く」をオン → 追加。

GitHub Pagesでの例：
- GitHubで新しいリポジトリを作る（公開設定が必要）。
- index.html / manifest.webmanifest / service-worker.js / icons フォルダをアップロードする。
- Settings → Pages → Deploy from a branch → main / (root) → Save。
- 表示された https://ユーザー名.github.io/リポジトリ名/ をSafariで開く。

注意：
- アプリのコードは公開されます。非公開の情報やAPIキーを埋め込まないでください。
- TODOなどの記録と写真は利用端末のブラウザ内に保存され、PCから自動移行・同期されません。
- ホーム画面のWebアプリとSafariで保存領域が異なる場合があります。最初にホーム画面アプリ側で記録し、そこで使い続けてください。
- ブラウザのデータ消去、アプリ削除、端末故障などでデータを失うことがあります。写真の元データは別途保管してください。
- オフライン対応は初回オンライン起動とキャッシュ成功後に限ります。
- ファイルをiPhoneに送って直接開くだけでは正式なPWAインストールにはなりません。
