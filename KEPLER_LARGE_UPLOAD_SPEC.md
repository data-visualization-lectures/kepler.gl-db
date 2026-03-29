# kepler.gl-db 大容量プロジェクト保存仕様

## 概要

kepler.gl-db で扱う GeoJSON 等のデータは容易に 4.5MB（Vercel Serverless Functions の上限）を超える。本仕様では、クライアント側からの大容量ファイル保存を、Supabase Storage への直接アップロード（署名付きURL方式）で実現する。

---

## 保存フロー

### 小容量（4.5MB 未満）

1. **「プロジェクトの保存」ボタン** → `header.showSaveModal()` を呼ぶ
2. **tool-header** が通常の POST/PUT で `api.dataviz.jp/api/projects` にリクエスト
3. ユーザーは tool-header が提供するモーダル UI で確認・保存

### 大容量（4.5MB 以上）

1. **「プロジェクトの保存」ボタン** → app.tsx 内で `uploadLargeProject()` を呼ぶ
2. **Step 1**: `POST /api/projects-upload-url` → 署名付きURL 取得
3. **Step 2**: `PUT <署名付きURL>` → Supabase Storage に直接アップロード
4. **Step 3**: `POST/PUT /api/projects` に `storage_uploaded: true` でメタデータのみ送信
5. トースト通知で進捗・結果を表示

---

## 判定ロジック

```javascript
const dataSize = new Blob([JSON.stringify(projectData)]).size;
const LARGE_THRESHOLD = 4.5 * 1024 * 1024; // 4.5MB

if (dataSize >= LARGE_THRESHOLD) {
  // 大容量フロー
  uploadLargeProject(...)
} else {
  // 小容量フロー
  header.showSaveModal(...)
}
```

---

## API エンドポイント仕様

### 1. 署名付きURL取得

```
POST /api/projects-upload-url
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": "data",
  "project_id": "uuid-string" (optional, 更新時のみ)
}

Response (200):
{
  "upload_url": "https://xxx.supabase.co/storage/v1/...",
  "storage_path": "user_id/project_id.json",
  "project_id": "uuid-string"
}
```

### 2. Storage へ直接アップロード

```
PUT <upload_url>
Content-Type: application/json

<JSONデータ本体>

Response (200): 空
```

### 3. メタデータ送信（新規作成）

```
POST /api/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "My Project",
  "app_name": "keplergl",
  "storage_path": "user_id/project_id.json",
  "project_id": "uuid-string",
  "storage_uploaded": true,
  "thumbnail": "data:image/png;base64,..." (optional)
}

Response (200):
{
  "project": {
    "id": "uuid-string",
    "name": "My Project",
    ...
  }
}
```

### 4. メタデータ送信（更新）

```
PUT /api/projects/<id>
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "storage_uploaded": true,
  "thumbnail": "data:image/png;base64,..." (optional)
}

Response (200):
{
  "project": {
    "id": "uuid-string",
    ...
  }
}
```

---

## UI/UX

### トースト通知

- **保存開始**: 「プロジェクトを保存しています...」（info）
- **成功**: 「プロジェクトを保存しました」（success）
- **エラー**: 「保存に失敗しました: <エラーメッセージ>」（error）

### モーダル

- **小容量**: tool-header の `showSaveModal` を使用（ユーザーが保存確定）
- **大容量**: モーダルなし。自動的にバックグラウンドで処理、トーストで通知

---

## エラーハンドリング

| 状況 | メッセージ | 対応 |
|---|---|---|
| 未ログイン | 「ログインが必要です」 | auth クライアントで再ログイン |
| 署名付きURL取得失敗 | 「署名付きURL取得失敗: <ステータスコード>」 | リトライ |
| Storage アップロード失敗 | 「Storageアップロード失敗: <ステータスコード>」 | リトライ |
| メタデータ保存失敗 | 「メタデータ保存失敗: <ステータスコード>」 | リトライ |

---

## 実装ファイル

- **`examples/demo-app/src/app.tsx`**: 大容量判定・アップロード実装
- **本ファイル**: 仕様書

---

## 参考資料

- [LARGE_UPLOAD_PLAN.md](./LARGE_UPLOAD_PLAN.md): バックエンド仕様
- [API_SPECIFICATION.md](./_temp/API_SPECIFICATION.md): API 仕様詳細
