# Dataviz.jp フォークの保存と公開シェア

このリポジトリは kepler.gl の dataviz.jp フォーク。上流ドキュメントの「client-side only / Dropbox のみ」は、このフォークの Dataviz Cloud 経路には当てはまらない。

公開 URL 形は **`/shares/:id`**。`share.html` に寄せない。

## Identity

| 項目 | 値 |
|---|---|
| `appName` | `kepler-gl` |
| 公開ホスト | https://kepler-gl.dataviz.jp |
| プロジェクト保存 | `dataviz-tool-header` + Dataviz Cloud provider |
| publish 関数 | `publish-kepler-gl-share` |
| 読取関数 | `get-kepler-gl-share` |
| テーブル | `kepler_gl_shares` |
| スナップショット | Storage バケット `kepler-gl-shares` |
| 公開 URL | `/shares/:id` |

## 流れ

1. マップを Dataviz Cloud に保存する（未保存では公開しない）。
2. 公開シェア時、クライアントは `POST functions/v1/publish-kepler-gl-share` を呼ぶ。
   - Header: `X-Dataviz-Authorization: Bearer <dataviz access token>`
   - Body: `{ projectId, fallbackTitle }`
3. Edge Function が `api.dataviz.jp` の保存プロジェクトを読み、`kepler_gl_shares` を `source_project_id` 単位で更新する。
4. 公開 URL は `https://kepler-gl.dataviz.jp/shares/<id>`。

実装: `examples/demo-app/src/cloud-providers/dataviz/dataviz-provider.js`

上流の画像 / CSV / HTML / JSON / Dropbox 書き出しは `docs/user-guides/k-save-and-export.md` のまま。
