// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { LOCALES } from '../locales';

export default {
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
    delete: '削除',
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
  toolbar: {
    exportImage: '画像を出力',
    exportData: 'データを出力',
    exportMap: '地図を出力',
    shareMapURL: '地図のURLを共有',
    saveMap: '地図を保存',
    select: '選択',
    polygon: 'ポリゴン',
    rectangle: '長方形',
    hide: '非表示',
    show: '表示',
    ...LOCALES
  },
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
      delete: '削除',
      download: 'ダウンロード',
      export: '出力',
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
      filterDataSubtitle:
        '元データ（フィルタなし）とフィルタ済データのどちらをエクスポートするか選択します',
      filteredData: 'フィルタ済データ',
      unfilteredData: '元データ',
      fileCount: '{fileCount}個のファイル',
      rowCount: '{rowCount}行'
    },
    deleteData: {
      warning: 'このデータセットを削除します。{length}個のレイヤに影響します。'
    },
    addStyle: {
      publishTitle:
        '2. ステップ1でMapboxのスタイルURLを指定した場合、Mapboxでスタイルを公開するか、アクセストークンを以下に入力します（オプション）',
      publishSubtitle1: '独自のスタイルを',
      publishSubtitle2: 'で作成し、',
      publishSubtitle3: '公開',
      publishSubtitle4: 'することができます',
      publishSubtitle5: '非公開のスタイルを使用するには、自身の',
      publishSubtitle6: 'アクセストークン',
      publishSubtitle7:
        'をここに入力します。*kepler.glはクライアント上で動作するため、データは自身のブラウザに保持されます。',
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
      shareDisclaimer:
        'kepler.glは作成した地図をあなたのクラウドストレージに保存するため、そのURLを知っている人のみが地図やそのデータにアクセス可能です。' +
        'クラウドストレージのアカウントでいつでもデータファイルを編集/削除することができます。',
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
        tokenMisuseWarning:
          '* 自分のトークンを使用しない場合は、デフォルトのトークンが悪用防止のために更新され、地図が表示されなくなる可能性があります。  ',
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
        configDisclaimer:
          '地図の設定はjsonファイルに収められます。他のアプリケーションでkepler.glを使用する場合、この設定をコピーペーストすることが可能です：',
        selection:
          '現在の地図データと設定を単一のjsonファイルに出力します。このファイルをkepler.glにアップロードすることで、同じ地図を後から開くことが可能になります。',
        disclaimer:
          '* 地図の設定は読み込まれたデータセットとセットになっています。‘dataId’によってレイヤ、フィルター、ツールチップは特定のデータセットに紐づけられます。 ' +
          'この設定をaddDataToMapに渡す際は、データセットIDがこの設定内のdataIdと一致するようにしてください。'
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
      description1: `経路をアニメーション化するには、geoJSONデータはfeatureのgeometryとして \`LineString\` を含む必要があります。また、LineStringの座標は4つの要素を
${'```json'}
[経度, 緯度, 標高, timestamp]
${'```'}
という形式（3つ目が標高、4つ目がタイムスタンプ）で保持する必要があります。タイムスタンプの形式は、 UNIX時間の秒単位（例: \`1564184363\`）またはミリ秒単位（例: \`1564184363000\`）が有効です。`,
      descriptionTable1:
        '移動アニメーション（Trips）は、緯度、経度、タイムスタンプ（ソート用）、ID（グループ化用）を含むポイントリストから作成できます。',
      example: 'GeoJSONの例',
      exampleTable: 'CSVの例'
    },
    polygonInfo: {
      title: 'GeoJSONからポリゴンレイヤを作成',
      titleTable: 'ポイントからパス（線）を作成',
      description: `ポリゴンは以下の方法で作成できます：
__1. GeoJSON__
__2. ジオメトリ列を含むCSV__

### 1. GeoJSONファイルからポリゴンを作成

FeatureCollectionを含むGeoJSONファイルをアップロードすると、ポリゴンレイヤが自動的に作成されます。

GeoJSONの例
${'```json'}
{
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [102.0, 0.5]
      },
      "properties": {
          "prop0": "value0"
      }
  }, {
      "type": "Feature",
      "geometry": {
          "type": "LineString",
          "coordinates": [
              [102.0, 0.0],
              [103.0, 1.0],
              [104.0, 0.0],
              [105.0, 1.0]
          ]
      },
      "properties": {
        "prop0": "value0"
      }
  }]
}
${'```'}

### 2. CSVテーブル内のジオメトリ列からポリゴンを作成
ジオメトリ（ポリゴン、ポイント、LineStringなど）は、\`GeoJSON\` または \`WKT\` 形式の文字列としてCSVに埋め込むことができます。

#### 2.1 \`GeoJSON\` 文字列
\`GeoJSON\` 文字列を含む data.csv の例
${'```txt'}
id,_geojson
1,"{""type"":""Polygon"",""coordinates"":[[[-74.158491,40.835947],[-74.157914,40.83902]]]}"
${'```'}

#### 2.2 \`WKT\` 文字列
\`WKT\` 文字列を含む data.csv の例
[Well-Known Text (WKT)](https://dev.mysql.com/doc/refman/5.7/en/gis-data-formats.html#gis-wkt-format) は、ジオメトリデータをASCII形式で交換するために設計された表現形式です。

WKTを含む data.csv の例
${'```txt'}
id,_geojson
1,"POLYGON((0 0,10 0,10 10,0 10,0 0),(5 5,7 5,7 7,5 7, 5 5))"
${'```'}
`,
      descriptionTable: `パス（線）は、緯度経度のポイントリストを結合することで作成されます。インデックスフィールド（例：タイムスタンプ）でソートし、ユニークIDでグループ化します。

  ### レイヤの列設定:
  - **id**: - *必須*&nbsp;- ポイントをグループ化するために使用される \`id\` 列。同じIDを持つポイントが結合されて1つのパスになります。
  - **lat**: - *必須*&nbsp;- ポイントの緯度
  - **lon**: - *必須*&nbsp;- ポイントの経度
  - **alt**: - *任意*&nbsp;- ポイントの標高
  - **sort by**: - *任意*&nbsp;- ポイントをソートするために使用される \`sort by\` 列。指定がない場合、ポイントは行のインデックス順にソートされます。
`,
      exampleTable: 'Example CSV'
    },
    iconInfo: {
      title: 'アイコンの描画方法',
      description1:
        'CSVファイルに列を作成し、描画したいアイコンの名称を記載します。アイコンの描画が不要な点があれば、セルを空白にすることも可能です。列名が',
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
    chromeMessage:
      '*Chromeユーザーの場合: ファイルサイズは250mbまでにしてください。それ以上のファイルをアップロードする必要がある場合、Safariを試してください。',
    disclaimer:
      '*kepler.glはクライアント上で動作します。データは自身の機器・ブラウザにのみ保持されます。' +
      '情報や地図データは、いかなるサーバーにも送信されません。',
    configUploadMessage:
      '{fileFormatNames} または保存済地図の**Json**をアップロードします。詳細は以下を参照してください：[**対応ファイル形式**]',
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
