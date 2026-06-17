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
      copy: 'コピー',
      copied: 'コピーしました',
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
      title: '地図を共有',
      shareUriTitle: '共有URLを作成',
      generatedUrlTitle: '共有URL',
      shareUriSubtitle: '共有用に地図のURLを生成',
      cloudTitle: 'クラウドストレージ',
      cloudSubtitle: 'ログインして地図データを個人用クラウドストレージにアップロード',
      shareDisclaimer: 'データの道具箱上のkepler.glでは、作成したデータ地図について、誰でもアクセス可能なURLを発行することができます。' + 'シェアする際には最新状態を保存した上で公開されます。',
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
  Share: '共有',
  'Update color': '色を変更'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbG9jYWxlcyIsInJlcXVpcmUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3BlcnR5Iiwid2VpZ2h0IiwibGFiZWwiLCJmaWxsQ29sb3IiLCJjb2xvciIsImNvdmVyYWdlIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJtaXNjIiwiYnkiLCJ2YWx1ZXNJbiIsInZhbHVlRXF1YWxzIiwiZGF0YVNvdXJjZSIsImJydXNoUmFkaXVzIiwibWFwTGF5ZXJzIiwidGl0bGUiLCJyb2FkIiwiYm9yZGVyIiwiYnVpbGRpbmciLCJ3YXRlciIsImxhbmQiLCJiYWNrZ3JvdW5kIiwicGFuZWwiLCJ0ZXh0IiwibGFiZWxXaXRoSWQiLCJmb250U2l6ZSIsImZvbnRDb2xvciIsInRleHRBbmNob3IiLCJhbGlnbm1lbnQiLCJhZGRNb3JlTGFiZWwiLCJzaWRlYmFyIiwicGFuZWxzIiwibGF5ZXIiLCJpbnRlcmFjdGlvbiIsImJhc2VtYXAiLCJyZXF1aXJlZCIsInByb3BlcnR5QmFzZWRPbiIsInN0cm9rZVdpZHRoIiwiYmFzaWMiLCJ0cmFpbExlbmd0aCIsInRyYWlsTGVuZ3RoRGVzY3JpcHRpb24iLCJuZXdMYXllciIsImVsZXZhdGlvbkJ5RGVzY3JpcHRpb24iLCJjb2xvckJ5RGVzY3JpcHRpb24iLCJhZ2dyZWdhdGVCeSIsInR5cGUiLCJwb2ludCIsImFyYyIsImxpbmUiLCJncmlkIiwiaGV4YmluIiwicG9seWdvbiIsImdlb2pzb24iLCJjbHVzdGVyIiwiaWNvbiIsImhlYXRtYXAiLCJoZXhhZ29uIiwiaGV4YWdvbmlkIiwidHJpcCIsInMyIiwibGF5ZXJWaXNDb25maWdzIiwiYW5nbGUiLCJzdHJva2VXaWR0aFJhbmdlIiwiZml4ZWRSYWRpdXMiLCJmaXhlZFJhZGl1c0Rlc2NyaXB0aW9uIiwicmFkaXVzUmFuZ2UiLCJjbHVzdGVyUmFkaXVzIiwicmFkaXVzUmFuZ2VQaXhlbHMiLCJiaWxsYm9hcmQiLCJiaWxsYm9hcmREZXNjcmlwdGlvbiIsImZhZGVUcmFpbCIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbiIsImVuYWJsZUhlaWdodFpvb21GYWN0b3IiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImhlaWdodE11bHRpcGxpZXIiLCJmaXhlZEhlaWdodCIsImZpeGVkSGVpZ2h0RGVzY3JpcHRpb24iLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJkdXBsaWNhdGVMYXllciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJzaG93QWlBc3Npc3RhbnRQYW5lbCIsImhpZGVBaUFzc2lzdGFudFBhbmVsIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsImFuaW1hdGlvbkJ5V2luZG93IiwiYW5pbWF0aW9uQnlJbmNyZW1lbnRhbCIsInNwZWVkIiwicGxheSIsInBhdXNlIiwicmVzZXQiLCJ6b29tVG9MYXllciIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJjb3B5IiwiY29waWVkIiwic2F2ZSIsImRlZmF1bHRDYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInJhdGlvVGl0bGUiLCJyYXRpb0Rlc2NyaXB0aW9uIiwicmF0aW9PcmlnaW5hbFNjcmVlbiIsInJhdGlvQ3VzdG9tIiwicmF0aW80XzMiLCJyYXRpbzE2XzkiLCJyZXNvbHV0aW9uVGl0bGUiLCJyZXNvbHV0aW9uRGVzY3JpcHRpb24iLCJtYXBMZWdlbmRUaXRsZSIsIm1hcExlZ2VuZEFkZCIsImRhdGFzZXRTdWJ0aXRsZSIsImFsbERhdGFzZXRzIiwiZGF0YVR5cGVUaXRsZSIsImRhdGFUeXBlU3VidGl0bGUiLCJmaWx0ZXJEYXRhVGl0bGUiLCJmaWx0ZXJEYXRhU3VidGl0bGUiLCJmaWx0ZXJlZERhdGEiLCJ1bmZpbHRlcmVkRGF0YSIsImZpbGVDb3VudCIsImRlbGV0ZURhdGEiLCJ3YXJuaW5nIiwicHVibGlzaFRpdGxlIiwicHVibGlzaFN1YnRpdGxlMSIsInB1Ymxpc2hTdWJ0aXRsZTIiLCJwdWJsaXNoU3VidGl0bGUzIiwicHVibGlzaFN1YnRpdGxlNCIsInB1Ymxpc2hTdWJ0aXRsZTUiLCJwdWJsaXNoU3VidGl0bGU2IiwicHVibGlzaFN1YnRpdGxlNyIsImV4YW1wbGVUb2tlbiIsInBhc3RlVGl0bGUiLCJwYXN0ZVN1YnRpdGxlMCIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJwYXN0ZVN1YnRpdGxlMyIsInBhc3RlU3VidGl0bGU0IiwibmFtaW5nVGl0bGUiLCJzaGFyZU1hcCIsInNoYXJlVXJpVGl0bGUiLCJnZW5lcmF0ZWRVcmxUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJ0aWxlc2V0Iiwic3RvcmFnZSIsInNhbXBsZSIsInJlbW90ZSIsInRyaXBJbmZvIiwidGl0bGVUYWJsZSIsImRlc2NyaXB0aW9uMSIsImNvbmNhdCIsImRlc2NyaXB0aW9uVGFibGUxIiwiZXhhbXBsZSIsImV4YW1wbGVUYWJsZSIsInBvbHlnb25JbmZvIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblRhYmxlIiwiaWNvbkluZm8iLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImdlb2NvZGVyIiwiYWRkaXRpdmUiLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsIm92ZXJsYXlCbGVuZGluZyIsInNjcmVlbiIsImRhcmtlbiIsImNvbHVtbnMiLCJsYXQiLCJsbmciLCJhbHRpdHVkZSIsInRva2VuIiwic29ydEJ5IiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImhleF9pZCIsImN1c3RvbVBhbGV0dGUiLCJzdGVwcyIsInNlcXVlbnRpYWwiLCJxdWFsaXRhdGl2ZSIsImRpdmVyZ2luZyIsImN5Y2xpY2FsIiwiYWxsIiwiY29sb3JCbGluZFNhZmUiLCJyZXZlcnNlZCIsImNvbHVtblN0YXRzIiwibWluIiwibWVhbiIsIm1heCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwic3Ryb2tlQ29sb3JTY2FsZSIsIm9yZGluYWwiLCJxdWFudGlsZSIsInF1YW50aXplIiwibGluZWFyIiwic3FydCIsImxvZyIsInRocmVzaG9sZCIsImN1c3RvbSIsImN1c3RvbU9yZGluYWwiLCJmaWxlVXBsb2FkZXIiLCJtZXNzYWdlIiwiY2hyb21lTWVzc2FnZSIsImNvbmZpZ1VwbG9hZE1lc3NhZ2UiLCJicm93c2VGaWxlcyIsInVwbG9hZGluZyIsImZpbGVOb3RTdXBwb3J0ZWQiLCJvciIsImZpZWxkU2VsZWN0b3IiLCJjbGVhckFsbCIsImZvcm1hdHRpbmciLCJjb21wYXJlIiwibW9kZUxhYmVsIiwidHlwZUxhYmVsIiwidHlwZXMiLCJhYnNvbHV0ZSIsInJlbGF0aXZlIiwibWFwUG9wb3ZlciIsInByaW1hcnkiLCJTYXZlIiwiU2hhcmUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbG9jYWxpemF0aW9uL3NyYy90cmFuc2xhdGlvbnMvamEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuLy8gQ29weXJpZ2h0IGNvbnRyaWJ1dG9ycyB0byB0aGUga2VwbGVyLmdsIHByb2plY3RcblxuaW1wb3J0IHsgTE9DQUxFUyB9IGZyb20gJy4uL2xvY2FsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BlcnR5OiB7XG4gICAgd2VpZ2h0OiAn6YeN44G/JyxcbiAgICBsYWJlbDogJ+ODqeODmeODqycsXG4gICAgZmlsbENvbG9yOiAn5aGX44KK44Gk44G244GX44Gu6ImyJyxcbiAgICBjb2xvcjogJ+iJsicsXG4gICAgY292ZXJhZ2U6ICfjgqvjg5Djg7znjocnLFxuICAgIHN0cm9rZUNvbG9yOiAn6Lyq6YOt57ea44Gu6ImyJyxcbiAgICByYWRpdXM6ICfljYrlvoQnLFxuICAgIG91dGxpbmU6ICfovKrpg63nt5onLFxuICAgIHN0cm9rZTogJ+e3muOBruWkquOBlScsXG4gICAgZGVuc2l0eTogJ+WvhuW6picsXG4gICAgaGVpZ2h0OiAn6auY44GVJyxcbiAgICBzdW06ICflkIjoqIgnLFxuICAgIHBvaW50Q291bnQ6ICfngrnjga7mlbAnXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgc2VhcmNoOiAn5qSc57SiJyxcbiAgICBzZWxlY3RGaWVsZDogJ+ODleOCo+ODvOODq+ODieOCkumBuOaKnicsXG4gICAgeUF4aXM6ICdZ6Lu4JyxcbiAgICBzZWxlY3RUeXBlOiAn44K/44Kk44OX44KS6YG45oqeJyxcbiAgICBzZWxlY3RWYWx1ZTogJ+WApOOCkumBuOaKnicsXG4gICAgZW50ZXJWYWx1ZTogJ+WApOOCkuWFpeWKmycsXG4gICAgZW1wdHk6ICfmnKrpgbjmip4nXG4gIH0sXG4gIG1pc2M6IHtcbiAgICBieTogJycsXG4gICAgdmFsdWVzSW46ICflgKTjgYzku6XkuIvjgavlkKvjgb7jgozjgosnLFxuICAgIHZhbHVlRXF1YWxzOiAn5YCk44GM5Lul5LiL44Gr562J44GX44GEJyxcbiAgICBkYXRhU291cmNlOiAn44OH44O844K/44K944O844K5JyxcbiAgICBicnVzaFJhZGl1czogJ+ODluODqeOCt+WNiuW+hCAoa20pJyxcbiAgICBlbXB0eTogJyAnXG4gIH0sXG4gIG1hcExheWVyczoge1xuICAgIHRpdGxlOiAn5Zyw5Zuz44Os44Kk44OkJyxcbiAgICBsYWJlbDogJ+ODqeODmeODqycsXG4gICAgcm9hZDogJ+mBk+i3rycsXG4gICAgYm9yZGVyOiAn5aKD55WM57eaJyxcbiAgICBidWlsZGluZzogJ+W7uueJqScsXG4gICAgd2F0ZXI6ICfmsLQnLFxuICAgIGxhbmQ6ICflnLDpnaInLFxuICAgICczZEJ1aWxkaW5nJzogJzNE5bu654mpJyxcbiAgICBiYWNrZ3JvdW5kOiAn6IOM5pmvJ1xuICB9LFxuICBwYW5lbDoge1xuICAgIHRleHQ6IHtcbiAgICAgIGxhYmVsOiAn44Op44OZ44OrJyxcbiAgICAgIGxhYmVsV2l0aElkOiAn44Op44OZ44OrIHtsYWJlbElkfScsXG4gICAgICBmb250U2l6ZTogJ+aWh+Wtl+OCteOCpOOCuicsXG4gICAgICBmb250Q29sb3I6ICfmloflrZfoibInLFxuICAgICAgdGV4dEFuY2hvcjogJ+aWh+Wtl+W3puWPsycsXG4gICAgICBhbGlnbm1lbnQ6ICfmloflrZfkuIrkuIsnLFxuICAgICAgYWRkTW9yZUxhYmVsOiAn44Op44OZ44Or44KS6L+95YqgJ1xuICAgIH1cbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIHBhbmVsczoge1xuICAgICAgbGF5ZXI6ICfjg6zjgqTjg6Tjg7wnLFxuICAgICAgZmlsdGVyOiAn44OV44Kj44Or44K/44O8JyxcbiAgICAgIGludGVyYWN0aW9uOiAn44Kk44Oz44K/44Op44Kv44K344On44OzJyxcbiAgICAgIGJhc2VtYXA6ICfjg5njg7zjgrnjg57jg4Pjg5cnXG4gICAgfVxuICB9LFxuICBsYXllcjoge1xuICAgIHJlcXVpcmVkOiAn5b+F6aCIKicsXG4gICAgcmFkaXVzOiAn5Y2K5b6EJyxcbiAgICBjb2xvcjogJ+iJsicsXG4gICAgZmlsbENvbG9yOiAn5aGX44KK44Gk44G244GX6Imy77yIZmlsbO+8iScsXG4gICAgb3V0bGluZTogJ+i8qumDree3muOBruiJsu+8iHN0cm9rZe+8iScsXG4gICAgd2VpZ2h0OiAn6YeN44G/JyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl944Gu5Z+65rqWJyxcbiAgICBjb3ZlcmFnZTogJ+OCq+ODkOODvOeOhycsXG4gICAgc3Ryb2tlOiAn57eaJyxcbiAgICBzdHJva2VXaWR0aDogJ+i8qumDree3muOBruWkquOBlScsXG4gICAgc3Ryb2tlQ29sb3I6ICfovKrpg63nt5rjga7oibInLFxuICAgIGJhc2ljOiAn5Z+65pys6Kit5a6aJyxcbiAgICB0cmFpbExlbmd0aDogJ+eXlei3oeOBrumVt+OBlScsXG4gICAgdHJhaWxMZW5ndGhEZXNjcmlwdGlvbjogJ+eXlei3oeOBjOWujOWFqOOBq+a2iOOBiOOCi+OBvuOBp+OBruenkuaVsCcsXG4gICAgbmV3TGF5ZXI6ICfmlrDjgZfjgYTjg6zjgqTjg6QnLFxuICAgIGVsZXZhdGlvbkJ5RGVzY3JpcHRpb246ICfjgqrjg5Xjga7loLTlkIjjgIHpq5jjgZXjga/ngrnjga7mlbDjgavlv5zjgZjjgabmsbrjgb7jgorjgb7jgZknLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ+OCquODleOBruWgtOWQiOOAgeiJsuOBr+eCueOBruaVsOOBq+W/nOOBmOOBpuaxuuOBvuOCiuOBvuOBmScsXG4gICAgYWdncmVnYXRlQnk6ICd7ZmllbGR944KS5Lul5LiL44Gn6ZuG6KiIOiAnLFxuICAgICczRE1vZGVsJzogJzNE44Oi44OH44OrJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnM0Tjg6Ljg4fjg6vjga7jgqrjg5fjgrfjg6fjg7MnLFxuICAgIHR5cGU6IHtcbiAgICAgIHBvaW50OiAncG9pbnQnLFxuICAgICAgYXJjOiAnYXJjJyxcbiAgICAgIGxpbmU6ICdsaW5lJyxcbiAgICAgIGdyaWQ6ICdncmlkJyxcbiAgICAgIGhleGJpbjogJ2hleGJpbicsXG4gICAgICBwb2x5Z29uOiAncG9seWdvbicsXG4gICAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgICBjbHVzdGVyOiAnY2x1c3RlcicsXG4gICAgICBpY29uOiAnaWNvbicsXG4gICAgICBoZWF0bWFwOiAnaGVhdG1hcCcsXG4gICAgICBoZXhhZ29uOiAnaGV4YWdvbicsXG4gICAgICBoZXhhZ29uaWQ6ICdIMycsXG4gICAgICB0cmlwOiAndHJpcCcsXG4gICAgICBzMjogJ1MyJyxcbiAgICAgICczZCc6ICczRCdcbiAgICB9XG4gIH0sXG4gIGxheWVyVmlzQ29uZmlnczoge1xuICAgIGFuZ2xlOiAn6KeS5bqmJyxcbiAgICBzdHJva2VXaWR0aDogJ+e3muOBruWkquOBlSAo44OU44Kv44K744OrKScsXG4gICAgc3Ryb2tlV2lkdGhSYW5nZTogJ+e3muOBruWkquOBleOBruevhOWbsicsXG4gICAgcmFkaXVzOiAn5Y2K5b6EJyxcbiAgICBmaXhlZFJhZGl1czogJ+WNiuW+hOOCkuODoeODvOODiOODq+OBp+WbuuWumicsXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ+WNiuW+hOOCkuODoeODvOODiOODq+WNmOS9jeOBrue1tuWvvuWNiuW+hOOBq+WkieaPm+OBl+OBvuOBme+8iOS+izogNSDihpIgNeODoeODvOODiOODq++8iScsXG4gICAgcmFkaXVzUmFuZ2U6ICfljYrlvoTjga7nr4Tlm7InLFxuICAgIGNsdXN0ZXJSYWRpdXM6ICfjgq/jg6njgrnjgr/jg7zjga7nr4Tlm7Jb44OU44Kv44K744OrXScsXG4gICAgcmFkaXVzUmFuZ2VQaXhlbHM6ICfljYrlvoTjga7nr4Tlm7Jb44OU44Kv44K744OrXScsXG4gICAgYmlsbGJvYXJkOiAn44OT44Or44Oc44O844OJ44Oi44O844OJJyxcbiAgICBiaWxsYm9hcmREZXNjcmlwdGlvbjogJ+OCuOOCquODoeODiOODquOCkuOCq+ODoeODqeOBq+WQkeOBkeOBvuOBmScsXG4gICAgZmFkZVRyYWlsOiAn44OV44Kn44O844K444Oz44Kw44OR44K5JyxcbiAgICBvcGFjaXR5OiAn5LiN6YCP5piO5bqmJyxcbiAgICBjb3ZlcmFnZTogJ+OCq+ODkOODvOeOhycsXG4gICAgb3V0bGluZTogJ+i8qumDree3micsXG4gICAgY29sb3JSYW5nZTogJ+iJsuOBruevhOWbsicsXG4gICAgc3Ryb2tlOiAn57eaJyxcbiAgICBzdHJva2VDb2xvcjogJ+i8qumDree3muOBruiJsicsXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ+i8qumDree3muOBruiJsuOBruevhOWbsicsXG4gICAgdGFyZ2V0Q29sb3I6ICdUYXJnZXTjga7oibInLFxuICAgIGNvbG9yQWdncmVnYXRpb246ICfoibLjga7pm4boqIgnLFxuICAgIGhlaWdodEFnZ3JlZ2F0aW9uOiAn6auY44GV44Gu6ZuG6KiIJyxcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICfop6Plg4/luqbjga7nr4Tlm7InLFxuICAgIHNpemVTY2FsZTogJ+OCteOCpOOCuuOBruOCueOCseODvOODqycsXG4gICAgd29ybGRVbml0U2l6ZTogJ1dvcmxkIFVuaXQgU2l6ZScsXG4gICAgZWxldmF0aW9uU2NhbGU6ICfmqJnpq5jjga7jgrnjgrHjg7zjg6snLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3I6ICfmqJnpq5jjgrrjg7zjg6Dkv4LmlbDjgpLkvb/nlKjjgZnjgosnLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbjogJ+ePvuWcqOOBruOCuuODvOODoOeOh+OBq+WfuuOBpeOBhOOBpumrmOOBlS/mqJnpq5jjgpLoqr/mlbTjgZfjgb7jgZknLFxuICAgIGVuYWJsZUhlaWdodFpvb21GYWN0b3I6ICfpq5jjgZXjgrrjg7zjg6Dkv4LmlbDjgpLkvb/nlKjjgZnjgosnLFxuICAgIGhlaWdodFNjYWxlOiAn6auY44GV44Gu44K544Kx44O844OrJyxcbiAgICBjb3ZlcmFnZVJhbmdlOiAn44Kr44OQ44O8546H44Gu56+E5ZuyJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAn6auY57K+5bqm44Os44Oz44OA44Oq44Oz44KwJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICfpq5jnsr7luqbjgavjgZnjgovjgajpgJ/luqbjga/kvY7kuIvjgZfjgb7jgZknLFxuICAgIGhlaWdodDogJ+mrmOOBlScsXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246ICczROODk+ODpeODvOOBq+WIh+OCiuabv+OBiOOCi+OBq+OBr+eUu+mdouWPs+S4iuOBruODnOOCv+ODs+OCkuOCr+ODquODg+OCr+OBl+OBvuOBmScsXG4gICAgZmlsbDogJ+Whl+OCiuOBpOOBtuOBlycsXG4gICAgZW5hYmxlUG9seWdvbkhlaWdodDogJ+ODneODquOCtOODs+OBrumrmOOBleOCkuacieWKueOBq+OBmeOCiycsXG4gICAgc2hvd1dpcmVmcmFtZTogJ+ODr+OCpOODpOODvOODleODrOODvOODoOOCkuihqOekuicsXG4gICAgd2VpZ2h0SW50ZW5zaXR5OiAn6YeN44G/44Gl44GR44Gu5by344GVJyxcbiAgICB6b29tU2NhbGU6ICfjgrrjg7zjg6Djga7jgrnjgrHjg7zjg6snLFxuICAgIGhlaWdodFJhbmdlOiAn6auY44GV44Gu56+E5ZuyJyxcbiAgICBoZWlnaHRNdWx0aXBsaWVyOiAn6auY44GV5LmX5pWwJyxcbiAgICBmaXhlZEhlaWdodDogJ+WbuuWumumrmOOBlScsXG4gICAgZml4ZWRIZWlnaHREZXNjcmlwdGlvbjogJ+mrmOOBleOCkuWkieabtOOBm+OBmuOBq+S9v+eUqOOBmeOCiydcbiAgfSxcbiAgbGF5ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRGF0YTogJ+ODh+ODvOOCv+i/veWKoCcsXG4gICAgYWRkTGF5ZXI6ICfjg6zjgqTjg6Tov73liqAnLFxuICAgIGxheWVyQmxlbmRpbmc6ICfjg6zjgqTjg6Tjga7jg5bjg6zjg7Pjg4knXG4gIH0sXG4gIG1hcE1hbmFnZXI6IHtcbiAgICBtYXBTdHlsZTogJ+ODnuODg+ODl+OCueOCv+OCpOODqycsXG4gICAgYWRkTWFwU3R5bGU6ICfjg57jg4Pjg5fjgrnjgr/jgqTjg6vov73liqAnLFxuICAgICczZEJ1aWxkaW5nQ29sb3InOiAnM0Tlu7rnianjga7oibInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ+iDjOaZr+iJsidcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAn6YG45oqe44GV44KM44Gf44OV44Kj44O844Or44OJ44Gr5Z+644Gl44GE44Gme3Byb3BlcnR5feOCkuioiOeul+OBl+OBvuOBmScsXG4gICAgaG93VG86ICfkvb/jgYTmlrknXG4gIH0sXG4gIGZpbHRlck1hbmFnZXI6IHtcbiAgICBhZGRGaWx0ZXI6ICfjg5XjgqPjg6vjgr/jg7zov73liqAnXG4gIH0sXG4gIGRhdGFzZXRUaXRsZToge1xuICAgIHNob3dEYXRhVGFibGU6ICfjg4fjg7zjgr/ooajjgpLooajnpLonLFxuICAgIHJlbW92ZURhdGFzZXQ6ICfjg4fjg7zjgr/jgrvjg4Pjg4jjgpLliYrpmaQnXG4gIH0sXG4gIGRhdGFzZXRJbmZvOiB7XG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR96KGMJ1xuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGlkZUxheWVyOiAn44Os44Kk44Ok44KS6Z2e6KGo56S6JyxcbiAgICBzaG93TGF5ZXI6ICfjg6zjgqTjg6TjgpLooajnpLonLFxuICAgIGhpZGVGZWF0dXJlOiAn44OV44Kj44O844OB44Oj44O844KS6Z2e6KGo56S6JyxcbiAgICBzaG93RmVhdHVyZTogJ+ODleOCo+ODvOODgeODo+ODvOOCkuihqOekuicsXG4gICAgaGlkZTogJ+mdnuihqOekuuOBq+OBmeOCiycsXG4gICAgc2hvdzogJ+ihqOekuuOBmeOCiycsXG4gICAgcmVtb3ZlTGF5ZXI6ICfjg6zjgqTjg6TjgpLliYrpmaQnLFxuICAgIGR1cGxpY2F0ZUxheWVyOiAn44Os44Kk44Ok44KS6KSH6KO9JyxcbiAgICBsYXllclNldHRpbmdzOiAn44Os44Kk44Ok6Kit5a6aJyxcbiAgICBjbG9zZVBhbmVsOiAn44GT44Gu44OR44ON44Or44KS6ZaJ44GY44KLJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAn44OH44Ol44Ki44Or44OT44Ol44O844Gr5YiH44KK5pu/44GIJyxcbiAgICBzaG93TGVnZW5kOiAn5Yeh5L6L44KS6KGo56S6JyxcbiAgICBkaXNhYmxlM0RNYXA6ICczROWcsOWbs+OCkueEoeWKueWMlicsXG4gICAgRHJhd09uTWFwOiAn5Zyw5Zuz5LiK44Gr5Zuz5b2i44KS5o+P55S7JyxcbiAgICBzZWxlY3RMb2NhbGU6ICfoqIDoqp7oqK3lrponLFxuICAgIHNob3dBaUFzc2lzdGFudFBhbmVsOiAnQUkg5Yqp5omL44OR44ON44Or44KS6KGo56S6JyxcbiAgICBoaWRlQWlBc3Npc3RhbnRQYW5lbDogJ0FJIOWKqeaJi+ODkeODjeODq+OCkumdnuihqOekuicsXG4gICAgaGlkZUxheWVyUGFuZWw6ICfjg6zjgqTjg6Tjg5Hjg43jg6vjgpLpnZ7ooajnpLonLFxuICAgIHNob3dMYXllclBhbmVsOiAn44Os44Kk44Ok44OR44ON44Or44KS6KGo56S6JyxcbiAgICBtb3ZlVG9Ub3A6ICfjg4fjg7zjgr/jg6zjgqTjg6Tjga7miYvliY3jgavnp7vli5UnLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ+ODmeODvOOCueODnuODg+ODl+OBruOCueOCv+OCpOODq+OCkumBuOaKnicsXG4gICAgZGVsZXRlOiAn5YmK6ZmkJyxcbiAgICB0aW1lUGxheWJhY2s6ICfmmYLns7vliJfjgaflho3nlJ8nLFxuICAgIGNsb3VkU3RvcmFnZTogJ+OCr+ODqeOCpuODieOCueODiOODrOODvOOCuCcsXG4gICAgJzNETWFwJzogJzNE5Zyw5ZuzJyxcbiAgICBhbmltYXRpb25CeVdpbmRvdzogJ+aZgumWk+aeoOOCkuenu+WLlScsXG4gICAgYW5pbWF0aW9uQnlJbmNyZW1lbnRhbDogJ+aZgumWk+aeoOOCkuWil+WKoCcsXG4gICAgc3BlZWQ6ICfpgJ/luqYnLFxuICAgIHBsYXk6ICflho3nlJ8nLFxuICAgIHBhdXNlOiAn5LiA5pmC5YGc5q2iJyxcbiAgICByZXNldDogJ+ODquOCu+ODg+ODiCcsXG4gICAgem9vbVRvTGF5ZXI6ICfjg6zjgqTjg6TlhajkvZPjgpLooajnpLonXG4gIH0sXG4gIHRvb2xiYXI6IHtcbiAgICBleHBvcnRJbWFnZTogJ+eUu+WDj+OCkuWHuuWKmycsXG4gICAgZXhwb3J0RGF0YTogJ+ODh+ODvOOCv+OCkuWHuuWKmycsXG4gICAgZXhwb3J0TWFwOiAn5Zyw5Zuz44KS5Ye65YqbJyxcbiAgICBzaGFyZU1hcFVSTDogJ+WcsOWbs+OBrlVSTOOCkuWFseaciScsXG4gICAgc2F2ZU1hcDogJ+WcsOWbs+OCkuS/neWtmCcsXG4gICAgc2VsZWN0OiAn6YG45oqeJyxcbiAgICBwb2x5Z29uOiAn44Od44Oq44K044OzJyxcbiAgICByZWN0YW5nbGU6ICfplbfmlrnlvaInLFxuICAgIGhpZGU6ICfpnZ7ooajnpLonLFxuICAgIHNob3c6ICfooajnpLonLFxuICAgIC4uLkxPQ0FMRVNcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ+ODh+ODvOOCv+OCu+ODg+ODiOOCkuWJiumZpCcsXG4gICAgICBhZGREYXRhVG9NYXA6ICflnLDlm7Pjgavjg4fjg7zjgr/jgpLov73liqAnLFxuICAgICAgZXhwb3J0SW1hZ2U6ICfnlLvlg4/jgpLlh7rlipsnLFxuICAgICAgZXhwb3J0RGF0YTogJ+ODh+ODvOOCv+OCkuWHuuWKmycsXG4gICAgICBleHBvcnRNYXA6ICflnLDlm7PjgpLlh7rlipsnLFxuICAgICAgYWRkQ3VzdG9tTWFwYm94U3R5bGU6ICfjgqvjgrnjgr/jg6Djg57jg4Pjg5fjgrnjgr/jgqTjg6vjgpLov73liqAnLFxuICAgICAgc2F2ZU1hcDogJ+WcsOWbs+OCkuS/neWtmCcsXG4gICAgICBzaGFyZVVSTDogJ1VSTOOCkuWFseaciSdcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZGVsZXRlOiAn5YmK6ZmkJyxcbiAgICAgIGRvd25sb2FkOiAn44OA44Km44Oz44Ot44O844OJJyxcbiAgICAgIGV4cG9ydDogJ+WHuuWKmycsXG4gICAgICBhZGRTdHlsZTogJ+OCueOCv+OCpOODq+i/veWKoCcsXG4gICAgICBjb3B5OiAn44Kz44OU44O8JyxcbiAgICAgIGNvcGllZDogJ+OCs+ODlOODvOOBl+OBvuOBl+OBnycsXG4gICAgICBzYXZlOiAn5L+d5a2YJyxcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICfnorroqo0nXG4gICAgfSxcbiAgICBleHBvcnRJbWFnZToge1xuICAgICAgcmF0aW9UaXRsZTogJ+e4puaoquavlCcsXG4gICAgICByYXRpb0Rlc2NyaXB0aW9uOiAn55So6YCU44Gr6YGp44GX44Gf57im5qiq5q+U44KS6YG45oqe44GX44G+44GZ44CCJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICflhYPjga7jgrnjgq/jg6rjg7zjg7PjgrXjgqTjgronLFxuICAgICAgcmF0aW9DdXN0b206ICfjgqvjgrnjgr/jg6AnLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICfop6Plg4/luqYnLFxuICAgICAgcmVzb2x1dGlvbkRlc2NyaXB0aW9uOiAn5Y2w5Yi344Gr44Gv6auY6Kej5YOP5bqm44GM6YGp44GX44Gm44GE44G+44GZ44CCJyxcbiAgICAgIG1hcExlZ2VuZFRpdGxlOiAn5Zyw5Zuz44Gu5Yeh5L6LJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ+WcsOWbs+OBq+WIpOS+i+OCkui/veWKoCdcbiAgICB9LFxuICAgIGV4cG9ydERhdGE6IHtcbiAgICAgIGRhdGFzZXRUaXRsZTogJ+ODh+ODvOOCv+OCu+ODg+ODiCcsXG4gICAgICBkYXRhc2V0U3VidGl0bGU6ICfjgqjjgq/jgrnjg53jg7zjg4jjgZfjgZ/jgYTjg4fjg7zjgr/jgrvjg4Pjg4jjgpLpgbjmip7jgZfjgb7jgZknLFxuICAgICAgYWxsRGF0YXNldHM6ICflhajjgaYnLFxuICAgICAgZGF0YVR5cGVUaXRsZTogJ+ODh+ODvOOCv+W9ouW8jycsXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAn44Ko44Kv44K544Od44O844OI44GX44Gf44GE44OH44O844K/5b2i5byP44KS6YG45oqe44GX44G+44GZJyxcbiAgICAgIGZpbHRlckRhdGFUaXRsZTogJ+ODh+ODvOOCv+OBruODleOCo+ODq+OCvycsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6XG4gICAgICAgICflhYPjg4fjg7zjgr/vvIjjg5XjgqPjg6vjgr/jgarjgZfvvInjgajjg5XjgqPjg6vjgr/muIjjg4fjg7zjgr/jga7jganjgaHjgonjgpLjgqjjgq/jgrnjg53jg7zjg4jjgZnjgovjgYvpgbjmip7jgZfjgb7jgZknLFxuICAgICAgZmlsdGVyZWREYXRhOiAn44OV44Kj44Or44K/5riI44OH44O844K/JyxcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAn5YWD44OH44O844K/JyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR95YCL44Gu44OV44Kh44Kk44OrJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50feihjCdcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6ICfjgZPjga7jg4fjg7zjgr/jgrvjg4Pjg4jjgpLliYrpmaTjgZfjgb7jgZnjgIJ7bGVuZ3RofeWAi+OBruODrOOCpOODpOOBq+W9semfv+OBl+OBvuOBmeOAgidcbiAgICB9LFxuICAgIGFkZFN0eWxlOiB7XG4gICAgICBwdWJsaXNoVGl0bGU6XG4gICAgICAgICcyLiDjgrnjg4bjg4Pjg5cx44GnTWFwYm9444Gu44K544K/44Kk44OrVVJM44KS5oyH5a6a44GX44Gf5aC05ZCI44CBTWFwYm9444Gn44K544K/44Kk44Or44KS5YWs6ZaL44GZ44KL44GL44CB44Ki44Kv44K744K544OI44O844Kv44Oz44KS5Lul5LiL44Gr5YWl5Yqb44GX44G+44GZ77yI44Kq44OX44K344On44Oz77yJJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTE6ICfni6zoh6rjga7jgrnjgr/jgqTjg6vjgpInLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMjogJ+OBp+S9nOaIkOOBl+OAgScsXG4gICAgICBwdWJsaXNoU3VidGl0bGUzOiAn5YWs6ZaLJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICfjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZknLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ+mdnuWFrOmWi+OBruOCueOCv+OCpOODq+OCkuS9v+eUqOOBmeOCi+OBq+OBr+OAgeiHqui6q+OBricsXG4gICAgICBwdWJsaXNoU3VidGl0bGU2OiAn44Ki44Kv44K744K544OI44O844Kv44OzJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTc6XG4gICAgICAgICfjgpLjgZPjgZPjgavlhaXlipvjgZfjgb7jgZnjgIIqa2VwbGVyLmds44Gv44Kv44Op44Kk44Ki44Oz44OI5LiK44Gn5YuV5L2c44GZ44KL44Gf44KB44CB44OH44O844K/44Gv6Ieq6Lqr44Gu44OW44Op44Km44K244Gr5L+d5oyB44GV44KM44G+44GZ44CCJyxcbiAgICAgIGV4YW1wbGVUb2tlbjogJ+S+iykgcGsuYWJjZGVmZy54eHh4eHgnLFxuICAgICAgcGFzdGVUaXRsZTogJzEuIOOCueOCv+OCpOODq+OBrlVSTOOCkuODmuODvOOCueODiCcsXG4gICAgICBwYXN0ZVN1YnRpdGxlMDogJ+OCueOCv+OCpOODq+OBrlVSTOOBr01hcGJveOOBricsXG4gICAgICBwYXN0ZVN1YnRpdGxlMTogJ1doYXQgaXMgYScsXG4gICAgICBwYXN0ZVN1YnRpdGxlMjogJ+OCueOCv+OCpOODq1VSTCcsXG4gICAgICBwYXN0ZVN1YnRpdGxlMzogJ+OCkuaMh+WumuOBmeOCi+OBi+OAgU1hcGJveCBHTOOBruS7leanmOOBq+ayv+OBo+OBn3N0eWxlLmpzb27jga5VUkzjgpLmjIflrprjgZfjgb7jgZnvvJonLFxuICAgICAgcGFzdGVTdWJ0aXRsZTQ6ICdNYXBib3ggR0wg44K544K/44Kk44Or5LuV5qeYJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4g44K544K/44Kk44Or44Gu5ZCN56ew44KS6Kit5a6aJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHRpdGxlOiAn5Zyw5Zuz44KS5YWx5pyJJyxcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICflhbHmnIlVUkzjgpLkvZzmiJAnLFxuICAgICAgZ2VuZXJhdGVkVXJsVGl0bGU6ICflhbHmnIlVUkwnLFxuICAgICAgc2hhcmVVcmlTdWJ0aXRsZTogJ+WFseacieeUqOOBq+WcsOWbs+OBrlVSTOOCkueUn+aIkCcsXG4gICAgICBjbG91ZFRpdGxlOiAn44Kv44Op44Km44OJ44K544OI44Os44O844K4JyxcbiAgICAgIGNsb3VkU3VidGl0bGU6ICfjg63jgrDjgqTjg7PjgZfjgablnLDlm7Pjg4fjg7zjgr/jgpLlgIvkurrnlKjjgq/jg6njgqbjg4njgrnjg4jjg6zjg7zjgrjjgavjgqLjg4Pjg5fjg63jg7zjg4knLFxuICAgICAgc2hhcmVEaXNjbGFpbWVyOlxuICAgICAgICAna2VwbGVyLmds44Gv5L2c5oiQ44GX44Gf5Zyw5Zuz44KS44GC44Gq44Gf44Gu44Kv44Op44Km44OJ44K544OI44Os44O844K444Gr5L+d5a2Y44GZ44KL44Gf44KB44CB44Gd44GuVVJM44KS55+l44Gj44Gm44GE44KL5Lq644Gu44G/44GM5Zyw5Zuz44KE44Gd44Gu44OH44O844K/44Gr44Ki44Kv44K744K55Y+v6IO944Gn44GZ44CCJyArXG4gICAgICAgICfjgq/jg6njgqbjg4njgrnjg4jjg6zjg7zjgrjjga7jgqLjgqvjgqbjg7Pjg4jjgafjgYTjgaTjgafjgoLjg4fjg7zjgr/jg5XjgqHjgqTjg6vjgpLnt6jpm4Yv5YmK6Zmk44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCJyxcbiAgICAgIGdvdG9QYWdlOiAnS2VwbGVyLmds44Gue2N1cnJlbnRQcm92aWRlcn3jg5rjg7zjgrjjgavnp7vli5UnXG4gICAgfSxcbiAgICBzdGF0dXNQYW5lbDoge1xuICAgICAgbWFwVXBsb2FkaW5nOiAn5Zyw5Zuz44KS44Ki44OD44OX44Ot44O844OJ5LitJyxcbiAgICAgIGVycm9yOiAn44Ko44Op44O8J1xuICAgIH0sXG4gICAgc2F2ZU1hcDoge1xuICAgICAgdGl0bGU6ICfjgq/jg6njgqbjg4njgrnjg4jjg6zjg7zjgrgnLFxuICAgICAgc3VidGl0bGU6ICcgJ1xuICAgIH0sXG4gICAgZXhwb3J0TWFwOiB7XG4gICAgICBmb3JtYXRUaXRsZTogJ+WcsOWbs+OBruW9ouW8jycsXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ+WcsOWbs+OBruWHuuWKm+W9ouW8j+OCkumBuOaKnuOBl+OBvuOBmScsXG4gICAgICBodG1sOiB7XG4gICAgICAgIHNlbGVjdGlvbjogJ+WcsOWbs+OCkuOCpOODs+OCv+ODqeOCr+ODhuOCo+ODluOBqkhUTUzjg5XjgqHjgqTjg6vjgajjgZfjgablh7rlipvjgZfjgb7jgZnjgIInLFxuICAgICAgICB0b2tlblRpdGxlOiAnTWFwYm9444Ki44Kv44K744K544OI44O844Kv44OzJyxcbiAgICAgICAgdG9rZW5TdWJ0aXRsZTogJ0hUTUzjg5XjgqHjgqTjg6vjgafoh6rliIbjga5NYXBib3jjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgpLkvb/nlKjjgZfjgb7jgZkgKOOCquODl+OCt+ODp+ODsyknLFxuICAgICAgICB0b2tlblBsYWNlaG9sZGVyOiAn6Ieq5YiG44GuTWFwYm9444Ki44Kv44K744K544OI44O844Kv44Oz44KS44GT44GT44Gr6LK844KK5LuY44GRJyxcbiAgICAgICAgdG9rZW5NaXN1c2VXYXJuaW5nOlxuICAgICAgICAgICcqIOiHquWIhuOBruODiOODvOOCr+ODs+OCkuS9v+eUqOOBl+OBquOBhOWgtOWQiOOBr+OAgeODh+ODleOCqeODq+ODiOOBruODiOODvOOCr+ODs+OBjOaCqueUqOmYsuatouOBruOBn+OCgeOBq+abtOaWsOOBleOCjOOAgeWcsOWbs+OBjOihqOekuuOBleOCjOOBquOBj+OBquOCi+WPr+iDveaAp+OBjOOBguOCiuOBvuOBmeOAgiAgJyxcbiAgICAgICAgdG9rZW5EaXNjbGFpbWVyOiAnTWFwYm9444Gu44OI44O844Kv44Oz44Gv5LiL6KiY44Gu5pa55rOV44Gr5b6T44Gj44Gm5b6M44GL44KJ5aSJ5pu044GZ44KL44GT44Go44KC5Y+v6IO944Gn44GZ77yaJyxcbiAgICAgICAgdG9rZW5VcGRhdGU6ICfml6LlrZjjga7lnLDlm7Pjga7jg4jjg7zjgq/jg7PjgpLmm7TmlrDjgZnjgovmlrnms5UnLFxuICAgICAgICBtb2RlVGl0bGU6ICflnLDlm7Pjga7jg6Ljg7zjg4knLFxuICAgICAgICBtb2RlU3VidGl0bGUxOiAn5Zyw5Zuz44Gu44Oi44O844OJ44KS6YG45oqe44GX44G+44GZ44CC6Kmz57Sw44GvJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMjogJ+OBk+OBoeOCiScsXG4gICAgICAgIG1vZGVEZXNjcmlwdGlvbjogJ+ODpuODvOOCtuODvOOBq+WcsOWbs+OBrnttb2RlfeOCkuioseWPrycsXG4gICAgICAgIHJlYWQ6ICfplrLopqcnLFxuICAgICAgICBlZGl0OiAn57eo6ZuGJ1xuICAgICAgfSxcbiAgICAgIGpzb246IHtcbiAgICAgICAgY29uZmlnVGl0bGU6ICflnLDlm7Pjga7oqK3lrponLFxuICAgICAgICBjb25maWdEaXNjbGFpbWVyOlxuICAgICAgICAgICflnLDlm7Pjga7oqK3lrprjga9qc29u44OV44Kh44Kk44Or44Gr5Y+O44KB44KJ44KM44G+44GZ44CC5LuW44Gu44Ki44OX44Oq44Kx44O844K344On44Oz44Gna2VwbGVyLmds44KS5L2/55So44GZ44KL5aC05ZCI44CB44GT44Gu6Kit5a6a44KS44Kz44OU44O844Oa44O844K544OI44GZ44KL44GT44Go44GM5Y+v6IO944Gn44GZ77yaJyxcbiAgICAgICAgc2VsZWN0aW9uOlxuICAgICAgICAgICfnj77lnKjjga7lnLDlm7Pjg4fjg7zjgr/jgajoqK3lrprjgpLljZjkuIDjga5qc29u44OV44Kh44Kk44Or44Gr5Ye65Yqb44GX44G+44GZ44CC44GT44Gu44OV44Kh44Kk44Or44KSa2VwbGVyLmds44Gr44Ki44OD44OX44Ot44O844OJ44GZ44KL44GT44Go44Gn44CB5ZCM44GY5Zyw5Zuz44KS5b6M44GL44KJ6ZaL44GP44GT44Go44GM5Y+v6IO944Gr44Gq44KK44G+44GZ44CCJyxcbiAgICAgICAgZGlzY2xhaW1lcjpcbiAgICAgICAgICAnKiDlnLDlm7Pjga7oqK3lrprjga/oqq3jgb/ovrzjgb7jgozjgZ/jg4fjg7zjgr/jgrvjg4Pjg4jjgajjgrvjg4Pjg4jjgavjgarjgaPjgabjgYTjgb7jgZnjgILigJhkYXRhSWTigJnjgavjgojjgaPjgabjg6zjgqTjg6TjgIHjg5XjgqPjg6vjgr/jg7zjgIHjg4Tjg7zjg6vjg4Hjg4Pjg5fjga/nibnlrprjga7jg4fjg7zjgr/jgrvjg4Pjg4jjgavntJDjgaXjgZHjgonjgozjgb7jgZnjgIIgJyArXG4gICAgICAgICAgJ+OBk+OBruioreWumuOCkmFkZERhdGFUb01hcOOBq+a4oeOBmemam+OBr+OAgeODh+ODvOOCv+OCu+ODg+ODiElE44GM44GT44Gu6Kit5a6a5YaF44GuZGF0YUlk44Go5LiA6Ie044GZ44KL44KI44GG44Gr44GX44Gm44GP44Gg44GV44GE44CCJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZGluZ0RpYWxvZzoge1xuICAgICAgbG9hZGluZzogJ+ODreODvOODieS4rS4uLidcbiAgICB9LFxuICAgIGxvYWREYXRhOiB7XG4gICAgICB1cGxvYWQ6ICfjg5XjgqHjgqTjg6vjgpLjg63jg7zjg4knLFxuICAgICAgdGlsZXNldDogJ+OCv+OCpOODq+OCu+ODg+ODiCcsXG4gICAgICBzdG9yYWdlOiAn44K544OI44Os44O844K444GL44KJ44Ot44O844OJJyxcbiAgICAgIHNhbXBsZTogJ+OCteODs+ODl+ODq+ODh+ODvOOCv+OCkuippuOBmScsXG4gICAgICByZW1vdGU6ICdVUkwg44Gn5Zyw5Zuz44KS6Kqt44G/6L6844KAJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAn56e75YuV44Ki44OL44Oh44O844K344On44Oz44KS5pyJ5Yq544Gr44GZ44KL5pa55rOVJyxcbiAgICAgIHRpdGxlVGFibGU6ICfjg53jgqTjg7Pjg4jjga7jg6rjgrnjg4jjgYvjgonnp7vli5XjgqLjg4vjg6Hjg7zjgrfjg6fjg7MnLFxuICAgICAgZGVzY3JpcHRpb24xOiBg57WM6Lev44KS44Ki44OL44Oh44O844K344On44Oz5YyW44GZ44KL44Gr44Gv44CBZ2VvSlNPTuODh+ODvOOCv+OBr2ZlYXR1cmXjga5nZW9tZXRyeeOBqOOBl+OBpiBcXGBMaW5lU3RyaW5nXFxgIOOCkuWQq+OCgOW/heimgeOBjOOBguOCiuOBvuOBmeOAguOBvuOBn+OAgUxpbmVTdHJpbmfjga7luqfmqJnjga8044Gk44Gu6KaB57Sg44KSXG4keydgYGBqc29uJ31cblvntYzluqYsIOe3r+W6piwg5qiZ6auYLCB0aW1lc3RhbXBdXG4keydgYGAnfVxu44Go44GE44GG5b2i5byP77yIM+OBpOebruOBjOaomemrmOOAgTTjgaTnm67jgYzjgr/jgqTjg6Djgrnjgr/jg7Pjg5fvvInjgafkv53mjIHjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgILjgr/jgqTjg6Djgrnjgr/jg7Pjg5fjga7lvaLlvI/jga/jgIEgVU5JWOaZgumWk+OBruenkuWNmOS9je+8iOS+izogXFxgMTU2NDE4NDM2M1xcYO+8ieOBvuOBn+OBr+ODn+ODquenkuWNmOS9je+8iOS+izogXFxgMTU2NDE4NDM2MzAwMFxcYO+8ieOBjOacieWKueOBp+OBmeOAgmAsXG4gICAgICBkZXNjcmlwdGlvblRhYmxlMTpcbiAgICAgICAgJ+enu+WLleOCouODi+ODoeODvOOCt+ODp+ODs++8iFRyaXBz77yJ44Gv44CB57ev5bqm44CB57WM5bqm44CB44K/44Kk44Og44K544K/44Oz44OX77yI44K944O844OI55So77yJ44CBSUTvvIjjgrDjg6vjg7zjg5fljJbnlKjvvInjgpLlkKvjgoDjg53jgqTjg7Pjg4jjg6rjgrnjg4jjgYvjgonkvZzmiJDjgafjgY3jgb7jgZnjgIInLFxuICAgICAgZXhhbXBsZTogJ0dlb0pTT07jga7kvosnLFxuICAgICAgZXhhbXBsZVRhYmxlOiAnQ1NW44Gu5L6LJ1xuICAgIH0sXG4gICAgcG9seWdvbkluZm86IHtcbiAgICAgIHRpdGxlOiAnR2VvSlNPTuOBi+OCieODneODquOCtOODs+ODrOOCpOODpOOCkuS9nOaIkCcsXG4gICAgICB0aXRsZVRhYmxlOiAn44Od44Kk44Oz44OI44GL44KJ44OR44K577yI57ea77yJ44KS5L2c5oiQJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBg44Od44Oq44K044Oz44Gv5Lul5LiL44Gu5pa55rOV44Gn5L2c5oiQ44Gn44GN44G+44GZ77yaXG5fXzEuIEdlb0pTT05fX1xuX18yLiDjgrjjgqrjg6Hjg4jjg6rliJfjgpLlkKvjgoBDU1ZfX1xuXG4jIyMgMS4gR2VvSlNPTuODleOCoeOCpOODq+OBi+OCieODneODquOCtOODs+OCkuS9nOaIkFxuXG5GZWF0dXJlQ29sbGVjdGlvbuOCkuWQq+OCgEdlb0pTT07jg5XjgqHjgqTjg6vjgpLjgqLjg4Pjg5fjg63jg7zjg4njgZnjgovjgajjgIHjg53jg6rjgrTjg7Pjg6zjgqTjg6TjgYzoh6rli5XnmoTjgavkvZzmiJDjgZXjgozjgb7jgZnjgIJcblxuR2VvSlNPTuOBruS+i1xuJHsnYGBganNvbid9XG57XG4gIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gIFwiZmVhdHVyZXNcIjogW3tcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbMTAyLjAsIDAuNV1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwicHJvcDBcIjogXCJ2YWx1ZTBcIlxuICAgICAgfVxuICB9LCB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gICAgICAgICAgICAgIFsxMDIuMCwgMC4wXSxcbiAgICAgICAgICAgICAgWzEwMy4wLCAxLjBdLFxuICAgICAgICAgICAgICBbMTA0LjAsIDAuMF0sXG4gICAgICAgICAgICAgIFsxMDUuMCwgMS4wXVxuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInByb3AwXCI6IFwidmFsdWUwXCJcbiAgICAgIH1cbiAgfV1cbn1cbiR7J2BgYCd9XG5cbiMjIyAyLiBDU1bjg4bjg7zjg5bjg6vlhoXjga7jgrjjgqrjg6Hjg4jjg6rliJfjgYvjgonjg53jg6rjgrTjg7PjgpLkvZzmiJBcbuOCuOOCquODoeODiOODqu+8iOODneODquOCtOODs+OAgeODneOCpOODs+ODiOOAgUxpbmVTdHJpbmfjgarjganvvInjga/jgIFcXGBHZW9KU09OXFxgIOOBvuOBn+OBryBcXGBXS1RcXGAg5b2i5byP44Gu5paH5a2X5YiX44Go44GX44GmQ1NW44Gr5Z+L44KB6L6844KA44GT44Go44GM44Gn44GN44G+44GZ44CCXG5cbiMjIyMgMi4xIFxcYEdlb0pTT05cXGAg5paH5a2X5YiXXG5cXGBHZW9KU09OXFxgIOaWh+Wtl+WIl+OCkuWQq+OCgCBkYXRhLmNzdiDjga7kvotcbiR7J2BgYHR4dCd9XG5pZCxfZ2VvanNvblxuMSxcIntcIlwidHlwZVwiXCI6XCJcIlBvbHlnb25cIlwiLFwiXCJjb29yZGluYXRlc1wiXCI6W1tbLTc0LjE1ODQ5MSw0MC44MzU5NDddLFstNzQuMTU3OTE0LDQwLjgzOTAyXV1dfVwiXG4keydgYGAnfVxuXG4jIyMjIDIuMiBcXGBXS1RcXGAg5paH5a2X5YiXXG5cXGBXS1RcXGAg5paH5a2X5YiX44KS5ZCr44KAIGRhdGEuY3N2IOOBruS+i1xuW1dlbGwtS25vd24gVGV4dCAoV0tUKV0oaHR0cHM6Ly9kZXYubXlzcWwuY29tL2RvYy9yZWZtYW4vNS43L2VuL2dpcy1kYXRhLWZvcm1hdHMuaHRtbCNnaXMtd2t0LWZvcm1hdCkg44Gv44CB44K444Kq44Oh44OI44Oq44OH44O844K/44KSQVNDSUnlvaLlvI/jgafkuqTmj5vjgZnjgovjgZ/jgoHjgavoqK3oqIjjgZXjgozjgZ/ooajnj77lvaLlvI/jgafjgZnjgIJcblxuV0tU44KS5ZCr44KAIGRhdGEuY3N2IOOBruS+i1xuJHsnYGBgdHh0J31cbmlkLF9nZW9qc29uXG4xLFwiUE9MWUdPTigoMCAwLDEwIDAsMTAgMTAsMCAxMCwwIDApLCg1IDUsNyA1LDcgNyw1IDcsIDUgNSkpXCJcbiR7J2BgYCd9XG5gLFxuICAgICAgZGVzY3JpcHRpb25UYWJsZTogYOODkeOCue+8iOe3mu+8ieOBr+OAgee3r+W6pue1jOW6puOBruODneOCpOODs+ODiOODquOCueODiOOCkue1kOWQiOOBmeOCi+OBk+OBqOOBp+S9nOaIkOOBleOCjOOBvuOBmeOAguOCpOODs+ODh+ODg+OCr+OCueODleOCo+ODvOODq+ODie+8iOS+i++8muOCv+OCpOODoOOCueOCv+ODs+ODl++8ieOBp+OCveODvOODiOOBl+OAgeODpuODi+ODvOOCr0lE44Gn44Kw44Or44O844OX5YyW44GX44G+44GZ44CCXG5cbiAgIyMjIOODrOOCpOODpOOBruWIl+ioreWumjpcbiAgLSAqKmlkKio6IC0gKuW/hemgiCombmJzcDstIOODneOCpOODs+ODiOOCkuOCsOODq+ODvOODl+WMluOBmeOCi+OBn+OCgeOBq+S9v+eUqOOBleOCjOOCiyBcXGBpZFxcYCDliJfjgILlkIzjgZhJROOCkuaMgeOBpOODneOCpOODs+ODiOOBjOe1kOWQiOOBleOCjOOBpjHjgaTjga7jg5Hjgrnjgavjgarjgorjgb7jgZnjgIJcbiAgLSAqKmxhdCoqOiAtICrlv4XpoIgqJm5ic3A7LSDjg53jgqTjg7Pjg4jjga7nt6/luqZcbiAgLSAqKmxvbioqOiAtICrlv4XpoIgqJm5ic3A7LSDjg53jgqTjg7Pjg4jjga7ntYzluqZcbiAgLSAqKmFsdCoqOiAtICrku7vmhI8qJm5ic3A7LSDjg53jgqTjg7Pjg4jjga7mqJnpq5hcbiAgLSAqKnNvcnQgYnkqKjogLSAq5Lu75oSPKiZuYnNwOy0g44Od44Kk44Oz44OI44KS44K944O844OI44GZ44KL44Gf44KB44Gr5L2/55So44GV44KM44KLIFxcYHNvcnQgYnlcXGAg5YiX44CC5oyH5a6a44GM44Gq44GE5aC05ZCI44CB44Od44Kk44Oz44OI44Gv6KGM44Gu44Kk44Oz44OH44OD44Kv44K56aCG44Gr44K944O844OI44GV44KM44G+44GZ44CCXG5gLFxuICAgICAgZXhhbXBsZVRhYmxlOiAnRXhhbXBsZSBDU1YnXG4gICAgfSxcbiAgICBpY29uSW5mbzoge1xuICAgICAgdGl0bGU6ICfjgqLjgqTjgrPjg7Pjga7mj4/nlLvmlrnms5UnLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnQ1NW44OV44Kh44Kk44Or44Gr5YiX44KS5L2c5oiQ44GX44CB5o+P55S744GX44Gf44GE44Ki44Kk44Kz44Oz44Gu5ZCN56ew44KS6KiY6LyJ44GX44G+44GZ44CC44Ki44Kk44Kz44Oz44Gu5o+P55S744GM5LiN6KaB44Gq54K544GM44GC44KM44Gw44CB44K744Or44KS56m655m944Gr44GZ44KL44GT44Go44KC5Y+v6IO944Gn44GZ44CC5YiX5ZCN44GMJyxcbiAgICAgIGNvZGU6ICdpY29uJyxcbiAgICAgIGRlc2NyaXB0aW9uMjogJ+OBruWgtOWQiOOAgWtlcGxlci5nbOOBr+iHquWLleeahOOBq+OCouOCpOOCs+ODs+ODrOOCpOODpOOCkuS9nOaIkOOBl+OBvuOBmeOAgicsXG4gICAgICBleGFtcGxlOiAn5L6LOicsXG4gICAgICBpY29uczogJ+OCouOCpOOCs+ODs+S4gOimpydcbiAgICB9LFxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcbiAgICAgIGxhc3RNb2RpZmllZDogJ+acgOe1gue3qOmbhu+8mntsYXN0VXBkYXRlZH0g5YmNJyxcbiAgICAgIGJhY2s6ICfmiLvjgosnXG4gICAgfSxcbiAgICBvdmVyd3JpdGVNYXA6IHtcbiAgICAgIHRpdGxlOiAn5Zyw5Zuz44KS5L+d5a2Y5LitLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICfml6Ljgat7bWFwU2F2ZWR944Gr5a2Y5Zyo44GX44G+44GZ44CC5LiK5pu444GN44GX44G+44GZ44GL77yfJ1xuICAgIH0sXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcbiAgICAgIGJhY2s6ICfmiLvjgosnLFxuICAgICAgZ29Ub1BhZ2U6ICdLZXBsZXIuZ2zjga57ZGlzcGxheU5hbWV944Oa44O844K444Gr56e75YuVJyxcbiAgICAgIHN0b3JhZ2VNYXBzOiAn44K544OI44Os44O844K4IC8g5Zyw5ZuzJyxcbiAgICAgIG5vU2F2ZWRNYXBzOiAn5L+d5a2Y5riI44Gu5Zyw5Zuz44Gv44G+44Gg44GC44KK44G+44Gb44KTJ1xuICAgIH1cbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgdmlzaWJsZUxheWVyczogJ+ihqOekuuS4reOBruODrOOCpOODpCcsXG4gICAgbGF5ZXJMZWdlbmQ6ICfjg6zjgqTjg6TliKTkvosnXG4gIH0sXG4gIGludGVyYWN0aW9uczoge1xuICAgIHRvb2x0aXA6ICfjg4Tjg7zjg6vjg4Hjg4Pjg5cnLFxuICAgIGJydXNoOiAn44OW44Op44K3JyxcbiAgICBjb29yZGluYXRlOiAn5bqn5qiZJyxcbiAgICBnZW9jb2RlcjogJ+OCuOOCquOCs+ODvOODgOODvCdcbiAgfSxcbiAgbGF5ZXJCbGVuZGluZzoge1xuICAgIHRpdGxlOiAn44Os44Kk44Ok44Gu44OW44Os44Oz44OJJyxcbiAgICBhZGRpdGl2ZTogJ+WKoOeul++8iEFkZGl0aXZl77yJJyxcbiAgICBub3JtYWw6ICfpgJrluLjvvIhOb3JtYWzvvIknLFxuICAgIHN1YnRyYWN0aXZlOiAn5rib566X77yIU3VidHJhY3RpdmXvvIknXG4gIH0sXG4gIG92ZXJsYXlCbGVuZGluZzoge1xuICAgIHRpdGxlOiAn5Zyw5Zuz44Kq44O844OQ44O844Os44Kk44Gu44OW44Os44Oz44OJJyxcbiAgICBkZXNjcmlwdGlvbjogJ+ODmeODvOOCueODnuODg+ODl+OBqOODrOOCpOODpOOCkuODluODrOODs+ODieOBl+OBpuOAgeS4oeaWueOBjOimi+OBiOOCi+OCiOOBhuOBq+OBl+OBvuOBmeOAgicsXG4gICAgc2NyZWVuOiAn5pqX44GE6IOM5pmv55So77yIU2NyZWVu77yJJyxcbiAgICBub3JtYWw6ICfpgJrluLjvvIhOb3JtYWzvvIknLFxuICAgIGRhcmtlbjogJ+aYjuOCi+OBhOiDjOaZr+eUqCDvvIhEYXJrZW7vvIknXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ+WIlycsXG4gICAgbGF0OiAn57ev5bqmJyxcbiAgICBsbmc6ICfntYzluqYnLFxuICAgIGFsdGl0dWRlOiAn5qiZ6auYJyxcbiAgICBpY29uOiAn44Ki44Kk44Kz44OzJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgdG9rZW46ICfjg4jjg7zjgq/jg7MnLFxuICAgIHNvcnRCeTogJ+S4puOBueabv+OBiOmghicsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAn5Ye655m6IOe3r+W6picsXG4gICAgICBsbmcwOiAn5Ye655m6IOe1jOW6picsXG4gICAgICBsYXQxOiAn5Yiw552AIOe3r+W6picsXG4gICAgICBsbmcxOiAn5Yiw552AIOe1jOW6pidcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICfjgrDjg6rjg4Pjg4njgrXjgqTjgrrvvIhrbe+8iSdcbiAgICB9LFxuICAgIGhleGFnb246IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICflha3op5LlvaLjga7ljYrlvoTvvIhrbe+8iSdcbiAgICB9LFxuICAgIGhleF9pZDogJ2hleCBpZCdcbiAgfSxcbiAgY29sb3I6IHtcbiAgICBjdXN0b21QYWxldHRlOiAn44Kr44K544K/44Og44OR44Os44OD44OIJyxcbiAgICBzdGVwczogJ+majue0muWIhumhnuaVsCcsXG4gICAgdHlwZTogJ+majue0muWIhumhnuazlScsXG4gICAgc2VxdWVudGlhbDogJ+mghuW6j+eahCcsXG4gICAgcXVhbGl0YXRpdmU6ICflrprmgKfnmoQnLFxuICAgIGRpdmVyZ2luZzogJ+WIhuWykOeahCcsXG4gICAgY3ljbGljYWw6ICflvqrnkrDnmoQnLFxuICAgIGFsbDogJ+WFqOOBpicsXG4gICAgY29sb3JCbGluZFNhZmU6ICfoibLopprjg5Djg6rjgqLjg5Xjg6rjg7wnLFxuICAgIHJldmVyc2VkOiAn5Y+N6LuiJ1xuICB9LFxuICBjb2x1bW5TdGF0czoge1xuICAgIG1pbjogJ+acgOWwj+WApCcsXG4gICAgbWVhbjogJ+W5s+Wdh+WApCcsXG4gICAgbWF4OiAn5pyA5aSn5YCkJ1xuICB9LFxuICBzY2FsZToge1xuICAgIGNvbG9yU2NhbGU6ICfjgqvjg6njg7zjgrnjgrHjg7zjg6snLFxuICAgIHNpemVTY2FsZTogJ+OCteOCpOOCuuOBruOCueOCseODvOODqycsXG4gICAgc3Ryb2tlU2NhbGU6ICfnt5rjga7jgrnjgrHjg7zjg6snLFxuICAgIHN0cm9rZUNvbG9yU2NhbGU6ICfovKrpg63nt5rjga7jgqvjg6njg7zjgrnjgrHjg7zjg6snLFxuICAgIHNjYWxlOiAn44K544Kx44O844OrJyxcbiAgICBvcmRpbmFsOiAn6aCG5bqPJyxcbiAgICBxdWFudGlsZTogJ+etiemHj++8iFF1YW50aWxl77yJJyxcbiAgICBxdWFudGl6ZTogJ+etiemWk+malO+8iFF1YW50aXpl77yJJyxcbiAgICBsaW5lYXI6ICfnt5rlvaInLFxuICAgIHNxcnQ6ICflubPmlrnmoLknLFxuICAgIGxvZzogJ+WvvuaVsCcsXG4gICAgcG9pbnQ6ICfngrknLFxuICAgIHRocmVzaG9sZDogJ+OBl+OBjeOBhOWApCcsXG4gICAgY3VzdG9tOiAn44Kr44K544K/44Og5Yy65YiGJyxcbiAgICBjdXN0b21PcmRpbmFsOiAn44Kr44K544K/44Og6aCG5bqPJ1xuICB9LFxuICBmaWxlVXBsb2FkZXI6IHtcbiAgICBtZXNzYWdlOiAn44GT44GT44Gr44OV44Kh44Kk44Or44KS44OJ44Ot44OD44OX77yI6KSH5pWw5Y+v77yJJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJypDaHJvbWXjg6bjg7zjgrbjg7zjga7loLTlkIg6IOODleOCoeOCpOODq+OCteOCpOOCuuOBrzI1MG1i44G+44Gn44Gr44GX44Gm44GP44Gg44GV44GE44CC44Gd44KM5Lul5LiK44Gu44OV44Kh44Kk44Or44KS44Ki44OD44OX44Ot44O844OJ44GZ44KL5b+F6KaB44GM44GC44KL5aC05ZCI44CBU2FmYXJp44KS6Kmm44GX44Gm44GP44Gg44GV44GE44CCJyxcbiAgICBkaXNjbGFpbWVyOlxuICAgICAgJyprZXBsZXIuZ2zjga/jgq/jg6njgqTjgqLjg7Pjg4jkuIrjgafli5XkvZzjgZfjgb7jgZnjgILjg4fjg7zjgr/jga/oh6rouqvjga7mqZ/lmajjg7vjg5bjg6njgqbjgrbjgavjga7jgb/kv53mjIHjgZXjgozjgb7jgZnjgIInICtcbiAgICAgICfmg4XloLHjgoTlnLDlm7Pjg4fjg7zjgr/jga/jgIHjgYTjgYvjgarjgovjgrXjg7zjg5Djg7zjgavjgoLpgIHkv6HjgZXjgozjgb7jgZvjgpPjgIInLFxuICAgIGNvbmZpZ1VwbG9hZE1lc3NhZ2U6XG4gICAgICAne2ZpbGVGb3JtYXROYW1lc30g44G+44Gf44Gv5L+d5a2Y5riI5Zyw5Zuz44GuKipKc29uKirjgpLjgqLjg4Pjg5fjg63jg7zjg4njgZfjgb7jgZnjgILoqbPntLDjga/ku6XkuIvjgpLlj4LnhafjgZfjgabjgY/jgaDjgZXjgYTvvJpbKirlr77lv5zjg5XjgqHjgqTjg6vlvaLlvI8qKl0nLFxuICAgIGJyb3dzZUZpbGVzOiAn44OH44OQ44Kk44K544Gu44OV44Kh44Kk44Or44KS6YG45oqeJyxcbiAgICB1cGxvYWRpbmc6ICfjgqLjg4Pjg5fjg63jg7zjg4nkuK0nLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6ICd7ZXJyb3JGaWxlc30g44Gv44K144Od44O844OI44GV44KM44Gm44GE44Gq44GE44OV44Kh44Kk44Or44Gn44GZ44CCJyxcbiAgICBvcjogJ29yJ1xuICB9LFxuICBnZW9jb2Rlcjoge1xuICAgIHRpdGxlOiAn5L2P5omA44G+44Gf44Gv5bqn5qiZ44KS5YWl5Yqb77yI5L6L77yaIDM3Ljc5LC0xMjIuNDDvvIknXG4gIH0sXG4gIGZpZWxkU2VsZWN0b3I6IHtcbiAgICBjbGVhckFsbDogJ+WFqOOBpuino+mZpCcsXG4gICAgZm9ybWF0dGluZzogJ+WApOOBruW9ouW8jydcbiAgfSxcbiAgY29tcGFyZToge1xuICAgIG1vZGVMYWJlbDogJ+avlOi8g+ODouODvOODiScsXG4gICAgdHlwZUxhYmVsOiAn5q+U6LyD5pa55byPJyxcbiAgICB0eXBlczoge1xuICAgICAgYWJzb2x1dGU6ICfntbblr74nLFxuICAgICAgcmVsYXRpdmU6ICfnm7jlr74nXG4gICAgfVxuICB9LFxuICBtYXBQb3BvdmVyOiB7XG4gICAgcHJpbWFyeTogJ+ODl+ODqeOCpOODnuODqidcbiAgfSxcbiAgZGVuc2l0eTogJ2RlbnNpdHknLFxuICAnQnVnIFJlcG9ydCc6ICfjg5DjgrDjgpLloLHlkYonLFxuICAnVXNlciBHdWlkZSc6ICfjg6bjg7zjgrbjg7zjgqzjgqTjg4knLFxuICBTYXZlOiAn5L+d5a2YJyxcbiAgU2hhcmU6ICflhbHmnIknLFxuICAnVXBkYXRlIGNvbG9yJzogJ+iJsuOCkuWkieabtCdcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO0FBQXFDLFNBQUFDLFFBQUFDLENBQUEsRUFBQUMsQ0FBQSxRQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsSUFBQSxDQUFBSixDQUFBLE9BQUFHLE1BQUEsQ0FBQUUscUJBQUEsUUFBQUMsQ0FBQSxHQUFBSCxNQUFBLENBQUFFLHFCQUFBLENBQUFMLENBQUEsR0FBQUMsQ0FBQSxLQUFBSyxDQUFBLEdBQUFBLENBQUEsQ0FBQUMsTUFBQSxXQUFBTixDQUFBLFdBQUFFLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQVIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFRLFVBQUEsT0FBQVAsQ0FBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsQ0FBQSxFQUFBSSxDQUFBLFlBQUFKLENBQUE7QUFBQSxTQUFBVSxjQUFBWixDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBWSxTQUFBLENBQUFDLE1BQUEsRUFBQWIsQ0FBQSxVQUFBQyxDQUFBLFdBQUFXLFNBQUEsQ0FBQVosQ0FBQSxJQUFBWSxTQUFBLENBQUFaLENBQUEsUUFBQUEsQ0FBQSxPQUFBRixPQUFBLENBQUFJLE1BQUEsQ0FBQUQsQ0FBQSxPQUFBYSxPQUFBLFdBQUFkLENBQUEsUUFBQWUsZ0JBQUEsYUFBQWhCLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLENBQUFELENBQUEsU0FBQUUsTUFBQSxDQUFBYyx5QkFBQSxHQUFBZCxNQUFBLENBQUFlLGdCQUFBLENBQUFsQixDQUFBLEVBQUFHLE1BQUEsQ0FBQWMseUJBQUEsQ0FBQWYsQ0FBQSxLQUFBSCxPQUFBLENBQUFJLE1BQUEsQ0FBQUQsQ0FBQSxHQUFBYSxPQUFBLFdBQUFkLENBQUEsSUFBQUUsTUFBQSxDQUFBZ0IsY0FBQSxDQUFBbkIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFFLE1BQUEsQ0FBQUssd0JBQUEsQ0FBQU4sQ0FBQSxFQUFBRCxDQUFBLGlCQUFBRCxDQUFBLElBSHJDO0FBQ0E7QUFBQSxJQUFBb0IsUUFBQSxHQUFBQyxPQUFBLGNBSWU7RUFDYkMsUUFBUSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLEtBQUssRUFBRSxLQUFLO0lBQ1pDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsV0FBVyxFQUFFLE9BQU87SUFDcEJDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLE9BQU8sRUFBRSxLQUFLO0lBQ2RDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLEdBQUcsRUFBRSxJQUFJO0lBQ1RDLFVBQVUsRUFBRTtFQUNkLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1hDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFdBQVcsRUFBRSxVQUFVO0lBQ3ZCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsV0FBVyxFQUFFLE1BQU07SUFDbkJDLFVBQVUsRUFBRSxNQUFNO0lBQ2xCQyxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0RDLElBQUksRUFBRTtJQUNKQyxFQUFFLEVBQUUsRUFBRTtJQUNOQyxRQUFRLEVBQUUsV0FBVztJQUNyQkMsV0FBVyxFQUFFLFVBQVU7SUFDdkJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxXQUFXLEVBQUUsWUFBWTtJQUN6Qk4sS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNETyxTQUFTLEVBQUU7SUFDVEMsS0FBSyxFQUFFLE9BQU87SUFDZDNCLEtBQUssRUFBRSxLQUFLO0lBQ1o0QixJQUFJLEVBQUUsSUFBSTtJQUNWQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxJQUFJLEVBQUUsSUFBSTtJQUNWLFlBQVksRUFBRSxNQUFNO0lBQ3BCQyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBQ0RDLEtBQUssRUFBRTtJQUNMQyxJQUFJLEVBQUU7TUFDSm5DLEtBQUssRUFBRSxLQUFLO01BQ1pvQyxXQUFXLEVBQUUsZUFBZTtNQUM1QkMsUUFBUSxFQUFFLE9BQU87TUFDakJDLFNBQVMsRUFBRSxLQUFLO01BQ2hCQyxVQUFVLEVBQUUsTUFBTTtNQUNsQkMsU0FBUyxFQUFFLE1BQU07TUFDakJDLFlBQVksRUFBRTtJQUNoQjtFQUNGLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1BDLE1BQU0sRUFBRTtNQUNOQyxLQUFLLEVBQUUsTUFBTTtNQUNiN0QsTUFBTSxFQUFFLE9BQU87TUFDZjhELFdBQVcsRUFBRSxVQUFVO01BQ3ZCQyxPQUFPLEVBQUU7SUFDWDtFQUNGLENBQUM7RUFDREYsS0FBSyxFQUFFO0lBQ0xHLFFBQVEsRUFBRSxLQUFLO0lBQ2YxQyxNQUFNLEVBQUUsSUFBSTtJQUNaSCxLQUFLLEVBQUUsR0FBRztJQUNWRCxTQUFTLEVBQUUsY0FBYztJQUN6QkssT0FBTyxFQUFFLGVBQWU7SUFDeEJQLE1BQU0sRUFBRSxJQUFJO0lBQ1ppRCxlQUFlLEVBQUUsZUFBZTtJQUNoQzdDLFFBQVEsRUFBRSxNQUFNO0lBQ2hCSSxNQUFNLEVBQUUsR0FBRztJQUNYMEMsV0FBVyxFQUFFLFFBQVE7SUFDckI3QyxXQUFXLEVBQUUsT0FBTztJQUNwQjhDLEtBQUssRUFBRSxNQUFNO0lBQ2JDLFdBQVcsRUFBRSxPQUFPO0lBQ3BCQyxzQkFBc0IsRUFBRSxnQkFBZ0I7SUFDeENDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCQyxzQkFBc0IsRUFBRSx1QkFBdUI7SUFDL0NDLGtCQUFrQixFQUFFLHNCQUFzQjtJQUMxQ0MsV0FBVyxFQUFFLGlCQUFpQjtJQUM5QixTQUFTLEVBQUUsT0FBTztJQUNsQixnQkFBZ0IsRUFBRSxhQUFhO0lBQy9CQyxJQUFJLEVBQUU7TUFDSkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsR0FBRyxFQUFFLEtBQUs7TUFDVkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsTUFBTSxFQUFFLFFBQVE7TUFDaEJDLE9BQU8sRUFBRSxTQUFTO01BQ2xCQyxPQUFPLEVBQUUsU0FBUztNQUNsQkMsT0FBTyxFQUFFLFNBQVM7TUFDbEJDLElBQUksRUFBRSxNQUFNO01BQ1pDLE9BQU8sRUFBRSxTQUFTO01BQ2xCQyxPQUFPLEVBQUUsU0FBUztNQUNsQkMsU0FBUyxFQUFFLElBQUk7TUFDZkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsRUFBRSxFQUFFLElBQUk7TUFDUixJQUFJLEVBQUU7SUFDUjtFQUNGLENBQUM7RUFDREMsZUFBZSxFQUFFO0lBQ2ZDLEtBQUssRUFBRSxJQUFJO0lBQ1h4QixXQUFXLEVBQUUsYUFBYTtJQUMxQnlCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0JyRSxNQUFNLEVBQUUsSUFBSTtJQUNac0UsV0FBVyxFQUFFLFlBQVk7SUFDekJDLHNCQUFzQixFQUFFLG9DQUFvQztJQUM1REMsV0FBVyxFQUFFLE9BQU87SUFDcEJDLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0JDLGlCQUFpQixFQUFFLGFBQWE7SUFDaENDLFNBQVMsRUFBRSxVQUFVO0lBQ3JCQyxvQkFBb0IsRUFBRSxnQkFBZ0I7SUFDdENDLFNBQVMsRUFBRSxVQUFVO0lBQ3JCQyxPQUFPLEVBQUUsTUFBTTtJQUNmaEYsUUFBUSxFQUFFLE1BQU07SUFDaEJHLE9BQU8sRUFBRSxLQUFLO0lBQ2Q4RSxVQUFVLEVBQUUsTUFBTTtJQUNsQjdFLE1BQU0sRUFBRSxHQUFHO0lBQ1hILFdBQVcsRUFBRSxPQUFPO0lBQ3BCaUYsZ0JBQWdCLEVBQUUsVUFBVTtJQUM1QkMsV0FBVyxFQUFFLFVBQVU7SUFDdkJDLGdCQUFnQixFQUFFLE1BQU07SUFDeEJDLGlCQUFpQixFQUFFLE9BQU87SUFDMUJDLGVBQWUsRUFBRSxRQUFRO0lBQ3pCQyxTQUFTLEVBQUUsVUFBVTtJQUNyQkMsYUFBYSxFQUFFLGlCQUFpQjtJQUNoQ0MsY0FBYyxFQUFFLFNBQVM7SUFDekJDLHlCQUF5QixFQUFFLGNBQWM7SUFDekNDLG9DQUFvQyxFQUFFLHlCQUF5QjtJQUMvREMsc0JBQXNCLEVBQUUsY0FBYztJQUN0Q0MsV0FBVyxFQUFFLFNBQVM7SUFDdEJDLGFBQWEsRUFBRSxTQUFTO0lBQ3hCQyxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DQyxpQ0FBaUMsRUFBRSxpQkFBaUI7SUFDcEQxRixNQUFNLEVBQUUsSUFBSTtJQUNaMkYsaUJBQWlCLEVBQUUsK0JBQStCO0lBQ2xEQyxJQUFJLEVBQUUsT0FBTztJQUNiQyxtQkFBbUIsRUFBRSxlQUFlO0lBQ3BDQyxhQUFhLEVBQUUsYUFBYTtJQUM1QkMsZUFBZSxFQUFFLFNBQVM7SUFDMUJDLFNBQVMsRUFBRSxVQUFVO0lBQ3JCQyxXQUFXLEVBQUUsT0FBTztJQUNwQkMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QkMsV0FBVyxFQUFFLE1BQU07SUFDbkJDLHNCQUFzQixFQUFFO0VBQzFCLENBQUM7RUFDREMsWUFBWSxFQUFFO0lBQ1pDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsYUFBYSxFQUFFO0VBQ2pCLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRSxTQUFTO0lBQ25CQyxXQUFXLEVBQUUsV0FBVztJQUN4QixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCQyxlQUFlLEVBQUU7RUFDbkIsQ0FBQztFQUNEQyxrQkFBa0IsRUFBRTtJQUNsQkMsa0JBQWtCLEVBQUUsaUNBQWlDO0lBQ3JEQyxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0RDLGFBQWEsRUFBRTtJQUNiQyxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLFlBQVksRUFBRTtJQUNaQyxhQUFhLEVBQUUsU0FBUztJQUN4QkMsYUFBYSxFQUFFO0VBQ2pCLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1hDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1BDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxTQUFTLEVBQUUsUUFBUTtJQUNuQkMsV0FBVyxFQUFFLFlBQVk7SUFDekJDLFdBQVcsRUFBRSxXQUFXO0lBQ3hCQyxJQUFJLEVBQUUsUUFBUTtJQUNkQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxXQUFXLEVBQUUsUUFBUTtJQUNyQkMsY0FBYyxFQUFFLFFBQVE7SUFDeEJDLGFBQWEsRUFBRSxPQUFPO0lBQ3RCQyxVQUFVLEVBQUUsV0FBVztJQUN2QkMsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQ0MsVUFBVSxFQUFFLE9BQU87SUFDbkJDLFlBQVksRUFBRSxVQUFVO0lBQ3hCQyxTQUFTLEVBQUUsV0FBVztJQUN0QkMsWUFBWSxFQUFFLE1BQU07SUFDcEJDLG9CQUFvQixFQUFFLGFBQWE7SUFDbkNDLG9CQUFvQixFQUFFLGNBQWM7SUFDcENDLGNBQWMsRUFBRSxZQUFZO0lBQzVCQyxjQUFjLEVBQUUsV0FBVztJQUMzQkMsU0FBUyxFQUFFLGNBQWM7SUFDekJDLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxVQUFRLElBQUk7SUFDWkMsWUFBWSxFQUFFLFFBQVE7SUFDdEJDLFlBQVksRUFBRSxXQUFXO0lBQ3pCLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLGlCQUFpQixFQUFFLFFBQVE7SUFDM0JDLHNCQUFzQixFQUFFLFFBQVE7SUFDaENDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLEtBQUssRUFBRSxNQUFNO0lBQ2JDLEtBQUssRUFBRSxNQUFNO0lBQ2JDLFdBQVcsRUFBRTtFQUNmLENBQUM7RUFDREMsT0FBTyxFQUFBM0ssYUFBQTtJQUNMNEssV0FBVyxFQUFFLE9BQU87SUFDcEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxTQUFTLEVBQUUsT0FBTztJQUNsQkMsV0FBVyxFQUFFLFdBQVc7SUFDeEJDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCQyxNQUFNLEVBQUUsSUFBSTtJQUNadEcsT0FBTyxFQUFFLE1BQU07SUFDZnVHLFNBQVMsRUFBRSxLQUFLO0lBQ2hCakMsSUFBSSxFQUFFLEtBQUs7SUFDWEMsSUFBSSxFQUFFO0VBQUksR0FDUGlDLGdCQUFPLENBQ1g7RUFDREMsS0FBSyxFQUFFO0lBQ0w3SSxLQUFLLEVBQUU7TUFDTDhJLGFBQWEsRUFBRSxXQUFXO01BQzFCQyxZQUFZLEVBQUUsV0FBVztNQUN6QlYsV0FBVyxFQUFFLE9BQU87TUFDcEJDLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxTQUFTLEVBQUUsT0FBTztNQUNsQlMsb0JBQW9CLEVBQUUsZ0JBQWdCO01BQ3RDUCxPQUFPLEVBQUUsT0FBTztNQUNoQlEsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxNQUFNLEVBQUU7TUFDTixVQUFRLElBQUk7TUFDWkMsUUFBUSxFQUFFLFFBQVE7TUFDbEIsVUFBUSxJQUFJO01BQ1pDLFFBQVEsRUFBRSxRQUFRO01BQ2xCQyxJQUFJLEVBQUUsS0FBSztNQUNYQyxNQUFNLEVBQUUsU0FBUztNQUNqQkMsSUFBSSxFQUFFLElBQUk7TUFDVkMsYUFBYSxFQUFFLE9BQU87TUFDdEJDLGNBQWMsRUFBRTtJQUNsQixDQUFDO0lBQ0RwQixXQUFXLEVBQUU7TUFDWHFCLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxnQkFBZ0IsRUFBRSxrQkFBa0I7TUFDcENDLG1CQUFtQixFQUFFLFlBQVk7TUFDakNDLFdBQVcsRUFBRSxNQUFNO01BQ25CQyxRQUFRLEVBQUUsS0FBSztNQUNmQyxTQUFTLEVBQUUsTUFBTTtNQUNqQkMsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLHFCQUFxQixFQUFFLGtCQUFrQjtNQUN6Q0MsY0FBYyxFQUFFLE9BQU87TUFDdkJDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0Q3QixVQUFVLEVBQUU7TUFDVnRDLFlBQVksRUFBRSxRQUFRO01BQ3RCb0UsZUFBZSxFQUFFLHVCQUF1QjtNQUN4Q0MsV0FBVyxFQUFFLElBQUk7TUFDakJDLGFBQWEsRUFBRSxPQUFPO01BQ3RCQyxnQkFBZ0IsRUFBRSxzQkFBc0I7TUFDeENDLGVBQWUsRUFBRSxVQUFVO01BQzNCQyxrQkFBa0IsRUFDaEIsMENBQTBDO01BQzVDQyxZQUFZLEVBQUUsVUFBVTtNQUN4QkMsY0FBYyxFQUFFLE1BQU07TUFDdEJDLFNBQVMsRUFBRSxtQkFBbUI7TUFDOUJ4RSxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0R5RSxVQUFVLEVBQUU7TUFDVkMsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNEMUIsUUFBUSxFQUFFO01BQ1IyQixZQUFZLEVBQ1YsMkVBQTJFO01BQzdFQyxnQkFBZ0IsRUFBRSxVQUFVO01BQzVCQyxnQkFBZ0IsRUFBRSxPQUFPO01BQ3pCQyxnQkFBZ0IsRUFBRSxJQUFJO01BQ3RCQyxnQkFBZ0IsRUFBRSxXQUFXO01BQzdCQyxnQkFBZ0IsRUFBRSxxQkFBcUI7TUFDdkNDLGdCQUFnQixFQUFFLFVBQVU7TUFDNUJDLGdCQUFnQixFQUNkLHlEQUF5RDtNQUMzREMsWUFBWSxFQUFFLHNCQUFzQjtNQUNwQ0MsVUFBVSxFQUFFLGtCQUFrQjtNQUM5QkMsY0FBYyxFQUFFLGtCQUFrQjtNQUNsQ0MsY0FBYyxFQUFFLFdBQVc7TUFDM0JDLGNBQWMsRUFBRSxTQUFTO01BQ3pCQyxjQUFjLEVBQUUsOENBQThDO01BQzlEQyxjQUFjLEVBQUUsa0JBQWtCO01BQ2xDQyxXQUFXLEVBQUU7SUFDZixDQUFDO0lBQ0RDLFFBQVEsRUFBRTtNQUNSL0wsS0FBSyxFQUFFLE9BQU87TUFDZGdNLGFBQWEsRUFBRSxVQUFVO01BQ3pCQyxpQkFBaUIsRUFBRSxPQUFPO01BQzFCQyxnQkFBZ0IsRUFBRSxlQUFlO01BQ2pDQyxVQUFVLEVBQUUsV0FBVztNQUN2QkMsYUFBYSxFQUFFLGlDQUFpQztNQUNoREMsZUFBZSxFQUNiLHlFQUF5RSxHQUN6RSw2Q0FBNkM7TUFDL0NDLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsV0FBVyxFQUFFO01BQ1hDLFlBQVksRUFBRSxZQUFZO01BQzFCQyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0RoRSxPQUFPLEVBQUU7TUFDUHpJLEtBQUssRUFBRSxXQUFXO01BQ2xCME0sUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEbkUsU0FBUyxFQUFFO01BQ1RvRSxXQUFXLEVBQUUsT0FBTztNQUNwQkMsY0FBYyxFQUFFLGVBQWU7TUFDL0JDLElBQUksRUFBRTtRQUNKQyxTQUFTLEVBQUUsK0JBQStCO1FBQzFDQyxVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCQyxhQUFhLEVBQUUsMENBQTBDO1FBQ3pEQyxnQkFBZ0IsRUFBRSwyQkFBMkI7UUFDN0NDLGtCQUFrQixFQUNoQixtRUFBbUU7UUFDckVDLGVBQWUsRUFBRSxzQ0FBc0M7UUFDdkRDLFdBQVcsRUFBRSxtQkFBbUI7UUFDaENDLFNBQVMsRUFBRSxRQUFRO1FBQ25CQyxhQUFhLEVBQUUsa0JBQWtCO1FBQ2pDQyxhQUFhLEVBQUUsS0FBSztRQUNwQkMsZUFBZSxFQUFFLG1CQUFtQjtRQUNwQ0MsSUFBSSxFQUFFLElBQUk7UUFDVkMsSUFBSSxFQUFFO01BQ1IsQ0FBQztNQUNEQyxJQUFJLEVBQUU7UUFDSkMsV0FBVyxFQUFFLE9BQU87UUFDcEJDLGdCQUFnQixFQUNkLDBFQUEwRTtRQUM1RWYsU0FBUyxFQUNQLGtGQUFrRjtRQUNwRmdCLFVBQVUsRUFDUixrRkFBa0YsR0FDbEY7TUFDSjtJQUNGLENBQUM7SUFDREMsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDREMsUUFBUSxFQUFFO01BQ1JDLE1BQU0sRUFBRSxVQUFVO01BQ2xCQyxPQUFPLEVBQUUsUUFBUTtNQUNqQkMsT0FBTyxFQUFFLFlBQVk7TUFDckJDLE1BQU0sRUFBRSxZQUFZO01BQ3BCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0RDLFFBQVEsRUFBRTtNQUNSdk8sS0FBSyxFQUFFLG1CQUFtQjtNQUMxQndPLFVBQVUsRUFBRSxxQkFBcUI7TUFDakNDLFlBQVksZ1ZBQUFDLE1BQUEsQ0FDaEIsU0FBUywrREFFVCxLQUFLLHllQUM4RztNQUMvR0MsaUJBQWlCLEVBQ2YscUVBQXFFO01BQ3ZFQyxPQUFPLEVBQUUsV0FBVztNQUNwQkMsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDREMsV0FBVyxFQUFFO01BQ1g5TyxLQUFLLEVBQUUscUJBQXFCO01BQzVCd08sVUFBVSxFQUFFLGdCQUFnQjtNQUM1Qk8sV0FBVyxzakJBQUFMLE1BQUEsQ0FTZixTQUFTLGttQkE0QlQsS0FBSyx1akJBT0wsUUFBUSxnSUFHUixLQUFLLGlkQU9MLFFBQVEsc0ZBR1IsS0FBSyxPQUNOO01BQ0tNLGdCQUFnQix5NkNBUXJCO01BQ0tILFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0RJLFFBQVEsRUFBRTtNQUNSalAsS0FBSyxFQUFFLFdBQVc7TUFDbEJ5TyxZQUFZLEVBQ1YsdUVBQXVFO01BQ3pFUyxJQUFJLEVBQUUsTUFBTTtNQUNaQyxZQUFZLEVBQUUsa0NBQWtDO01BQ2hEUCxPQUFPLEVBQUUsSUFBSTtNQUNiUSxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0RDLGdCQUFnQixFQUFFO01BQ2hCQyxZQUFZLEVBQUUsc0JBQXNCO01BQ3BDQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQ0RDLFlBQVksRUFBRTtNQUNaeFAsS0FBSyxFQUFFLFdBQVc7TUFDbEJ5UCxhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUNEQyxjQUFjLEVBQUU7TUFDZEgsSUFBSSxFQUFFLElBQUk7TUFDVkksUUFBUSxFQUFFLCtCQUErQjtNQUN6Q0MsV0FBVyxFQUFFLFlBQVk7TUFDekJDLFdBQVcsRUFBRTtJQUNmO0VBQ0YsQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDTkMsYUFBYSxFQUFFLFNBQVM7SUFDeEJDLFdBQVcsRUFBRTtFQUNmLENBQUM7RUFDREMsWUFBWSxFQUFFO0lBQ1o1SixPQUFPLEVBQUUsUUFBUTtJQUNqQjZKLEtBQUssRUFBRSxLQUFLO0lBQ1pDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0Q5SyxhQUFhLEVBQUU7SUFDYnRGLEtBQUssRUFBRSxVQUFVO0lBQ2pCcVEsUUFBUSxFQUFFLGNBQWM7SUFDeEJDLE1BQU0sRUFBRSxZQUFZO0lBQ3BCQyxXQUFXLEVBQUU7RUFDZixDQUFDO0VBQ0RDLGVBQWUsRUFBRTtJQUNmeFEsS0FBSyxFQUFFLGVBQWU7SUFDdEIrTyxXQUFXLEVBQUUsaUNBQWlDO0lBQzlDMEIsTUFBTSxFQUFFLGVBQWU7SUFDdkJILE1BQU0sRUFBRSxZQUFZO0lBQ3BCSSxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNQM1EsS0FBSyxFQUFFLEdBQUc7SUFDVjRRLEdBQUcsRUFBRSxJQUFJO0lBQ1RDLEdBQUcsRUFBRSxJQUFJO0lBQ1RDLFFBQVEsRUFBRSxJQUFJO0lBQ2R2TyxJQUFJLEVBQUUsTUFBTTtJQUNaRixPQUFPLEVBQUUsU0FBUztJQUNsQjBPLEtBQUssRUFBRSxNQUFNO0lBQ2JDLE1BQU0sRUFBRSxPQUFPO0lBQ2ZoUCxHQUFHLEVBQUU7TUFDSGlQLElBQUksRUFBRSxPQUFPO01BQ2JDLElBQUksRUFBRSxPQUFPO01BQ2JDLElBQUksRUFBRSxPQUFPO01BQ2JDLElBQUksRUFBRTtJQUNSLENBQUM7SUFDRGxQLElBQUksRUFBRTtNQUNKOEIsYUFBYSxFQUFFO0lBQ2pCLENBQUM7SUFDRHZCLE9BQU8sRUFBRTtNQUNQdUIsYUFBYSxFQUFFO0lBQ2pCLENBQUM7SUFDRHFOLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDRDlTLEtBQUssRUFBRTtJQUNMK1MsYUFBYSxFQUFFLFVBQVU7SUFDekJDLEtBQUssRUFBRSxPQUFPO0lBQ2R6UCxJQUFJLEVBQUUsT0FBTztJQUNiMFAsVUFBVSxFQUFFLEtBQUs7SUFDakJDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxTQUFTLEVBQUUsS0FBSztJQUNoQkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsR0FBRyxFQUFFLElBQUk7SUFDVEMsY0FBYyxFQUFFLFVBQVU7SUFDMUJDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1hDLEdBQUcsRUFBRSxLQUFLO0lBQ1ZDLElBQUksRUFBRSxLQUFLO0lBQ1hDLEdBQUcsRUFBRTtFQUNQLENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0xDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCck8sU0FBUyxFQUFFLFVBQVU7SUFDckJzTyxXQUFXLEVBQUUsUUFBUTtJQUNyQkMsZ0JBQWdCLEVBQUUsYUFBYTtJQUMvQkgsS0FBSyxFQUFFLE1BQU07SUFDYkksT0FBTyxFQUFFLElBQUk7SUFDYkMsUUFBUSxFQUFFLGNBQWM7SUFDeEJDLFFBQVEsRUFBRSxlQUFlO0lBQ3pCQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxHQUFHLEVBQUUsSUFBSTtJQUNUN1EsS0FBSyxFQUFFLEdBQUc7SUFDVjhRLFNBQVMsRUFBRSxNQUFNO0lBQ2pCQyxNQUFNLEVBQUUsUUFBUTtJQUNoQkMsYUFBYSxFQUFFO0VBQ2pCLENBQUM7RUFDREMsWUFBWSxFQUFFO0lBQ1pDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJDLGFBQWEsRUFDWCxrRkFBa0Y7SUFDcEZwRixVQUFVLEVBQ1IsbURBQW1ELEdBQ25ELDhCQUE4QjtJQUNoQ3FGLG1CQUFtQixFQUNqQiw2RUFBNkU7SUFDL0VDLFdBQVcsRUFBRSxjQUFjO0lBQzNCQyxTQUFTLEVBQUUsU0FBUztJQUNwQkMsZ0JBQWdCLEVBQUUsaUNBQWlDO0lBQ25EQyxFQUFFLEVBQUU7RUFDTixDQUFDO0VBQ0RuRCxRQUFRLEVBQUU7SUFDUnBRLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRHdULGFBQWEsRUFBRTtJQUNiQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsVUFBVSxFQUFFO0VBQ2QsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDUEMsU0FBUyxFQUFFLE9BQU87SUFDbEJDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCQyxLQUFLLEVBQUU7TUFDTEMsUUFBUSxFQUFFLElBQUk7TUFDZEMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0VBQ0RDLFVBQVUsRUFBRTtJQUNWQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RyVixPQUFPLEVBQUUsU0FBUztFQUNsQixZQUFZLEVBQUUsT0FBTztFQUNyQixZQUFZLEVBQUUsU0FBUztFQUN2QnNWLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEtBQUssRUFBRSxJQUFJO0VBQ1gsY0FBYyxFQUFFO0FBQ2xCLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=
