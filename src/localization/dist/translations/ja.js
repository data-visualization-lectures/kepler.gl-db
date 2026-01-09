"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _locales = require("../locales");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project
var _default = exports["default"] = {
  property: {
    weight: '重み',
    label: 'ラベル',
    fillColor: '塗りつぶしの色',
    color: '色',
    coverage: 'カバー率',
    strokeColor: '輪郭線の色',
    radius: '半径',
    outline: '輪郭線',
    stroke: '線の太さ',
    density: '密度',
    height: '高さ',
    sum: '合計',
    pointCount: '点の数'
  },
  placeholder: {
    search: '検索',
    selectField: 'フィールドを選択',
    yAxis: 'Y軸',
    selectType: 'タイプを選択',
    selectValue: '値を選択',
    enterValue: '値を入力',
    empty: '未選択'
  },
  misc: {
    by: '',
    valuesIn: '値が以下に含まれる',
    valueEquals: '値が以下に等しい',
    dataSource: 'データソース',
    brushRadius: 'ブラシ半径 (km)',
    empty: ' '
  },
  mapLayers: {
    title: '地図レイヤ',
    label: 'ラベル',
    road: '道路',
    border: '境界線',
    building: '建物',
    water: '水',
    land: '地面',
    '3dBuilding': '3D建物',
    background: '背景'
  },
  panel: {
    text: {
      label: 'ラベル',
      labelWithId: 'ラベル {labelId}',
      fontSize: '文字サイズ',
      fontColor: '文字色',
      textAnchor: '文字左右',
      alignment: '文字上下',
      addMoreLabel: 'ラベルを追加'
    }
  },
  sidebar: {
    panels: {
      layer: 'レイヤー',
      filter: 'フィルター',
      interaction: 'インタラクション',
      basemap: 'ベースマップ'
    }
  },
  layer: {
    required: '必須*',
    radius: '半径',
    color: '色',
    fillColor: '塗りつぶし色（fill）',
    outline: '輪郭線の色（stroke）',
    weight: '重み',
    propertyBasedOn: '{property}の基準',
    coverage: 'カバー率',
    stroke: '線',
    strokeWidth: '輪郭線の太さ',
    strokeColor: '輪郭線の色',
    basic: '基本設定',
    trailLength: '痕跡の長さ',
    trailLengthDescription: '痕跡が完全に消えるまでの秒数',
    newLayer: '新しいレイヤ',
    elevationByDescription: 'オフの場合、高さは点の数に応じて決まります',
    colorByDescription: 'オフの場合、色は点の数に応じて決まります',
    aggregateBy: '{field}を以下で集計: ',
    '3DModel': '3Dモデル',
    '3DModelOptions': '3Dモデルのオプション',
    type: {
      point: 'point',
      arc: 'arc',
      line: 'line',
      grid: 'grid',
      hexbin: 'hexbin',
      polygon: 'polygon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icon',
      heatmap: 'heatmap',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: '角度',
    strokeWidth: '線の太さ (ピクセル)',
    strokeWidthRange: '線の太さの範囲',
    radius: '半径',
    fixedRadius: '半径をメートルで固定',
    fixedRadiusDescription: '半径をメートル単位の絶対半径に変換します（例: 5 → 5メートル）',
    radiusRange: '半径の範囲',
    clusterRadius: 'クラスターの範囲[ピクセル]',
    radiusRangePixels: '半径の範囲[ピクセル]',
    billboard: 'ビルボードモード',
    billboardDescription: 'ジオメトリをカメラに向けます',
    fadeTrail: 'フェージングパス',
    opacity: '不透明度',
    coverage: 'カバー率',
    outline: '輪郭線',
    colorRange: '色の範囲',
    stroke: '線',
    strokeColor: '輪郭線の色',
    strokeColorRange: '輪郭線の色の範囲',
    targetColor: 'Targetの色',
    colorAggregation: '色の集計',
    heightAggregation: '高さの集計',
    resolutionRange: '解像度の範囲',
    sizeScale: 'サイズのスケール',
    worldUnitSize: 'World Unit Size',
    elevationScale: '標高のスケール',
    enableElevationZoomFactor: '標高ズーム係数を使用する',
    enableElevationZoomFactorDescription: '現在のズーム率に基づいて高さ/標高を調整します',
    enableHeightZoomFactor: '高さズーム係数を使用する',
    heightScale: '高さのスケール',
    coverageRange: 'カバー率の範囲',
    highPrecisionRendering: '高精度レンダリング',
    highPrecisionRenderingDescription: '高精度にすると速度は低下します',
    height: '高さ',
    heightDescription: '3Dビューに切り替えるには画面右上のボタンをクリックします',
    fill: '塗りつぶし',
    enablePolygonHeight: 'ポリゴンの高さを有効にする',
    showWireframe: 'ワイヤーフレームを表示',
    weightIntensity: '重みづけの強さ',
    zoomScale: 'ズームのスケール',
    heightRange: '高さの範囲',
    heightMultiplier: '高さ乗数',
    fixedHeight: '固定高さ',
    fixedHeightDescription: '高さを変更せずに使用する'
  },
  layerManager: {
    addData: 'データ追加',
    addLayer: 'レイヤ追加',
    layerBlending: 'レイヤのブレンド'
  },
  mapManager: {
    mapStyle: 'マップスタイル',
    addMapStyle: 'マップスタイル追加',
    '3dBuildingColor': '3D建物の色',
    backgroundColor: '背景色'
  },
  layerConfiguration: {
    defaultDescription: '選択されたフィールドに基づいて{property}を計算します',
    howTo: '使い方'
  },
  filterManager: {
    addFilter: 'フィルター追加'
  },
  datasetTitle: {
    showDataTable: 'データ表を表示',
    removeDataset: 'データセットを削除'
  },
  datasetInfo: {
    rowCount: '{rowCount}行'
  },
  tooltip: {
    hideLayer: 'レイヤを非表示',
    showLayer: 'レイヤを表示',
    hideFeature: 'フィーチャーを非表示',
    showFeature: 'フィーチャーを表示',
    hide: '非表示にする',
    show: '表示する',
    removeLayer: 'レイヤを削除',
    duplicateLayer: 'レイヤを複製',
    layerSettings: 'レイヤ設定',
    closePanel: 'このパネルを閉じる',
    switchToDualView: 'デュアルビューに切り替え',
    showLegend: '凡例を表示',
    disable3DMap: '3D地図を無効化',
    DrawOnMap: '地図上に図形を描画',
    selectLocale: '言語設定',
    showAiAssistantPanel: 'AI 助手パネルを表示',
    hideAiAssistantPanel: 'AI 助手パネルを非表示',
    hideLayerPanel: 'レイヤパネルを非表示',
    showLayerPanel: 'レイヤパネルを表示',
    moveToTop: 'データレイヤの手前に移動',
    selectBaseMapStyle: 'ベースマップのスタイルを選択',
    "delete": '削除',
    timePlayback: '時系列で再生',
    cloudStorage: 'クラウドストレージ',
    '3DMap': '3D地図',
    animationByWindow: '時間枠を移動',
    animationByIncremental: '時間枠を増加',
    speed: '速度',
    play: '再生',
    pause: '一時停止',
    reset: 'リセット',
    zoomToLayer: 'レイヤ全体を表示'
  },
  toolbar: _objectSpread({
    exportImage: '画像を出力',
    exportData: 'データを出力',
    exportMap: '地図を出力',
    shareMapURL: '地図のURLを共有',
    saveMap: '地図を保存',
    select: '選択',
    polygon: 'ポリゴン',
    rectangle: '長方形',
    hide: '非表示',
    show: '表示'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'データセットを削除',
      addDataToMap: '地図にデータを追加',
      exportImage: '画像を出力',
      exportData: 'データを出力',
      exportMap: '地図を出力',
      addCustomMapboxStyle: 'カスタムマップスタイルを追加',
      saveMap: '地図を保存',
      shareURL: 'URLを共有'
    },
    button: {
      "delete": '削除',
      download: 'ダウンロード',
      "export": '出力',
      addStyle: 'スタイル追加',
      save: '保存',
      defaultCancel: 'キャンセル',
      defaultConfirm: '確認'
    },
    exportImage: {
      ratioTitle: '縦横比',
      ratioDescription: '用途に適した縦横比を選択します。',
      ratioOriginalScreen: '元のスクリーンサイズ',
      ratioCustom: 'カスタム',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: '解像度',
      resolutionDescription: '印刷には高解像度が適しています。',
      mapLegendTitle: '地図の凡例',
      mapLegendAdd: '地図に判例を追加'
    },
    exportData: {
      datasetTitle: 'データセット',
      datasetSubtitle: 'エクスポートしたいデータセットを選択します',
      allDatasets: '全て',
      dataTypeTitle: 'データ形式',
      dataTypeSubtitle: 'エクスポートしたいデータ形式を選択します',
      filterDataTitle: 'データのフィルタ',
      filterDataSubtitle: '元データ（フィルタなし）とフィルタ済データのどちらをエクスポートするか選択します',
      filteredData: 'フィルタ済データ',
      unfilteredData: '元データ',
      fileCount: '{fileCount}個のファイル',
      rowCount: '{rowCount}行'
    },
    deleteData: {
      warning: 'このデータセットを削除します。{length}個のレイヤに影響します。'
    },
    addStyle: {
      publishTitle: '2. ステップ1でMapboxのスタイルURLを指定した場合、Mapboxでスタイルを公開するか、アクセストークンを以下に入力します（オプション）',
      publishSubtitle1: '独自のスタイルを',
      publishSubtitle2: 'で作成し、',
      publishSubtitle3: '公開',
      publishSubtitle4: 'することができます',
      publishSubtitle5: '非公開のスタイルを使用するには、自身の',
      publishSubtitle6: 'アクセストークン',
      publishSubtitle7: 'をここに入力します。*kepler.glはクライアント上で動作するため、データは自身のブラウザに保持されます。',
      exampleToken: '例) pk.abcdefg.xxxxxx',
      pasteTitle: '1. スタイルのURLをペースト',
      pasteSubtitle0: 'スタイルのURLはMapboxの',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'スタイルURL',
      pasteSubtitle3: 'を指定するか、Mapbox GLの仕様に沿ったstyle.jsonのURLを指定します：',
      pasteSubtitle4: 'Mapbox GL スタイル仕様',
      namingTitle: '3. スタイルの名称を設定'
    },
    shareMap: {
      shareUriTitle: '地図のURLを共有',
      shareUriSubtitle: '共有用に地図のURLを生成',
      cloudTitle: 'クラウドストレージ',
      cloudSubtitle: 'ログインして地図データを個人用クラウドストレージにアップロード',
      shareDisclaimer: 'kepler.glは作成した地図をあなたのクラウドストレージに保存するため、そのURLを知っている人のみが地図やそのデータにアクセス可能です。' + 'クラウドストレージのアカウントでいつでもデータファイルを編集/削除することができます。',
      gotoPage: 'Kepler.glの{currentProvider}ページに移動'
    },
    statusPanel: {
      mapUploading: '地図をアップロード中',
      error: 'エラー'
    },
    saveMap: {
      title: 'クラウドストレージ',
      subtitle: ' '
    },
    exportMap: {
      formatTitle: '地図の形式',
      formatSubtitle: '地図の出力形式を選択します',
      html: {
        selection: '地図をインタラクティブなHTMLファイルとして出力します。',
        tokenTitle: 'Mapboxアクセストークン',
        tokenSubtitle: 'HTMLファイルで自分のMapboxアクセストークンを使用します (オプション)',
        tokenPlaceholder: '自分のMapboxアクセストークンをここに貼り付け',
        tokenMisuseWarning: '* 自分のトークンを使用しない場合は、デフォルトのトークンが悪用防止のために更新され、地図が表示されなくなる可能性があります。  ',
        tokenDisclaimer: 'Mapboxのトークンは下記の方法に従って後から変更することも可能です：',
        tokenUpdate: '既存の地図のトークンを更新する方法',
        modeTitle: '地図のモード',
        modeSubtitle1: '地図のモードを選択します。詳細は',
        modeSubtitle2: 'こちら',
        modeDescription: 'ユーザーに地図の{mode}を許可',
        read: '閲覧',
        edit: '編集'
      },
      json: {
        configTitle: '地図の設定',
        configDisclaimer: '地図の設定はjsonファイルに収められます。他のアプリケーションでkepler.glを使用する場合、この設定をコピーペーストすることが可能です：',
        selection: '現在の地図データと設定を単一のjsonファイルに出力します。このファイルをkepler.glにアップロードすることで、同じ地図を後から開くことが可能になります。',
        disclaimer: '* 地図の設定は読み込まれたデータセットとセットになっています。‘dataId’によってレイヤ、フィルター、ツールチップは特定のデータセットに紐づけられます。 ' + 'この設定をaddDataToMapに渡す際は、データセットIDがこの設定内のdataIdと一致するようにしてください。'
      }
    },
    loadingDialog: {
      loading: 'ロード中...'
    },
    loadData: {
      upload: 'ファイルをロード',
      tileset: 'タイルセット',
      storage: 'ストレージからロード',
      sample: 'サンプルデータを試す',
      remote: 'URL で地図を読み込む'
    },
    tripInfo: {
      title: '移動アニメーションを有効にする方法',
      titleTable: 'ポイントのリストから移動アニメーション',
      description1: "\u7D4C\u8DEF\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5316\u3059\u308B\u306B\u306F\u3001geoJSON\u30C7\u30FC\u30BF\u306Ffeature\u306Egeometry\u3068\u3057\u3066 `LineString` \u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u307E\u305F\u3001LineString\u306E\u5EA7\u6A19\u306F4\u3064\u306E\u8981\u7D20\u3092\n".concat('```json', "\n[\u7D4C\u5EA6, \u7DEF\u5EA6, \u6A19\u9AD8, timestamp]\n", '```', "\n\u3068\u3044\u3046\u5F62\u5F0F\uFF083\u3064\u76EE\u304C\u6A19\u9AD8\u30014\u3064\u76EE\u304C\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF09\u3067\u4FDD\u6301\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u306F\u3001 UNIX\u6642\u9593\u306E\u79D2\u5358\u4F4D\uFF08\u4F8B: `1564184363`\uFF09\u307E\u305F\u306F\u30DF\u30EA\u79D2\u5358\u4F4D\uFF08\u4F8B: `1564184363000`\uFF09\u304C\u6709\u52B9\u3067\u3059\u3002"),
      descriptionTable1: '移動アニメーション（Trips）は、緯度、経度、タイムスタンプ（ソート用）、ID（グループ化用）を含むポイントリストから作成できます。',
      example: 'GeoJSONの例',
      exampleTable: 'CSVの例'
    },
    polygonInfo: {
      title: 'GeoJSONからポリゴンレイヤを作成',
      titleTable: 'ポイントからパス（線）を作成',
      description: "\u30DD\u30EA\u30B4\u30F3\u306F\u4EE5\u4E0B\u306E\u65B9\u6CD5\u3067\u4F5C\u6210\u3067\u304D\u307E\u3059\uFF1A\n__1. GeoJSON__\n__2. \u30B8\u30AA\u30E1\u30C8\u30EA\u5217\u3092\u542B\u3080CSV__\n\n### 1. GeoJSON\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u30DD\u30EA\u30B4\u30F3\u3092\u4F5C\u6210\n\nFeatureCollection\u3092\u542B\u3080GeoJSON\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u3068\u3001\u30DD\u30EA\u30B4\u30F3\u30EC\u30A4\u30E4\u304C\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\n\nGeoJSON\u306E\u4F8B\n".concat('```json', "\n{\n  \"type\": \"FeatureCollection\",\n  \"features\": [{\n      \"type\": \"Feature\",\n      \"geometry\": {\n          \"type\": \"Point\",\n          \"coordinates\": [102.0, 0.5]\n      },\n      \"properties\": {\n          \"prop0\": \"value0\"\n      }\n  }, {\n      \"type\": \"Feature\",\n      \"geometry\": {\n          \"type\": \"LineString\",\n          \"coordinates\": [\n              [102.0, 0.0],\n              [103.0, 1.0],\n              [104.0, 0.0],\n              [105.0, 1.0]\n          ]\n      },\n      \"properties\": {\n        \"prop0\": \"value0\"\n      }\n  }]\n}\n", '```', "\n\n### 2. CSV\u30C6\u30FC\u30D6\u30EB\u5185\u306E\u30B8\u30AA\u30E1\u30C8\u30EA\u5217\u304B\u3089\u30DD\u30EA\u30B4\u30F3\u3092\u4F5C\u6210\n\u30B8\u30AA\u30E1\u30C8\u30EA\uFF08\u30DD\u30EA\u30B4\u30F3\u3001\u30DD\u30A4\u30F3\u30C8\u3001LineString\u306A\u3069\uFF09\u306F\u3001`GeoJSON` \u307E\u305F\u306F `WKT` \u5F62\u5F0F\u306E\u6587\u5B57\u5217\u3068\u3057\u3066CSV\u306B\u57CB\u3081\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\n#### 2.1 `GeoJSON` \u6587\u5B57\u5217\n`GeoJSON` \u6587\u5B57\u5217\u3092\u542B\u3080 data.csv \u306E\u4F8B\n", '```txt', "\nid,_geojson\n1,\"{\"\"type\"\":\"\"Polygon\"\",\"\"coordinates\"\":[[[-74.158491,40.835947],[-74.157914,40.83902]]]}\"\n", '```', "\n\n#### 2.2 `WKT` \u6587\u5B57\u5217\n`WKT` \u6587\u5B57\u5217\u3092\u542B\u3080 data.csv \u306E\u4F8B\n[Well-Known Text (WKT)](https://dev.mysql.com/doc/refman/5.7/en/gis-data-formats.html#gis-wkt-format) \u306F\u3001\u30B8\u30AA\u30E1\u30C8\u30EA\u30C7\u30FC\u30BF\u3092ASCII\u5F62\u5F0F\u3067\u4EA4\u63DB\u3059\u308B\u305F\u3081\u306B\u8A2D\u8A08\u3055\u308C\u305F\u8868\u73FE\u5F62\u5F0F\u3067\u3059\u3002\n\nWKT\u3092\u542B\u3080 data.csv \u306E\u4F8B\n", '```txt', "\nid,_geojson\n1,\"POLYGON((0 0,10 0,10 10,0 10,0 0),(5 5,7 5,7 7,5 7, 5 5))\"\n", '```', "\n"),
      descriptionTable: "\u30D1\u30B9\uFF08\u7DDA\uFF09\u306F\u3001\u7DEF\u5EA6\u7D4C\u5EA6\u306E\u30DD\u30A4\u30F3\u30C8\u30EA\u30B9\u30C8\u3092\u7D50\u5408\u3059\u308B\u3053\u3068\u3067\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9\uFF08\u4F8B\uFF1A\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF09\u3067\u30BD\u30FC\u30C8\u3057\u3001\u30E6\u30CB\u30FC\u30AFID\u3067\u30B0\u30EB\u30FC\u30D7\u5316\u3057\u307E\u3059\u3002\n\n  ### \u30EC\u30A4\u30E4\u306E\u5217\u8A2D\u5B9A:\n  - **id**: - *\u5FC5\u9808*&nbsp;- \u30DD\u30A4\u30F3\u30C8\u3092\u30B0\u30EB\u30FC\u30D7\u5316\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B `id` \u5217\u3002\u540C\u3058ID\u3092\u6301\u3064\u30DD\u30A4\u30F3\u30C8\u304C\u7D50\u5408\u3055\u308C\u30661\u3064\u306E\u30D1\u30B9\u306B\u306A\u308A\u307E\u3059\u3002\n  - **lat**: - *\u5FC5\u9808*&nbsp;- \u30DD\u30A4\u30F3\u30C8\u306E\u7DEF\u5EA6\n  - **lon**: - *\u5FC5\u9808*&nbsp;- \u30DD\u30A4\u30F3\u30C8\u306E\u7D4C\u5EA6\n  - **alt**: - *\u4EFB\u610F*&nbsp;- \u30DD\u30A4\u30F3\u30C8\u306E\u6A19\u9AD8\n  - **sort by**: - *\u4EFB\u610F*&nbsp;- \u30DD\u30A4\u30F3\u30C8\u3092\u30BD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B `sort by` \u5217\u3002\u6307\u5B9A\u304C\u306A\u3044\u5834\u5408\u3001\u30DD\u30A4\u30F3\u30C8\u306F\u884C\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u9806\u306B\u30BD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002\n",
      exampleTable: 'Example CSV'
    },
    iconInfo: {
      title: 'アイコンの描画方法',
      description1: 'CSVファイルに列を作成し、描画したいアイコンの名称を記載します。アイコンの描画が不要な点があれば、セルを空白にすることも可能です。列名が',
      code: 'icon',
      description2: 'の場合、kepler.glは自動的にアイコンレイヤを作成します。',
      example: '例:',
      icons: 'アイコン一覧'
    },
    storageMapViewer: {
      lastModified: '最終編集：{lastUpdated} 前',
      back: '戻る'
    },
    overwriteMap: {
      title: '地図を保存中...',
      alreadyExists: '既に{mapSaved}に存在します。上書きしますか？'
    },
    loadStorageMap: {
      back: '戻る',
      goToPage: 'Kepler.glの{displayName}ページに移動',
      storageMaps: 'ストレージ / 地図',
      noSavedMaps: '保存済の地図はまだありません'
    }
  },
  header: {
    visibleLayers: '表示中のレイヤ',
    layerLegend: 'レイヤ判例'
  },
  interactions: {
    tooltip: 'ツールチップ',
    brush: 'ブラシ',
    coordinate: '座標',
    geocoder: 'ジオコーダー'
  },
  layerBlending: {
    title: 'レイヤのブレンド',
    additive: '加算（Additive）',
    normal: '通常（Normal）',
    subtractive: '減算（Subtractive）'
  },
  overlayBlending: {
    title: '地図オーバーレイのブレンド',
    description: 'ベースマップとレイヤをブレンドして、両方が見えるようにします。',
    screen: '暗い背景用（Screen）',
    normal: '通常（Normal）',
    darken: '明るい背景用 （Darken）'
  },
  columns: {
    title: '列',
    lat: '緯度',
    lng: '経度',
    altitude: '標高',
    icon: 'アイコン',
    geojson: 'geojson',
    token: 'トークン',
    sortBy: '並べ替え順',
    arc: {
      lat0: '出発 緯度',
      lng0: '出発 経度',
      lat1: '到着 緯度',
      lng1: '到着 経度'
    },
    grid: {
      worldUnitSize: 'グリッドサイズ（km）'
    },
    hexagon: {
      worldUnitSize: '六角形の半径（km）'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: 'カスタムパレット',
    'Update color': '色を変更',
    steps: '階級分類数',
    type: '階級分類法',
    sequential: '順序的',
    qualitative: '定性的',
    diverging: '分岐的',
    cyclical: '循環的',
    all: '全て',
    colorBlindSafe: '色覚バリアフリー',
    reversed: '反転'
  },
  columnStats: {
    min: '最小値',
    mean: '平均値',
    max: '最大値'
  },
  scale: {
    colorScale: 'カラースケール',
    sizeScale: 'サイズのスケール',
    strokeScale: '線のスケール',
    strokeColorScale: '輪郭線のカラースケール',
    scale: 'スケール',
    ordinal: '順序',
    quantile: '等量（Quantile）',
    quantize: '等間隔（Quantize）',
    linear: '線形',
    sqrt: '平方根',
    log: '対数',
    point: '点',
    threshold: 'しきい値',
    custom: 'カスタム区分',
    customOrdinal: 'カスタム順序'
  },
  fileUploader: {
    message: 'ここにファイルをドロップ（複数可）',
    chromeMessage: '*Chromeユーザーの場合: ファイルサイズは250mbまでにしてください。それ以上のファイルをアップロードする必要がある場合、Safariを試してください。',
    disclaimer: '*kepler.glはクライアント上で動作します。データは自身の機器・ブラウザにのみ保持されます。' + '情報や地図データは、いかなるサーバーにも送信されません。',
    configUploadMessage: '{fileFormatNames} または保存済地図の**Json**をアップロードします。詳細は以下を参照してください：[**対応ファイル形式**]',
    browseFiles: 'デバイスのファイルを選択',
    uploading: 'アップロード中',
    fileNotSupported: '{errorFiles} はサポートされていないファイルです。',
    or: 'or'
  },
  geocoder: {
    title: '住所または座標を入力（例： 37.79,-122.40）'
  },
  fieldSelector: {
    clearAll: '全て解除',
    formatting: '値の形式'
  },
  compare: {
    modeLabel: '比較モード',
    typeLabel: '比較方式',
    types: {
      absolute: '絶対',
      relative: '相対'
    }
  },
  mapPopover: {
    primary: 'プライマリ'
  },
  density: 'density',
  'Bug Report': 'バグを報告',
  'User Guide': 'ユーザーガイド',
  Save: '保存',
  Share: '共有'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbG9jYWxlcyIsInJlcXVpcmUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3BlcnR5Iiwid2VpZ2h0IiwibGFiZWwiLCJmaWxsQ29sb3IiLCJjb2xvciIsImNvdmVyYWdlIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJtaXNjIiwiYnkiLCJ2YWx1ZXNJbiIsInZhbHVlRXF1YWxzIiwiZGF0YVNvdXJjZSIsImJydXNoUmFkaXVzIiwibWFwTGF5ZXJzIiwidGl0bGUiLCJyb2FkIiwiYm9yZGVyIiwiYnVpbGRpbmciLCJ3YXRlciIsImxhbmQiLCJiYWNrZ3JvdW5kIiwicGFuZWwiLCJ0ZXh0IiwibGFiZWxXaXRoSWQiLCJmb250U2l6ZSIsImZvbnRDb2xvciIsInRleHRBbmNob3IiLCJhbGlnbm1lbnQiLCJhZGRNb3JlTGFiZWwiLCJzaWRlYmFyIiwicGFuZWxzIiwibGF5ZXIiLCJpbnRlcmFjdGlvbiIsImJhc2VtYXAiLCJyZXF1aXJlZCIsInByb3BlcnR5QmFzZWRPbiIsInN0cm9rZVdpZHRoIiwiYmFzaWMiLCJ0cmFpbExlbmd0aCIsInRyYWlsTGVuZ3RoRGVzY3JpcHRpb24iLCJuZXdMYXllciIsImVsZXZhdGlvbkJ5RGVzY3JpcHRpb24iLCJjb2xvckJ5RGVzY3JpcHRpb24iLCJhZ2dyZWdhdGVCeSIsInR5cGUiLCJwb2ludCIsImFyYyIsImxpbmUiLCJncmlkIiwiaGV4YmluIiwicG9seWdvbiIsImdlb2pzb24iLCJjbHVzdGVyIiwiaWNvbiIsImhlYXRtYXAiLCJoZXhhZ29uIiwiaGV4YWdvbmlkIiwidHJpcCIsInMyIiwibGF5ZXJWaXNDb25maWdzIiwiYW5nbGUiLCJzdHJva2VXaWR0aFJhbmdlIiwiZml4ZWRSYWRpdXMiLCJmaXhlZFJhZGl1c0Rlc2NyaXB0aW9uIiwicmFkaXVzUmFuZ2UiLCJjbHVzdGVyUmFkaXVzIiwicmFkaXVzUmFuZ2VQaXhlbHMiLCJiaWxsYm9hcmQiLCJiaWxsYm9hcmREZXNjcmlwdGlvbiIsImZhZGVUcmFpbCIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbiIsImVuYWJsZUhlaWdodFpvb21GYWN0b3IiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImhlaWdodE11bHRpcGxpZXIiLCJmaXhlZEhlaWdodCIsImZpeGVkSGVpZ2h0RGVzY3JpcHRpb24iLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJkdXBsaWNhdGVMYXllciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJzaG93QWlBc3Npc3RhbnRQYW5lbCIsImhpZGVBaUFzc2lzdGFudFBhbmVsIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsImFuaW1hdGlvbkJ5V2luZG93IiwiYW5pbWF0aW9uQnlJbmNyZW1lbnRhbCIsInNwZWVkIiwicGxheSIsInBhdXNlIiwicmVzZXQiLCJ6b29tVG9MYXllciIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUwIiwicGFzdGVTdWJ0aXRsZTEiLCJwYXN0ZVN1YnRpdGxlMiIsInBhc3RlU3VidGl0bGUzIiwicGFzdGVTdWJ0aXRsZTQiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJ0aWxlc2V0Iiwic3RvcmFnZSIsInNhbXBsZSIsInJlbW90ZSIsInRyaXBJbmZvIiwidGl0bGVUYWJsZSIsImRlc2NyaXB0aW9uMSIsImNvbmNhdCIsImRlc2NyaXB0aW9uVGFibGUxIiwiZXhhbXBsZSIsImV4YW1wbGVUYWJsZSIsInBvbHlnb25JbmZvIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblRhYmxlIiwiaWNvbkluZm8iLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImdlb2NvZGVyIiwiYWRkaXRpdmUiLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsIm92ZXJsYXlCbGVuZGluZyIsInNjcmVlbiIsImRhcmtlbiIsImNvbHVtbnMiLCJsYXQiLCJsbmciLCJhbHRpdHVkZSIsInRva2VuIiwic29ydEJ5IiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImhleF9pZCIsImN1c3RvbVBhbGV0dGUiLCJzdGVwcyIsInNlcXVlbnRpYWwiLCJxdWFsaXRhdGl2ZSIsImRpdmVyZ2luZyIsImN5Y2xpY2FsIiwiYWxsIiwiY29sb3JCbGluZFNhZmUiLCJyZXZlcnNlZCIsImNvbHVtblN0YXRzIiwibWluIiwibWVhbiIsIm1heCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwic3Ryb2tlQ29sb3JTY2FsZSIsIm9yZGluYWwiLCJxdWFudGlsZSIsInF1YW50aXplIiwibGluZWFyIiwic3FydCIsImxvZyIsInRocmVzaG9sZCIsImN1c3RvbSIsImN1c3RvbU9yZGluYWwiLCJmaWxlVXBsb2FkZXIiLCJtZXNzYWdlIiwiY2hyb21lTWVzc2FnZSIsImNvbmZpZ1VwbG9hZE1lc3NhZ2UiLCJicm93c2VGaWxlcyIsInVwbG9hZGluZyIsImZpbGVOb3RTdXBwb3J0ZWQiLCJvciIsImZpZWxkU2VsZWN0b3IiLCJjbGVhckFsbCIsImZvcm1hdHRpbmciLCJjb21wYXJlIiwibW9kZUxhYmVsIiwidHlwZUxhYmVsIiwidHlwZXMiLCJhYnNvbHV0ZSIsInJlbGF0aXZlIiwibWFwUG9wb3ZlciIsInByaW1hcnkiLCJTYXZlIiwiU2hhcmUiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNsYXRpb25zL2phLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbi8vIENvcHlyaWdodCBjb250cmlidXRvcnMgdG8gdGhlIGtlcGxlci5nbCBwcm9qZWN0XG5cbmltcG9ydCB7IExPQ0FMRVMgfSBmcm9tICcuLi9sb2NhbGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wZXJ0eToge1xuICAgIHdlaWdodDogJ+mHjeOBvycsXG4gICAgbGFiZWw6ICfjg6njg5njg6snLFxuICAgIGZpbGxDb2xvcjogJ+Whl+OCiuOBpOOBtuOBl+OBruiJsicsXG4gICAgY29sb3I6ICfoibInLFxuICAgIGNvdmVyYWdlOiAn44Kr44OQ44O8546HJyxcbiAgICBzdHJva2VDb2xvcjogJ+i8qumDree3muOBruiJsicsXG4gICAgcmFkaXVzOiAn5Y2K5b6EJyxcbiAgICBvdXRsaW5lOiAn6Lyq6YOt57eaJyxcbiAgICBzdHJva2U6ICfnt5rjga7lpKrjgZUnLFxuICAgIGRlbnNpdHk6ICflr4bluqYnLFxuICAgIGhlaWdodDogJ+mrmOOBlScsXG4gICAgc3VtOiAn5ZCI6KiIJyxcbiAgICBwb2ludENvdW50OiAn54K544Gu5pWwJ1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ+aknOe0oicsXG4gICAgc2VsZWN0RmllbGQ6ICfjg5XjgqPjg7zjg6vjg4njgpLpgbjmip4nLFxuICAgIHlBeGlzOiAnWei7uCcsXG4gICAgc2VsZWN0VHlwZTogJ+OCv+OCpOODl+OCkumBuOaKnicsXG4gICAgc2VsZWN0VmFsdWU6ICflgKTjgpLpgbjmip4nLFxuICAgIGVudGVyVmFsdWU6ICflgKTjgpLlhaXlipsnLFxuICAgIGVtcHR5OiAn5pyq6YG45oqeJ1xuICB9LFxuICBtaXNjOiB7XG4gICAgYnk6ICcnLFxuICAgIHZhbHVlc0luOiAn5YCk44GM5Lul5LiL44Gr5ZCr44G+44KM44KLJyxcbiAgICB2YWx1ZUVxdWFsczogJ+WApOOBjOS7peS4i+OBq+etieOBl+OBhCcsXG4gICAgZGF0YVNvdXJjZTogJ+ODh+ODvOOCv+OCveODvOOCuScsXG4gICAgYnJ1c2hSYWRpdXM6ICfjg5bjg6njgrfljYrlvoQgKGttKScsXG4gICAgZW1wdHk6ICcgJ1xuICB9LFxuICBtYXBMYXllcnM6IHtcbiAgICB0aXRsZTogJ+WcsOWbs+ODrOOCpOODpCcsXG4gICAgbGFiZWw6ICfjg6njg5njg6snLFxuICAgIHJvYWQ6ICfpgZPot68nLFxuICAgIGJvcmRlcjogJ+Wig+eVjOe3micsXG4gICAgYnVpbGRpbmc6ICflu7rniaknLFxuICAgIHdhdGVyOiAn5rC0JyxcbiAgICBsYW5kOiAn5Zyw6Z2iJyxcbiAgICAnM2RCdWlsZGluZyc6ICczROW7uueJqScsXG4gICAgYmFja2dyb3VuZDogJ+iDjOaZrydcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBsYWJlbDogJ+ODqeODmeODqycsXG4gICAgICBsYWJlbFdpdGhJZDogJ+ODqeODmeODqyB7bGFiZWxJZH0nLFxuICAgICAgZm9udFNpemU6ICfmloflrZfjgrXjgqTjgronLFxuICAgICAgZm9udENvbG9yOiAn5paH5a2X6ImyJyxcbiAgICAgIHRleHRBbmNob3I6ICfmloflrZflt6blj7MnLFxuICAgICAgYWxpZ25tZW50OiAn5paH5a2X5LiK5LiLJyxcbiAgICAgIGFkZE1vcmVMYWJlbDogJ+ODqeODmeODq+OCkui/veWKoCdcbiAgICB9XG4gIH0sXG4gIHNpZGViYXI6IHtcbiAgICBwYW5lbHM6IHtcbiAgICAgIGxheWVyOiAn44Os44Kk44Ok44O8JyxcbiAgICAgIGZpbHRlcjogJ+ODleOCo+ODq+OCv+ODvCcsXG4gICAgICBpbnRlcmFjdGlvbjogJ+OCpOODs+OCv+ODqeOCr+OCt+ODp+ODsycsXG4gICAgICBiYXNlbWFwOiAn44OZ44O844K544Oe44OD44OXJ1xuICAgIH1cbiAgfSxcbiAgbGF5ZXI6IHtcbiAgICByZXF1aXJlZDogJ+W/hemgiConLFxuICAgIHJhZGl1czogJ+WNiuW+hCcsXG4gICAgY29sb3I6ICfoibInLFxuICAgIGZpbGxDb2xvcjogJ+Whl+OCiuOBpOOBtuOBl+iJsu+8iGZpbGzvvIknLFxuICAgIG91dGxpbmU6ICfovKrpg63nt5rjga7oibLvvIhzdHJva2XvvIknLFxuICAgIHdlaWdodDogJ+mHjeOBvycsXG4gICAgcHJvcGVydHlCYXNlZE9uOiAne3Byb3BlcnR5feOBruWfuua6licsXG4gICAgY292ZXJhZ2U6ICfjgqvjg5Djg7znjocnLFxuICAgIHN0cm9rZTogJ+e3micsXG4gICAgc3Ryb2tlV2lkdGg6ICfovKrpg63nt5rjga7lpKrjgZUnLFxuICAgIHN0cm9rZUNvbG9yOiAn6Lyq6YOt57ea44Gu6ImyJyxcbiAgICBiYXNpYzogJ+WfuuacrOioreWumicsXG4gICAgdHJhaWxMZW5ndGg6ICfnl5Xot6Hjga7plbfjgZUnLFxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICfnl5Xot6HjgYzlrozlhajjgavmtojjgYjjgovjgb7jgafjga7np5LmlbAnLFxuICAgIG5ld0xheWVyOiAn5paw44GX44GE44Os44Kk44OkJyxcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiAn44Kq44OV44Gu5aC05ZCI44CB6auY44GV44Gv54K544Gu5pWw44Gr5b+c44GY44Gm5rG644G+44KK44G+44GZJyxcbiAgICBjb2xvckJ5RGVzY3JpcHRpb246ICfjgqrjg5Xjga7loLTlkIjjgIHoibLjga/ngrnjga7mlbDjgavlv5zjgZjjgabmsbrjgb7jgorjgb7jgZknLFxuICAgIGFnZ3JlZ2F0ZUJ5OiAne2ZpZWxkfeOCkuS7peS4i+OBp+mbhuioiDogJyxcbiAgICAnM0RNb2RlbCc6ICczROODouODh+ODqycsXG4gICAgJzNETW9kZWxPcHRpb25zJzogJzNE44Oi44OH44Or44Gu44Kq44OX44K344On44OzJyxcbiAgICB0eXBlOiB7XG4gICAgICBwb2ludDogJ3BvaW50JyxcbiAgICAgIGFyYzogJ2FyYycsXG4gICAgICBsaW5lOiAnbGluZScsXG4gICAgICBncmlkOiAnZ3JpZCcsXG4gICAgICBoZXhiaW46ICdoZXhiaW4nLFxuICAgICAgcG9seWdvbjogJ3BvbHlnb24nLFxuICAgICAgZ2VvanNvbjogJ2dlb2pzb24nLFxuICAgICAgY2x1c3RlcjogJ2NsdXN0ZXInLFxuICAgICAgaWNvbjogJ2ljb24nLFxuICAgICAgaGVhdG1hcDogJ2hlYXRtYXAnLFxuICAgICAgaGV4YWdvbjogJ2hleGFnb24nLFxuICAgICAgaGV4YWdvbmlkOiAnSDMnLFxuICAgICAgdHJpcDogJ3RyaXAnLFxuICAgICAgczI6ICdTMicsXG4gICAgICAnM2QnOiAnM0QnXG4gICAgfVxuICB9LFxuICBsYXllclZpc0NvbmZpZ3M6IHtcbiAgICBhbmdsZTogJ+inkuW6picsXG4gICAgc3Ryb2tlV2lkdGg6ICfnt5rjga7lpKrjgZUgKOODlOOCr+OCu+ODqyknLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICfnt5rjga7lpKrjgZXjga7nr4Tlm7InLFxuICAgIHJhZGl1czogJ+WNiuW+hCcsXG4gICAgZml4ZWRSYWRpdXM6ICfljYrlvoTjgpLjg6Hjg7zjg4jjg6vjgaflm7rlrponLFxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICfljYrlvoTjgpLjg6Hjg7zjg4jjg6vljZjkvY3jga7ntbblr77ljYrlvoTjgavlpInmj5vjgZfjgb7jgZnvvIjkvos6IDUg4oaSIDXjg6Hjg7zjg4jjg6vvvIknLFxuICAgIHJhZGl1c1JhbmdlOiAn5Y2K5b6E44Gu56+E5ZuyJyxcbiAgICBjbHVzdGVyUmFkaXVzOiAn44Kv44Op44K544K/44O844Gu56+E5ZuyW+ODlOOCr+OCu+ODq10nLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAn5Y2K5b6E44Gu56+E5ZuyW+ODlOOCr+OCu+ODq10nLFxuICAgIGJpbGxib2FyZDogJ+ODk+ODq+ODnOODvOODieODouODvOODiScsXG4gICAgYmlsbGJvYXJkRGVzY3JpcHRpb246ICfjgrjjgqrjg6Hjg4jjg6rjgpLjgqvjg6Hjg6njgavlkJHjgZHjgb7jgZknLFxuICAgIGZhZGVUcmFpbDogJ+ODleOCp+ODvOOCuOODs+OCsOODkeOCuScsXG4gICAgb3BhY2l0eTogJ+S4jemAj+aYjuW6picsXG4gICAgY292ZXJhZ2U6ICfjgqvjg5Djg7znjocnLFxuICAgIG91dGxpbmU6ICfovKrpg63nt5onLFxuICAgIGNvbG9yUmFuZ2U6ICfoibLjga7nr4Tlm7InLFxuICAgIHN0cm9rZTogJ+e3micsXG4gICAgc3Ryb2tlQ29sb3I6ICfovKrpg63nt5rjga7oibInLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICfovKrpg63nt5rjga7oibLjga7nr4Tlm7InLFxuICAgIHRhcmdldENvbG9yOiAnVGFyZ2V044Gu6ImyJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAn6Imy44Gu6ZuG6KiIJyxcbiAgICBoZWlnaHRBZ2dyZWdhdGlvbjogJ+mrmOOBleOBrumbhuioiCcsXG4gICAgcmVzb2x1dGlvblJhbmdlOiAn6Kej5YOP5bqm44Gu56+E5ZuyJyxcbiAgICBzaXplU2NhbGU6ICfjgrXjgqTjgrrjga7jgrnjgrHjg7zjg6snLFxuICAgIHdvcmxkVW5pdFNpemU6ICdXb3JsZCBVbml0IFNpemUnLFxuICAgIGVsZXZhdGlvblNjYWxlOiAn5qiZ6auY44Gu44K544Kx44O844OrJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yOiAn5qiZ6auY44K644O844Og5L+C5pWw44KS5L2/55So44GZ44KLJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yRGVzY3JpcHRpb246ICfnj77lnKjjga7jgrrjg7zjg6Dnjofjgavln7rjgaXjgYTjgabpq5jjgZUv5qiZ6auY44KS6Kq/5pW044GX44G+44GZJyxcbiAgICBlbmFibGVIZWlnaHRab29tRmFjdG9yOiAn6auY44GV44K644O844Og5L+C5pWw44KS5L2/55So44GZ44KLJyxcbiAgICBoZWlnaHRTY2FsZTogJ+mrmOOBleOBruOCueOCseODvOODqycsXG4gICAgY292ZXJhZ2VSYW5nZTogJ+OCq+ODkOODvOeOh+OBruevhOWbsicsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZzogJ+mrmOeyvuW6puODrOODs+ODgOODquODs+OCsCcsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uOiAn6auY57K+5bqm44Gr44GZ44KL44Go6YCf5bqm44Gv5L2O5LiL44GX44G+44GZJyxcbiAgICBoZWlnaHQ6ICfpq5jjgZUnLFxuICAgIGhlaWdodERlc2NyaXB0aW9uOiAnM0Tjg5Pjg6Xjg7zjgavliIfjgormm7/jgYjjgovjgavjga/nlLvpnaLlj7PkuIrjga7jg5zjgr/jg7PjgpLjgq/jg6rjg4Pjgq/jgZfjgb7jgZknLFxuICAgIGZpbGw6ICfloZfjgorjgaTjgbbjgZcnLFxuICAgIGVuYWJsZVBvbHlnb25IZWlnaHQ6ICfjg53jg6rjgrTjg7Pjga7pq5jjgZXjgpLmnInlirnjgavjgZnjgosnLFxuICAgIHNob3dXaXJlZnJhbWU6ICfjg6/jgqTjg6Tjg7zjg5Xjg6zjg7zjg6DjgpLooajnpLonLFxuICAgIHdlaWdodEludGVuc2l0eTogJ+mHjeOBv+OBpeOBkeOBruW8t+OBlScsXG4gICAgem9vbVNjYWxlOiAn44K644O844Og44Gu44K544Kx44O844OrJyxcbiAgICBoZWlnaHRSYW5nZTogJ+mrmOOBleOBruevhOWbsicsXG4gICAgaGVpZ2h0TXVsdGlwbGllcjogJ+mrmOOBleS5l+aVsCcsXG4gICAgZml4ZWRIZWlnaHQ6ICflm7rlrprpq5jjgZUnLFxuICAgIGZpeGVkSGVpZ2h0RGVzY3JpcHRpb246ICfpq5jjgZXjgpLlpInmm7TjgZvjgZrjgavkvb/nlKjjgZnjgosnXG4gIH0sXG4gIGxheWVyTWFuYWdlcjoge1xuICAgIGFkZERhdGE6ICfjg4fjg7zjgr/ov73liqAnLFxuICAgIGFkZExheWVyOiAn44Os44Kk44Ok6L+95YqgJyxcbiAgICBsYXllckJsZW5kaW5nOiAn44Os44Kk44Ok44Gu44OW44Os44Oz44OJJ1xuICB9LFxuICBtYXBNYW5hZ2VyOiB7XG4gICAgbWFwU3R5bGU6ICfjg57jg4Pjg5fjgrnjgr/jgqTjg6snLFxuICAgIGFkZE1hcFN0eWxlOiAn44Oe44OD44OX44K544K/44Kk44Or6L+95YqgJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJzNE5bu654mp44Gu6ImyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICfog4zmma/oibInXG4gIH0sXG4gIGxheWVyQ29uZmlndXJhdGlvbjoge1xuICAgIGRlZmF1bHREZXNjcmlwdGlvbjogJ+mBuOaKnuOBleOCjOOBn+ODleOCo+ODvOODq+ODieOBq+WfuuOBpeOBhOOBpntwcm9wZXJ0eX3jgpLoqIjnrpfjgZfjgb7jgZknLFxuICAgIGhvd1RvOiAn5L2/44GE5pa5J1xuICB9LFxuICBmaWx0ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRmlsdGVyOiAn44OV44Kj44Or44K/44O86L+95YqgJ1xuICB9LFxuICBkYXRhc2V0VGl0bGU6IHtcbiAgICBzaG93RGF0YVRhYmxlOiAn44OH44O844K/6KGo44KS6KGo56S6JyxcbiAgICByZW1vdmVEYXRhc2V0OiAn44OH44O844K/44K744OD44OI44KS5YmK6ZmkJ1xuICB9LFxuICBkYXRhc2V0SW5mbzoge1xuICAgIHJvd0NvdW50OiAne3Jvd0NvdW50feihjCdcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIGhpZGVMYXllcjogJ+ODrOOCpOODpOOCkumdnuihqOekuicsXG4gICAgc2hvd0xheWVyOiAn44Os44Kk44Ok44KS6KGo56S6JyxcbiAgICBoaWRlRmVhdHVyZTogJ+ODleOCo+ODvOODgeODo+ODvOOCkumdnuihqOekuicsXG4gICAgc2hvd0ZlYXR1cmU6ICfjg5XjgqPjg7zjg4Hjg6Pjg7zjgpLooajnpLonLFxuICAgIGhpZGU6ICfpnZ7ooajnpLrjgavjgZnjgosnLFxuICAgIHNob3c6ICfooajnpLrjgZnjgosnLFxuICAgIHJlbW92ZUxheWVyOiAn44Os44Kk44Ok44KS5YmK6ZmkJyxcbiAgICBkdXBsaWNhdGVMYXllcjogJ+ODrOOCpOODpOOCkuikh+ijvScsXG4gICAgbGF5ZXJTZXR0aW5nczogJ+ODrOOCpOODpOioreWumicsXG4gICAgY2xvc2VQYW5lbDogJ+OBk+OBruODkeODjeODq+OCkumWieOBmOOCiycsXG4gICAgc3dpdGNoVG9EdWFsVmlldzogJ+ODh+ODpeOCouODq+ODk+ODpeODvOOBq+WIh+OCiuabv+OBiCcsXG4gICAgc2hvd0xlZ2VuZDogJ+WHoeS+i+OCkuihqOekuicsXG4gICAgZGlzYWJsZTNETWFwOiAnM0TlnLDlm7PjgpLnhKHlirnljJYnLFxuICAgIERyYXdPbk1hcDogJ+WcsOWbs+S4iuOBq+Wbs+W9ouOCkuaPj+eUuycsXG4gICAgc2VsZWN0TG9jYWxlOiAn6KiA6Kqe6Kit5a6aJyxcbiAgICBzaG93QWlBc3Npc3RhbnRQYW5lbDogJ0FJIOWKqeaJi+ODkeODjeODq+OCkuihqOekuicsXG4gICAgaGlkZUFpQXNzaXN0YW50UGFuZWw6ICdBSSDliqnmiYvjg5Hjg43jg6vjgpLpnZ7ooajnpLonLFxuICAgIGhpZGVMYXllclBhbmVsOiAn44Os44Kk44Ok44OR44ON44Or44KS6Z2e6KGo56S6JyxcbiAgICBzaG93TGF5ZXJQYW5lbDogJ+ODrOOCpOODpOODkeODjeODq+OCkuihqOekuicsXG4gICAgbW92ZVRvVG9wOiAn44OH44O844K/44Os44Kk44Ok44Gu5omL5YmN44Gr56e75YuVJyxcbiAgICBzZWxlY3RCYXNlTWFwU3R5bGU6ICfjg5njg7zjgrnjg57jg4Pjg5fjga7jgrnjgr/jgqTjg6vjgpLpgbjmip4nLFxuICAgIGRlbGV0ZTogJ+WJiumZpCcsXG4gICAgdGltZVBsYXliYWNrOiAn5pmC57O75YiX44Gn5YaN55SfJyxcbiAgICBjbG91ZFN0b3JhZ2U6ICfjgq/jg6njgqbjg4njgrnjg4jjg6zjg7zjgrgnLFxuICAgICczRE1hcCc6ICczROWcsOWbsycsXG4gICAgYW5pbWF0aW9uQnlXaW5kb3c6ICfmmYLplpPmnqDjgpLnp7vli5UnLFxuICAgIGFuaW1hdGlvbkJ5SW5jcmVtZW50YWw6ICfmmYLplpPmnqDjgpLlopfliqAnLFxuICAgIHNwZWVkOiAn6YCf5bqmJyxcbiAgICBwbGF5OiAn5YaN55SfJyxcbiAgICBwYXVzZTogJ+S4gOaZguWBnOatoicsXG4gICAgcmVzZXQ6ICfjg6rjgrvjg4Pjg4gnLFxuICAgIHpvb21Ub0xheWVyOiAn44Os44Kk44Ok5YWo5L2T44KS6KGo56S6J1xuICB9LFxuICB0b29sYmFyOiB7XG4gICAgZXhwb3J0SW1hZ2U6ICfnlLvlg4/jgpLlh7rlipsnLFxuICAgIGV4cG9ydERhdGE6ICfjg4fjg7zjgr/jgpLlh7rlipsnLFxuICAgIGV4cG9ydE1hcDogJ+WcsOWbs+OCkuWHuuWKmycsXG4gICAgc2hhcmVNYXBVUkw6ICflnLDlm7Pjga5VUkzjgpLlhbHmnIknLFxuICAgIHNhdmVNYXA6ICflnLDlm7PjgpLkv53lrZgnLFxuICAgIHNlbGVjdDogJ+mBuOaKnicsXG4gICAgcG9seWdvbjogJ+ODneODquOCtOODsycsXG4gICAgcmVjdGFuZ2xlOiAn6ZW35pa55b2iJyxcbiAgICBoaWRlOiAn6Z2e6KGo56S6JyxcbiAgICBzaG93OiAn6KGo56S6JyxcbiAgICAuLi5MT0NBTEVTXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGRlbGV0ZURhdGFzZXQ6ICfjg4fjg7zjgr/jgrvjg4Pjg4jjgpLliYrpmaQnLFxuICAgICAgYWRkRGF0YVRvTWFwOiAn5Zyw5Zuz44Gr44OH44O844K/44KS6L+95YqgJyxcbiAgICAgIGV4cG9ydEltYWdlOiAn55S75YOP44KS5Ye65YqbJyxcbiAgICAgIGV4cG9ydERhdGE6ICfjg4fjg7zjgr/jgpLlh7rlipsnLFxuICAgICAgZXhwb3J0TWFwOiAn5Zyw5Zuz44KS5Ye65YqbJyxcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAn44Kr44K544K/44Og44Oe44OD44OX44K544K/44Kk44Or44KS6L+95YqgJyxcbiAgICAgIHNhdmVNYXA6ICflnLDlm7PjgpLkv53lrZgnLFxuICAgICAgc2hhcmVVUkw6ICdVUkzjgpLlhbHmnIknXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGRlbGV0ZTogJ+WJiumZpCcsXG4gICAgICBkb3dubG9hZDogJ+ODgOOCpuODs+ODreODvOODiScsXG4gICAgICBleHBvcnQ6ICflh7rlipsnLFxuICAgICAgYWRkU3R5bGU6ICfjgrnjgr/jgqTjg6vov73liqAnLFxuICAgICAgc2F2ZTogJ+S/neWtmCcsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAn44Kt44Oj44Oz44K744OrJyxcbiAgICAgIGRlZmF1bHRDb25maXJtOiAn56K66KqNJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICfnuKbmqKrmr5QnLFxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ+eUqOmAlOOBq+mBqeOBl+OBn+e4puaoquavlOOCkumBuOaKnuOBl+OBvuOBmeOAgicsXG4gICAgICByYXRpb09yaWdpbmFsU2NyZWVuOiAn5YWD44Gu44K544Kv44Oq44O844Oz44K144Kk44K6JyxcbiAgICAgIHJhdGlvQ3VzdG9tOiAn44Kr44K544K/44OgJyxcbiAgICAgIHJhdGlvNF8zOiAnNDozJyxcbiAgICAgIHJhdGlvMTZfOTogJzE2OjknLFxuICAgICAgcmVzb2x1dGlvblRpdGxlOiAn6Kej5YOP5bqmJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ+WNsOWIt+OBq+OBr+mrmOino+WDj+W6puOBjOmBqeOBl+OBpuOBhOOBvuOBmeOAgicsXG4gICAgICBtYXBMZWdlbmRUaXRsZTogJ+WcsOWbs+OBruWHoeS+iycsXG4gICAgICBtYXBMZWdlbmRBZGQ6ICflnLDlm7PjgavliKTkvovjgpLov73liqAnXG4gICAgfSxcbiAgICBleHBvcnREYXRhOiB7XG4gICAgICBkYXRhc2V0VGl0bGU6ICfjg4fjg7zjgr/jgrvjg4Pjg4gnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAn44Ko44Kv44K544Od44O844OI44GX44Gf44GE44OH44O844K/44K744OD44OI44KS6YG45oqe44GX44G+44GZJyxcbiAgICAgIGFsbERhdGFzZXRzOiAn5YWo44GmJyxcbiAgICAgIGRhdGFUeXBlVGl0bGU6ICfjg4fjg7zjgr/lvaLlvI8nLFxuICAgICAgZGF0YVR5cGVTdWJ0aXRsZTogJ+OCqOOCr+OCueODneODvOODiOOBl+OBn+OBhOODh+ODvOOCv+W9ouW8j+OCkumBuOaKnuOBl+OBvuOBmScsXG4gICAgICBmaWx0ZXJEYXRhVGl0bGU6ICfjg4fjg7zjgr/jga7jg5XjgqPjg6vjgr8nLFxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOlxuICAgICAgICAn5YWD44OH44O844K/77yI44OV44Kj44Or44K/44Gq44GX77yJ44Go44OV44Kj44Or44K/5riI44OH44O844K/44Gu44Gp44Gh44KJ44KS44Ko44Kv44K544Od44O844OI44GZ44KL44GL6YG45oqe44GX44G+44GZJyxcbiAgICAgIGZpbHRlcmVkRGF0YTogJ+ODleOCo+ODq+OCv+a4iOODh+ODvOOCvycsXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ+WFg+ODh+ODvOOCvycsXG4gICAgICBmaWxlQ291bnQ6ICd7ZmlsZUNvdW50feWAi+OBruODleOCoeOCpOODqycsXG4gICAgICByb3dDb3VudDogJ3tyb3dDb3VudH3ooYwnXG4gICAgfSxcbiAgICBkZWxldGVEYXRhOiB7XG4gICAgICB3YXJuaW5nOiAn44GT44Gu44OH44O844K/44K744OD44OI44KS5YmK6Zmk44GX44G+44GZ44CCe2xlbmd0aH3lgIvjga7jg6zjgqTjg6TjgavlvbHpn7/jgZfjgb7jgZnjgIInXG4gICAgfSxcbiAgICBhZGRTdHlsZToge1xuICAgICAgcHVibGlzaFRpdGxlOlxuICAgICAgICAnMi4g44K544OG44OD44OXMeOBp01hcGJveOOBruOCueOCv+OCpOODq1VSTOOCkuaMh+WumuOBl+OBn+WgtOWQiOOAgU1hcGJveOOBp+OCueOCv+OCpOODq+OCkuWFrOmWi+OBmeOCi+OBi+OAgeOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkuS7peS4i+OBq+WFpeWKm+OBl+OBvuOBme+8iOOCquODl+OCt+ODp+ODs++8iScsXG4gICAgICBwdWJsaXNoU3VidGl0bGUxOiAn54us6Ieq44Gu44K544K/44Kk44Or44KSJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICfjgafkvZzmiJDjgZfjgIEnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMzogJ+WFrOmWiycsXG4gICAgICBwdWJsaXNoU3VidGl0bGU0OiAn44GZ44KL44GT44Go44GM44Gn44GN44G+44GZJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTU6ICfpnZ7lhazplovjga7jgrnjgr/jgqTjg6vjgpLkvb/nlKjjgZnjgovjgavjga/jgIHoh6rouqvjga4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogJ+OCouOCr+OCu+OCueODiOODvOOCr+ODsycsXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxuICAgICAgICAn44KS44GT44GT44Gr5YWl5Yqb44GX44G+44GZ44CCKmtlcGxlci5nbOOBr+OCr+ODqeOCpOOCouODs+ODiOS4iuOBp+WLleS9nOOBmeOCi+OBn+OCgeOAgeODh+ODvOOCv+OBr+iHqui6q+OBruODluODqeOCpuOCtuOBq+S/neaMgeOBleOCjOOBvuOBmeOAgicsXG4gICAgICBleGFtcGxlVG9rZW46ICfkvospIHBrLmFiY2RlZmcueHh4eHh4JyxcbiAgICAgIHBhc3RlVGl0bGU6ICcxLiDjgrnjgr/jgqTjg6vjga5VUkzjgpLjg5rjg7zjgrnjg4gnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTA6ICfjgrnjgr/jgqTjg6vjga5VUkzjga9NYXBib3jjga4nLFxuICAgICAgcGFzdGVTdWJ0aXRsZTE6ICdXaGF0IGlzIGEnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTI6ICfjgrnjgr/jgqTjg6tVUkwnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTM6ICfjgpLmjIflrprjgZnjgovjgYvjgIFNYXBib3ggR0zjga7ku5Xmp5jjgavmsr/jgaPjgZ9zdHlsZS5qc29u44GuVVJM44KS5oyH5a6a44GX44G+44GZ77yaJyxcbiAgICAgIHBhc3RlU3VidGl0bGU0OiAnTWFwYm94IEdMIOOCueOCv+OCpOODq+S7leanmCcsXG4gICAgICBuYW1pbmdUaXRsZTogJzMuIOOCueOCv+OCpOODq+OBruWQjeensOOCkuioreWumidcbiAgICB9LFxuICAgIHNoYXJlTWFwOiB7XG4gICAgICBzaGFyZVVyaVRpdGxlOiAn5Zyw5Zuz44GuVVJM44KS5YWx5pyJJyxcbiAgICAgIHNoYXJlVXJpU3VidGl0bGU6ICflhbHmnInnlKjjgavlnLDlm7Pjga5VUkzjgpLnlJ/miJAnLFxuICAgICAgY2xvdWRUaXRsZTogJ+OCr+ODqeOCpuODieOCueODiOODrOODvOOCuCcsXG4gICAgICBjbG91ZFN1YnRpdGxlOiAn44Ot44Kw44Kk44Oz44GX44Gm5Zyw5Zuz44OH44O844K/44KS5YCL5Lq655So44Kv44Op44Km44OJ44K544OI44Os44O844K444Gr44Ki44OD44OX44Ot44O844OJJyxcbiAgICAgIHNoYXJlRGlzY2xhaW1lcjpcbiAgICAgICAgJ2tlcGxlci5nbOOBr+S9nOaIkOOBl+OBn+WcsOWbs+OCkuOBguOBquOBn+OBruOCr+ODqeOCpuODieOCueODiOODrOODvOOCuOOBq+S/neWtmOOBmeOCi+OBn+OCgeOAgeOBneOBrlVSTOOCkuefpeOBo+OBpuOBhOOCi+S6uuOBruOBv+OBjOWcsOWbs+OChOOBneOBruODh+ODvOOCv+OBq+OCouOCr+OCu+OCueWPr+iDveOBp+OBmeOAgicgK1xuICAgICAgICAn44Kv44Op44Km44OJ44K544OI44Os44O844K444Gu44Ki44Kr44Km44Oz44OI44Gn44GE44Gk44Gn44KC44OH44O844K/44OV44Kh44Kk44Or44KS57eo6ZuGL+WJiumZpOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAgicsXG4gICAgICBnb3RvUGFnZTogJ0tlcGxlci5nbOOBrntjdXJyZW50UHJvdmlkZXJ944Oa44O844K444Gr56e75YuVJ1xuICAgIH0sXG4gICAgc3RhdHVzUGFuZWw6IHtcbiAgICAgIG1hcFVwbG9hZGluZzogJ+WcsOWbs+OCkuOCouODg+ODl+ODreODvOODieS4rScsXG4gICAgICBlcnJvcjogJ+OCqOODqeODvCdcbiAgICB9LFxuICAgIHNhdmVNYXA6IHtcbiAgICAgIHRpdGxlOiAn44Kv44Op44Km44OJ44K544OI44Os44O844K4JyxcbiAgICAgIHN1YnRpdGxlOiAnICdcbiAgICB9LFxuICAgIGV4cG9ydE1hcDoge1xuICAgICAgZm9ybWF0VGl0bGU6ICflnLDlm7Pjga7lvaLlvI8nLFxuICAgICAgZm9ybWF0U3VidGl0bGU6ICflnLDlm7Pjga7lh7rlipvlvaLlvI/jgpLpgbjmip7jgZfjgb7jgZknLFxuICAgICAgaHRtbDoge1xuICAgICAgICBzZWxlY3Rpb246ICflnLDlm7PjgpLjgqTjg7Pjgr/jg6njgq/jg4bjgqPjg5bjgapIVE1M44OV44Kh44Kk44Or44Go44GX44Gm5Ye65Yqb44GX44G+44GZ44CCJyxcbiAgICAgICAgdG9rZW5UaXRsZTogJ01hcGJveOOCouOCr+OCu+OCueODiOODvOOCr+ODsycsXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdIVE1M44OV44Kh44Kk44Or44Gn6Ieq5YiG44GuTWFwYm9444Ki44Kv44K744K544OI44O844Kv44Oz44KS5L2/55So44GX44G+44GZICjjgqrjg5fjgrfjg6fjg7MpJyxcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogJ+iHquWIhuOBrk1hcGJveOOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkuOBk+OBk+OBq+iyvOOCiuS7mOOBkScsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiDoh6rliIbjga7jg4jjg7zjgq/jg7PjgpLkvb/nlKjjgZfjgarjgYTloLTlkIjjga/jgIHjg4fjg5Xjgqnjg6vjg4jjga7jg4jjg7zjgq/jg7PjgYzmgqrnlKjpmLLmraLjga7jgZ/jgoHjgavmm7TmlrDjgZXjgozjgIHlnLDlm7PjgYzooajnpLrjgZXjgozjgarjgY/jgarjgovlj6/og73mgKfjgYzjgYLjgorjgb7jgZnjgIIgICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjogJ01hcGJveOOBruODiOODvOOCr+ODs+OBr+S4i+iomOOBruaWueazleOBq+W+k+OBo+OBpuW+jOOBi+OCieWkieabtOOBmeOCi+OBk+OBqOOCguWPr+iDveOBp+OBme+8micsXG4gICAgICAgIHRva2VuVXBkYXRlOiAn5pei5a2Y44Gu5Zyw5Zuz44Gu44OI44O844Kv44Oz44KS5pu05paw44GZ44KL5pa55rOVJyxcbiAgICAgICAgbW9kZVRpdGxlOiAn5Zyw5Zuz44Gu44Oi44O844OJJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ+WcsOWbs+OBruODouODvOODieOCkumBuOaKnuOBl+OBvuOBmeOAguips+e0sOOBrycsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTI6ICfjgZPjgaHjgoknLFxuICAgICAgICBtb2RlRGVzY3JpcHRpb246ICfjg6bjg7zjgrbjg7zjgavlnLDlm7Pjga57bW9kZX3jgpLoqLHlj68nLFxuICAgICAgICByZWFkOiAn6Zay6KanJyxcbiAgICAgICAgZWRpdDogJ+e3qOmbhidcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIGNvbmZpZ1RpdGxlOiAn5Zyw5Zuz44Gu6Kit5a6aJyxcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcbiAgICAgICAgICAn5Zyw5Zuz44Gu6Kit5a6a44GvanNvbuODleOCoeOCpOODq+OBq+WPjuOCgeOCieOCjOOBvuOBmeOAguS7luOBruOCouODl+ODquOCseODvOOCt+ODp+ODs+OBp2tlcGxlci5nbOOCkuS9v+eUqOOBmeOCi+WgtOWQiOOAgeOBk+OBruioreWumuOCkuOCs+ODlOODvOODmuODvOOCueODiOOBmeOCi+OBk+OBqOOBjOWPr+iDveOBp+OBme+8micsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAn54++5Zyo44Gu5Zyw5Zuz44OH44O844K/44Go6Kit5a6a44KS5Y2Y5LiA44GuanNvbuODleOCoeOCpOODq+OBq+WHuuWKm+OBl+OBvuOBmeOAguOBk+OBruODleOCoeOCpOODq+OCkmtlcGxlci5nbOOBq+OCouODg+ODl+ODreODvOODieOBmeOCi+OBk+OBqOOBp+OAgeWQjOOBmOWcsOWbs+OCkuW+jOOBi+OCiemWi+OBj+OBk+OBqOOBjOWPr+iDveOBq+OBquOCiuOBvuOBmeOAgicsXG4gICAgICAgIGRpc2NsYWltZXI6XG4gICAgICAgICAgJyog5Zyw5Zuz44Gu6Kit5a6a44Gv6Kqt44G/6L6844G+44KM44Gf44OH44O844K/44K744OD44OI44Go44K744OD44OI44Gr44Gq44Gj44Gm44GE44G+44GZ44CC4oCYZGF0YUlk4oCZ44Gr44KI44Gj44Gm44Os44Kk44Ok44CB44OV44Kj44Or44K/44O844CB44OE44O844Or44OB44OD44OX44Gv54m55a6a44Gu44OH44O844K/44K744OD44OI44Gr57SQ44Gl44GR44KJ44KM44G+44GZ44CCICcgK1xuICAgICAgICAgICfjgZPjga7oqK3lrprjgpJhZGREYXRhVG9NYXDjgavmuKHjgZnpmpvjga/jgIHjg4fjg7zjgr/jgrvjg4Pjg4hJROOBjOOBk+OBruioreWumuWGheOBrmRhdGFJZOOBqOS4gOiHtOOBmeOCi+OCiOOBhuOBq+OBl+OBpuOBj+OBoOOBleOBhOOAgidcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRpbmdEaWFsb2c6IHtcbiAgICAgIGxvYWRpbmc6ICfjg63jg7zjg4nkuK0uLi4nXG4gICAgfSxcbiAgICBsb2FkRGF0YToge1xuICAgICAgdXBsb2FkOiAn44OV44Kh44Kk44Or44KS44Ot44O844OJJyxcbiAgICAgIHRpbGVzZXQ6ICfjgr/jgqTjg6vjgrvjg4Pjg4gnLFxuICAgICAgc3RvcmFnZTogJ+OCueODiOODrOODvOOCuOOBi+OCieODreODvOODiScsXG4gICAgICBzYW1wbGU6ICfjgrXjg7Pjg5fjg6vjg4fjg7zjgr/jgpLoqabjgZknLFxuICAgICAgcmVtb3RlOiAnVVJMIOOBp+WcsOWbs+OCkuiqreOBv+i+vOOCgCdcbiAgICB9LFxuICAgIHRyaXBJbmZvOiB7XG4gICAgICB0aXRsZTogJ+enu+WLleOCouODi+ODoeODvOOCt+ODp+ODs+OCkuacieWKueOBq+OBmeOCi+aWueazlScsXG4gICAgICB0aXRsZVRhYmxlOiAn44Od44Kk44Oz44OI44Gu44Oq44K544OI44GL44KJ56e75YuV44Ki44OL44Oh44O844K344On44OzJyxcbiAgICAgIGRlc2NyaXB0aW9uMTogYOe1jOi3r+OCkuOCouODi+ODoeODvOOCt+ODp+ODs+WMluOBmeOCi+OBq+OBr+OAgWdlb0pTT07jg4fjg7zjgr/jga9mZWF0dXJl44GuZ2VvbWV0cnnjgajjgZfjgaYgXFxgTGluZVN0cmluZ1xcYCDjgpLlkKvjgoDlv4XopoHjgYzjgYLjgorjgb7jgZnjgILjgb7jgZ/jgIFMaW5lU3RyaW5n44Gu5bqn5qiZ44GvNOOBpOOBruimgee0oOOCklxuJHsnYGBganNvbid9XG5b57WM5bqmLCDnt6/luqYsIOaomemrmCwgdGltZXN0YW1wXVxuJHsnYGBgJ31cbuOBqOOBhOOBhuW9ouW8j++8iDPjgaTnm67jgYzmqJnpq5jjgIE044Gk55uu44GM44K/44Kk44Og44K544K/44Oz44OX77yJ44Gn5L+d5oyB44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CC44K/44Kk44Og44K544K/44Oz44OX44Gu5b2i5byP44Gv44CBIFVOSVjmmYLplpPjga7np5LljZjkvY3vvIjkvos6IFxcYDE1NjQxODQzNjNcXGDvvInjgb7jgZ/jga/jg5/jg6rnp5LljZjkvY3vvIjkvos6IFxcYDE1NjQxODQzNjMwMDBcXGDvvInjgYzmnInlirnjgafjgZnjgIJgLFxuICAgICAgZGVzY3JpcHRpb25UYWJsZTE6XG4gICAgICAgICfnp7vli5XjgqLjg4vjg6Hjg7zjgrfjg6fjg7PvvIhUcmlwc++8ieOBr+OAgee3r+W6puOAgee1jOW6puOAgeOCv+OCpOODoOOCueOCv+ODs+ODl++8iOOCveODvOODiOeUqO+8ieOAgUlE77yI44Kw44Or44O844OX5YyW55So77yJ44KS5ZCr44KA44Od44Kk44Oz44OI44Oq44K544OI44GL44KJ5L2c5oiQ44Gn44GN44G+44GZ44CCJyxcbiAgICAgIGV4YW1wbGU6ICdHZW9KU09O44Gu5L6LJyxcbiAgICAgIGV4YW1wbGVUYWJsZTogJ0NTVuOBruS+iydcbiAgICB9LFxuICAgIHBvbHlnb25JbmZvOiB7XG4gICAgICB0aXRsZTogJ0dlb0pTT07jgYvjgonjg53jg6rjgrTjg7Pjg6zjgqTjg6TjgpLkvZzmiJAnLFxuICAgICAgdGl0bGVUYWJsZTogJ+ODneOCpOODs+ODiOOBi+OCieODkeOCue+8iOe3mu+8ieOCkuS9nOaIkCcsXG4gICAgICBkZXNjcmlwdGlvbjogYOODneODquOCtOODs+OBr+S7peS4i+OBruaWueazleOBp+S9nOaIkOOBp+OBjeOBvuOBme+8mlxuX18xLiBHZW9KU09OX19cbl9fMi4g44K444Kq44Oh44OI44Oq5YiX44KS5ZCr44KAQ1NWX19cblxuIyMjIDEuIEdlb0pTT07jg5XjgqHjgqTjg6vjgYvjgonjg53jg6rjgrTjg7PjgpLkvZzmiJBcblxuRmVhdHVyZUNvbGxlY3Rpb27jgpLlkKvjgoBHZW9KU09O44OV44Kh44Kk44Or44KS44Ki44OD44OX44Ot44O844OJ44GZ44KL44Go44CB44Od44Oq44K044Oz44Os44Kk44Ok44GM6Ieq5YuV55qE44Gr5L2c5oiQ44GV44KM44G+44GZ44CCXG5cbkdlb0pTT07jga7kvotcbiR7J2BgYGpzb24nfVxue1xuICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICBcImZlYXR1cmVzXCI6IFt7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogWzEwMi4wLCAwLjVdXG4gICAgICB9LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICBcInByb3AwXCI6IFwidmFsdWUwXCJcbiAgICAgIH1cbiAgfSwge1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiTGluZVN0cmluZ1wiLFxuICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICAgICAgICAgICAgICBbMTAyLjAsIDAuMF0sXG4gICAgICAgICAgICAgIFsxMDMuMCwgMS4wXSxcbiAgICAgICAgICAgICAgWzEwNC4wLCAwLjBdLFxuICAgICAgICAgICAgICBbMTA1LjAsIDEuMF1cbiAgICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJwcm9wMFwiOiBcInZhbHVlMFwiXG4gICAgICB9XG4gIH1dXG59XG4keydgYGAnfVxuXG4jIyMgMi4gQ1NW44OG44O844OW44Or5YaF44Gu44K444Kq44Oh44OI44Oq5YiX44GL44KJ44Od44Oq44K044Oz44KS5L2c5oiQXG7jgrjjgqrjg6Hjg4jjg6rvvIjjg53jg6rjgrTjg7PjgIHjg53jgqTjg7Pjg4jjgIFMaW5lU3RyaW5n44Gq44Gp77yJ44Gv44CBXFxgR2VvSlNPTlxcYCDjgb7jgZ/jga8gXFxgV0tUXFxgIOW9ouW8j+OBruaWh+Wtl+WIl+OBqOOBl+OBpkNTVuOBq+Wfi+OCgei+vOOCgOOBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglxuXG4jIyMjIDIuMSBcXGBHZW9KU09OXFxgIOaWh+Wtl+WIl1xuXFxgR2VvSlNPTlxcYCDmloflrZfliJfjgpLlkKvjgoAgZGF0YS5jc3Yg44Gu5L6LXG4keydgYGB0eHQnfVxuaWQsX2dlb2pzb25cbjEsXCJ7XCJcInR5cGVcIlwiOlwiXCJQb2x5Z29uXCJcIixcIlwiY29vcmRpbmF0ZXNcIlwiOltbWy03NC4xNTg0OTEsNDAuODM1OTQ3XSxbLTc0LjE1NzkxNCw0MC44MzkwMl1dXX1cIlxuJHsnYGBgJ31cblxuIyMjIyAyLjIgXFxgV0tUXFxgIOaWh+Wtl+WIl1xuXFxgV0tUXFxgIOaWh+Wtl+WIl+OCkuWQq+OCgCBkYXRhLmNzdiDjga7kvotcbltXZWxsLUtub3duIFRleHQgKFdLVCldKGh0dHBzOi8vZGV2Lm15c3FsLmNvbS9kb2MvcmVmbWFuLzUuNy9lbi9naXMtZGF0YS1mb3JtYXRzLmh0bWwjZ2lzLXdrdC1mb3JtYXQpIOOBr+OAgeOCuOOCquODoeODiOODquODh+ODvOOCv+OCkkFTQ0lJ5b2i5byP44Gn5Lqk5o+b44GZ44KL44Gf44KB44Gr6Kit6KiI44GV44KM44Gf6KGo54++5b2i5byP44Gn44GZ44CCXG5cbldLVOOCkuWQq+OCgCBkYXRhLmNzdiDjga7kvotcbiR7J2BgYHR4dCd9XG5pZCxfZ2VvanNvblxuMSxcIlBPTFlHT04oKDAgMCwxMCAwLDEwIDEwLDAgMTAsMCAwKSwoNSA1LDcgNSw3IDcsNSA3LCA1IDUpKVwiXG4keydgYGAnfVxuYCxcbiAgICAgIGRlc2NyaXB0aW9uVGFibGU6IGDjg5HjgrnvvIjnt5rvvInjga/jgIHnt6/luqbntYzluqbjga7jg53jgqTjg7Pjg4jjg6rjgrnjg4jjgpLntZDlkIjjgZnjgovjgZPjgajjgafkvZzmiJDjgZXjgozjgb7jgZnjgILjgqTjg7Pjg4fjg4Pjgq/jgrnjg5XjgqPjg7zjg6vjg4nvvIjkvovvvJrjgr/jgqTjg6Djgrnjgr/jg7Pjg5fvvInjgafjgr3jg7zjg4jjgZfjgIHjg6bjg4vjg7zjgq9JROOBp+OCsOODq+ODvOODl+WMluOBl+OBvuOBmeOAglxuXG4gICMjIyDjg6zjgqTjg6Tjga7liJfoqK3lrpo6XG4gIC0gKippZCoqOiAtICrlv4XpoIgqJm5ic3A7LSDjg53jgqTjg7Pjg4jjgpLjgrDjg6vjg7zjg5fljJbjgZnjgovjgZ/jgoHjgavkvb/nlKjjgZXjgozjgosgXFxgaWRcXGAg5YiX44CC5ZCM44GYSUTjgpLmjIHjgaTjg53jgqTjg7Pjg4jjgYzntZDlkIjjgZXjgozjgaYx44Gk44Gu44OR44K544Gr44Gq44KK44G+44GZ44CCXG4gIC0gKipsYXQqKjogLSAq5b+F6aCIKiZuYnNwOy0g44Od44Kk44Oz44OI44Gu57ev5bqmXG4gIC0gKipsb24qKjogLSAq5b+F6aCIKiZuYnNwOy0g44Od44Kk44Oz44OI44Gu57WM5bqmXG4gIC0gKiphbHQqKjogLSAq5Lu75oSPKiZuYnNwOy0g44Od44Kk44Oz44OI44Gu5qiZ6auYXG4gIC0gKipzb3J0IGJ5Kio6IC0gKuS7u+aEjyombmJzcDstIOODneOCpOODs+ODiOOCkuOCveODvOODiOOBmeOCi+OBn+OCgeOBq+S9v+eUqOOBleOCjOOCiyBcXGBzb3J0IGJ5XFxgIOWIl+OAguaMh+WumuOBjOOBquOBhOWgtOWQiOOAgeODneOCpOODs+ODiOOBr+ihjOOBruOCpOODs+ODh+ODg+OCr+OCuemghuOBq+OCveODvOODiOOBleOCjOOBvuOBmeOAglxuYCxcbiAgICAgIGV4YW1wbGVUYWJsZTogJ0V4YW1wbGUgQ1NWJ1xuICAgIH0sXG4gICAgaWNvbkluZm86IHtcbiAgICAgIHRpdGxlOiAn44Ki44Kk44Kz44Oz44Gu5o+P55S75pa55rOVJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ0NTVuODleOCoeOCpOODq+OBq+WIl+OCkuS9nOaIkOOBl+OAgeaPj+eUu+OBl+OBn+OBhOOCouOCpOOCs+ODs+OBruWQjeensOOCkuiomOi8ieOBl+OBvuOBmeOAguOCouOCpOOCs+ODs+OBruaPj+eUu+OBjOS4jeimgeOBqueCueOBjOOBguOCjOOBsOOAgeOCu+ODq+OCkuepuueZveOBq+OBmeOCi+OBk+OBqOOCguWPr+iDveOBp+OBmeOAguWIl+WQjeOBjCcsXG4gICAgICBjb2RlOiAnaWNvbicsXG4gICAgICBkZXNjcmlwdGlvbjI6ICfjga7loLTlkIjjgIFrZXBsZXIuZ2zjga/oh6rli5XnmoTjgavjgqLjgqTjgrPjg7Pjg6zjgqTjg6TjgpLkvZzmiJDjgZfjgb7jgZnjgIInLFxuICAgICAgZXhhbXBsZTogJ+S+izonLFxuICAgICAgaWNvbnM6ICfjgqLjgqTjgrPjg7PkuIDopqcnXG4gICAgfSxcbiAgICBzdG9yYWdlTWFwVmlld2VyOiB7XG4gICAgICBsYXN0TW9kaWZpZWQ6ICfmnIDntYLnt6jpm4bvvJp7bGFzdFVwZGF0ZWR9IOWJjScsXG4gICAgICBiYWNrOiAn5oi744KLJ1xuICAgIH0sXG4gICAgb3ZlcndyaXRlTWFwOiB7XG4gICAgICB0aXRsZTogJ+WcsOWbs+OCkuS/neWtmOS4rS4uLicsXG4gICAgICBhbHJlYWR5RXhpc3RzOiAn5pei44Gre21hcFNhdmVkfeOBq+WtmOWcqOOBl+OBvuOBmeOAguS4iuabuOOBjeOBl+OBvuOBmeOBi++8nydcbiAgICB9LFxuICAgIGxvYWRTdG9yYWdlTWFwOiB7XG4gICAgICBiYWNrOiAn5oi744KLJyxcbiAgICAgIGdvVG9QYWdlOiAnS2VwbGVyLmds44Gue2Rpc3BsYXlOYW1lfeODmuODvOOCuOOBq+enu+WLlScsXG4gICAgICBzdG9yYWdlTWFwczogJ+OCueODiOODrOODvOOCuCAvIOWcsOWbsycsXG4gICAgICBub1NhdmVkTWFwczogJ+S/neWtmOa4iOOBruWcsOWbs+OBr+OBvuOBoOOBguOCiuOBvuOBm+OCkydcbiAgICB9XG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHZpc2libGVMYXllcnM6ICfooajnpLrkuK3jga7jg6zjgqTjg6QnLFxuICAgIGxheWVyTGVnZW5kOiAn44Os44Kk44Ok5Yik5L6LJ1xuICB9LFxuICBpbnRlcmFjdGlvbnM6IHtcbiAgICB0b29sdGlwOiAn44OE44O844Or44OB44OD44OXJyxcbiAgICBicnVzaDogJ+ODluODqeOCtycsXG4gICAgY29vcmRpbmF0ZTogJ+W6p+aomScsXG4gICAgZ2VvY29kZXI6ICfjgrjjgqrjgrPjg7zjg4Djg7wnXG4gIH0sXG4gIGxheWVyQmxlbmRpbmc6IHtcbiAgICB0aXRsZTogJ+ODrOOCpOODpOOBruODluODrOODs+ODiScsXG4gICAgYWRkaXRpdmU6ICfliqDnrpfvvIhBZGRpdGl2Ze+8iScsXG4gICAgbm9ybWFsOiAn6YCa5bi477yITm9ybWFs77yJJyxcbiAgICBzdWJ0cmFjdGl2ZTogJ+a4m+eul++8iFN1YnRyYWN0aXZl77yJJ1xuICB9LFxuICBvdmVybGF5QmxlbmRpbmc6IHtcbiAgICB0aXRsZTogJ+WcsOWbs+OCquODvOODkOODvOODrOOCpOOBruODluODrOODs+ODiScsXG4gICAgZGVzY3JpcHRpb246ICfjg5njg7zjgrnjg57jg4Pjg5fjgajjg6zjgqTjg6TjgpLjg5bjg6zjg7Pjg4njgZfjgabjgIHkuKHmlrnjgYzopovjgYjjgovjgojjgYbjgavjgZfjgb7jgZnjgIInLFxuICAgIHNjcmVlbjogJ+aal+OBhOiDjOaZr+eUqO+8iFNjcmVlbu+8iScsXG4gICAgbm9ybWFsOiAn6YCa5bi477yITm9ybWFs77yJJyxcbiAgICBkYXJrZW46ICfmmI7jgovjgYTog4zmma/nlKgg77yIRGFya2Vu77yJJ1xuICB9LFxuICBjb2x1bW5zOiB7XG4gICAgdGl0bGU6ICfliJcnLFxuICAgIGxhdDogJ+e3r+W6picsXG4gICAgbG5nOiAn57WM5bqmJyxcbiAgICBhbHRpdHVkZTogJ+aomemrmCcsXG4gICAgaWNvbjogJ+OCouOCpOOCs+ODsycsXG4gICAgZ2VvanNvbjogJ2dlb2pzb24nLFxuICAgIHRva2VuOiAn44OI44O844Kv44OzJyxcbiAgICBzb3J0Qnk6ICfkuKbjgbnmm7/jgYjpoIYnLFxuICAgIGFyYzoge1xuICAgICAgbGF0MDogJ+WHuueZuiDnt6/luqYnLFxuICAgICAgbG5nMDogJ+WHuueZuiDntYzluqYnLFxuICAgICAgbGF0MTogJ+WIsOedgCDnt6/luqYnLFxuICAgICAgbG5nMTogJ+WIsOedgCDntYzluqYnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAn44Kw44Oq44OD44OJ44K144Kk44K677yIa23vvIknXG4gICAgfSxcbiAgICBoZXhhZ29uOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAn5YWt6KeS5b2i44Gu5Y2K5b6E77yIa23vvIknXG4gICAgfSxcbiAgICBoZXhfaWQ6ICdoZXggaWQnXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgY3VzdG9tUGFsZXR0ZTogJ+OCq+OCueOCv+ODoOODkeODrOODg+ODiCcsXG4gICAgJ1VwZGF0ZSBjb2xvcic6ICfoibLjgpLlpInmm7QnLFxuICAgIHN0ZXBzOiAn6ZqO57Sa5YiG6aGe5pWwJyxcbiAgICB0eXBlOiAn6ZqO57Sa5YiG6aGe5rOVJyxcbiAgICBzZXF1ZW50aWFsOiAn6aCG5bqP55qEJyxcbiAgICBxdWFsaXRhdGl2ZTogJ+WumuaAp+eahCcsXG4gICAgZGl2ZXJnaW5nOiAn5YiG5bKQ55qEJyxcbiAgICBjeWNsaWNhbDogJ+W+queSsOeahCcsXG4gICAgYWxsOiAn5YWo44GmJyxcbiAgICBjb2xvckJsaW5kU2FmZTogJ+iJsuimmuODkOODquOCouODleODquODvCcsXG4gICAgcmV2ZXJzZWQ6ICflj43ou6InXG4gIH0sXG4gIGNvbHVtblN0YXRzOiB7XG4gICAgbWluOiAn5pyA5bCP5YCkJyxcbiAgICBtZWFuOiAn5bmz5Z2H5YCkJyxcbiAgICBtYXg6ICfmnIDlpKflgKQnXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ+OCq+ODqeODvOOCueOCseODvOODqycsXG4gICAgc2l6ZVNjYWxlOiAn44K144Kk44K644Gu44K544Kx44O844OrJyxcbiAgICBzdHJva2VTY2FsZTogJ+e3muOBruOCueOCseODvOODqycsXG4gICAgc3Ryb2tlQ29sb3JTY2FsZTogJ+i8qumDree3muOBruOCq+ODqeODvOOCueOCseODvOODqycsXG4gICAgc2NhbGU6ICfjgrnjgrHjg7zjg6snLFxuICAgIG9yZGluYWw6ICfpoIbluo8nLFxuICAgIHF1YW50aWxlOiAn562J6YeP77yIUXVhbnRpbGXvvIknLFxuICAgIHF1YW50aXplOiAn562J6ZaT6ZqU77yIUXVhbnRpemXvvIknLFxuICAgIGxpbmVhcjogJ+e3muW9oicsXG4gICAgc3FydDogJ+W5s+aWueaguScsXG4gICAgbG9nOiAn5a++5pWwJyxcbiAgICBwb2ludDogJ+eCuScsXG4gICAgdGhyZXNob2xkOiAn44GX44GN44GE5YCkJyxcbiAgICBjdXN0b206ICfjgqvjgrnjgr/jg6DljLrliIYnLFxuICAgIGN1c3RvbU9yZGluYWw6ICfjgqvjgrnjgr/jg6DpoIbluo8nXG4gIH0sXG4gIGZpbGVVcGxvYWRlcjoge1xuICAgIG1lc3NhZ2U6ICfjgZPjgZPjgavjg5XjgqHjgqTjg6vjgpLjg4njg63jg4Pjg5fvvIjopIfmlbDlj6/vvIknLFxuICAgIGNocm9tZU1lc3NhZ2U6XG4gICAgICAnKkNocm9tZeODpuODvOOCtuODvOOBruWgtOWQiDog44OV44Kh44Kk44Or44K144Kk44K644GvMjUwbWLjgb7jgafjgavjgZfjgabjgY/jgaDjgZXjgYTjgILjgZ3jgozku6XkuIrjga7jg5XjgqHjgqTjg6vjgpLjgqLjg4Pjg5fjg63jg7zjg4njgZnjgovlv4XopoHjgYzjgYLjgovloLTlkIjjgIFTYWZhcmnjgpLoqabjgZfjgabjgY/jgaDjgZXjgYTjgIInLFxuICAgIGRpc2NsYWltZXI6XG4gICAgICAnKmtlcGxlci5nbOOBr+OCr+ODqeOCpOOCouODs+ODiOS4iuOBp+WLleS9nOOBl+OBvuOBmeOAguODh+ODvOOCv+OBr+iHqui6q+OBruapn+WZqOODu+ODluODqeOCpuOCtuOBq+OBruOBv+S/neaMgeOBleOCjOOBvuOBmeOAgicgK1xuICAgICAgJ+aDheWgseOChOWcsOWbs+ODh+ODvOOCv+OBr+OAgeOBhOOBi+OBquOCi+OCteODvOODkOODvOOBq+OCgumAgeS/oeOBleOCjOOBvuOBm+OCk+OAgicsXG4gICAgY29uZmlnVXBsb2FkTWVzc2FnZTpcbiAgICAgICd7ZmlsZUZvcm1hdE5hbWVzfSDjgb7jgZ/jga/kv53lrZjmuIjlnLDlm7Pjga4qKkpzb24qKuOCkuOCouODg+ODl+ODreODvOODieOBl+OBvuOBmeOAguips+e0sOOBr+S7peS4i+OCkuWPgueFp+OBl+OBpuOBj+OBoOOBleOBhO+8mlsqKuWvvuW/nOODleOCoeOCpOODq+W9ouW8jyoqXScsXG4gICAgYnJvd3NlRmlsZXM6ICfjg4fjg5DjgqTjgrnjga7jg5XjgqHjgqTjg6vjgpLpgbjmip4nLFxuICAgIHVwbG9hZGluZzogJ+OCouODg+ODl+ODreODvOODieS4rScsXG4gICAgZmlsZU5vdFN1cHBvcnRlZDogJ3tlcnJvckZpbGVzfSDjga/jgrXjg53jg7zjg4jjgZXjgozjgabjgYTjgarjgYTjg5XjgqHjgqTjg6vjgafjgZnjgIInLFxuICAgIG9yOiAnb3InXG4gIH0sXG4gIGdlb2NvZGVyOiB7XG4gICAgdGl0bGU6ICfkvY/miYDjgb7jgZ/jga/luqfmqJnjgpLlhaXlipvvvIjkvovvvJogMzcuNzksLTEyMi40MO+8iSdcbiAgfSxcbiAgZmllbGRTZWxlY3Rvcjoge1xuICAgIGNsZWFyQWxsOiAn5YWo44Gm6Kej6ZmkJyxcbiAgICBmb3JtYXR0aW5nOiAn5YCk44Gu5b2i5byPJ1xuICB9LFxuICBjb21wYXJlOiB7XG4gICAgbW9kZUxhYmVsOiAn5q+U6LyD44Oi44O844OJJyxcbiAgICB0eXBlTGFiZWw6ICfmr5TovIPmlrnlvI8nLFxuICAgIHR5cGVzOiB7XG4gICAgICBhYnNvbHV0ZTogJ+e1tuWvvicsXG4gICAgICByZWxhdGl2ZTogJ+ebuOWvvidcbiAgICB9XG4gIH0sXG4gIG1hcFBvcG92ZXI6IHtcbiAgICBwcmltYXJ5OiAn44OX44Op44Kk44Oe44OqJ1xuICB9LFxuICBkZW5zaXR5OiAnZGVuc2l0eScsXG4gICdCdWcgUmVwb3J0JzogJ+ODkOOCsOOCkuWgseWRiicsXG4gICdVc2VyIEd1aWRlJzogJ+ODpuODvOOCtuODvOOCrOOCpOODiScsXG4gIFNhdmU6ICfkv53lrZgnLFxuICBTaGFyZTogJ+WFseaciSdcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO0FBQXFDLFNBQUFDLFFBQUFDLENBQUEsRUFBQUMsQ0FBQSxRQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsSUFBQSxDQUFBSixDQUFBLE9BQUFHLE1BQUEsQ0FBQUUscUJBQUEsUUFBQUMsQ0FBQSxHQUFBSCxNQUFBLENBQUFFLHFCQUFBLENBQUFMLENBQUEsR0FBQUMsQ0FBQSxLQUFBSyxDQUFBLEdBQUFBLENBQUEsQ0FBQUMsTUFBQSxXQUFBTixDQUFBLFdBQUFFLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFRLFVBQUEsT0FBQVAsQ0FBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsQ0FBQSxFQUFBSSxDQUFBLFlBQUFKLENBQUE7QUFBQSxTQUFBVSxjQUFBWixDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBWSxTQUFBLENBQUFDLE1BQUEsRUFBQWIsQ0FBQSxVQUFBQyxDQUFBLFdBQUFXLFNBQUEsQ0FBQVosQ0FBQSxJQUFBWSxTQUFBLENBQUFaLENBQUEsUUFBQUEsQ0FBQSxPQUFBRixPQUFBLENBQUFJLE1BQUEsQ0FBQUQsQ0FBQSxPQUFBYSxPQUFBLFdBQUFkLENBQUEsUUFBQWUsZ0JBQUEsYUFBQWhCLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLENBQUFELENBQUEsU0FBQUUsTUFBQSxDQUFBYyx5QkFBQSxHQUFBZCxNQUFBLENBQUFlLGdCQUFBLENBQUFsQixDQUFBLEVBQUFHLE1BQUEsQ0FBQWMseUJBQUEsQ0FBQWYsQ0FBQSxLQUFBSCxPQUFBLENBQUFJLE1BQUEsQ0FBQUQsQ0FBQSxHQUFB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