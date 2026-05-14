// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import Window from 'global/window';

// Add english messages here, other languages will use these
// if translations not available for every message
const en = {
  'modal.loadData.remote': 'Load Map using URL',
  'sampleMapsTab.noData': 'No data ?',
  'modal.shareMap.cloudSuccess': 'Open the saved projects page to manage your project.',
  'sampleMapsTab.trySampleData': 'Try sample data',
  'sampleDataViewer.rowCount': ' {rowCount} rows',
  'loadRemoteMap.description': 'Load your map using your custom URL',
  'loadRemoteMap.message':
    'You can use the following formats: CSV | JSON | Kepler.gl config json. Make sure the url contains the file extension.',
  'loadRemoteMap.examples': 'Examples:',
  'loadRemoteMap.cors':
    '* CORS policy must be defined on your custom url domain in order to be accessible. For more info ',
  'loadRemoteMap.clickHere': 'click here',
  'loadRemoteMap.fetch': 'Fetch',
  'tooltip.hideSQLPanel': 'Hide SQL Panel',
  'tooltip.showSQLPanel': 'Show SQL Panel'
};

export const messages = {
  en,
  ja: {
    'modal.loadData.remote': 'URL で地図を読み込む',
    'sampleMapsTab.noData': 'データがありませんか？',
    'modal.shareMap.cloudSuccess': '保存されたプロジェクトは「保存プロジェクト一覧」ページにアクセスしてください',
    'sampleMapsTab.trySampleData': 'サンプルデータを試す',
    'sampleDataViewer.rowCount': ' {rowCount} 行',
    'loadRemoteMap.description': 'カスタム URL で地図を読み込みます',
    'loadRemoteMap.message':
      '使用可能な形式: CSV / JSON / kepler.gl設定JSON。URLに拡張子を含めてください。',
    'loadRemoteMap.examples': '使用例:',
    'loadRemoteMap.cors': '* アクセスには CORS 設定が必要です。詳しくは',
    'loadRemoteMap.clickHere': 'こちら',
    'loadRemoteMap.fetch': '取得',
    'tooltip.hideSQLPanel': 'SQL パネルを隠す',
    'tooltip.showSQLPanel': 'SQL パネルを表示'
  },
  fi: {
    'modal.loadData.remote': 'Lataa kartta URL-osoitteen avulla',
    'sampleMapsTab.noData': 'Ei aineistoja?',
    'sampleMapsTab.trySampleData': 'Kokeile testiaineistoja',
    'sampleDataViewer.rowCount': ' {rowCount} riviä',
    'loadRemoteMap.description': 'Lataa karttasi käyttämällä omaa urlia',
    'loadRemoteMap.message':
      'Voit käyttää formaatteja: CSV | JSON | Kepler.gl asetus-json. Varmista, että url sisältää tiedostopäätteen nimen.',
    'loadRemoteMap.examples': 'Esimerkkejä:',
    'loadRemoteMap.cors':
      '* CORS-käytäntö pitää olla määriteltynä urlin domainissa, jotta aineiston voi ladata.',
    'loadRemoteMap.clickHere': 'Lisätietoja',
    'loadRemoteMap.fetch': 'Nouda'
  },
  ca: {
    'modal.loadData.remote': 'Carrega mapa mitjançant URL',
    'sampleMapsTab.noData': 'Cap dada?',
    'sampleMapsTab.trySampleData': 'Prova dades de mostra',
    'sampleDataViewer.rowCount': ' {rowCount} files',
    'loadRemoteMap.description': 'Carrega el teu mapa amb la teva URL personalitzada',
    'loadRemoteMap.message':
      "Pots emprar els següents formats: CSV | JSON | Kepler.gl config json. Assegura't que la URL contingui l'extensió de l'arxiu.",
    'loadRemoteMap.examples': 'Exemples:',
    'loadRemoteMap.cors':
      '* La política CORS s’ha de definir al teu domini per tal que sigui accessible. Per a més informació ',
    'loadRemoteMap.clickHere': 'fes clic aquí',
    'loadRemoteMap.fetch': 'Cerca'
  },
  es: {
    'modal.loadData.remote': 'Cargar mapa usando URL',
    'sampleMapsTab.noData': 'Ningún dato?',
    'sampleMapsTab.trySampleData': 'Prueba datos de muestra',
    'sampleDataViewer.rowCount': ' {rowCount} files',
    'loadRemoteMap.description': 'Carga tu mapa con tu enlace personalizado',
    'loadRemoteMap.message':
      'Puedes usar los siguientes formatos: CSV | JSON | Kepler.gl config json. Asegurate que el enlace contenga la extensión del archivo.',
    'loadRemoteMap.examples': 'Ejemplos:',
    'loadRemoteMap.cors':
      '* La política CORS debe ser definida en tu dominio para que sea accessible. Para más información ',
    'loadRemoteMap.clickHere': 'haz clic aquí',
    'loadRemoteMap.fetch': 'Busca'
  },
  cn: {
    'modal.loadData.remote': '使用 URL 加载地图',
    'sampleMapsTab.noData': '没有数据？',
    'sampleMapsTab.trySampleData': '尝试样本数据',
    'sampleDataViewer.rowCount': ' {rowCount} 行',
    'loadRemoteMap.description': '使用自定义 URL 加载地图',
    'loadRemoteMap.message':
      '您可以使用以下格式：CSV | JSON | Kepler.gl 配置 json。 确保 url 包含文件扩展名。',
    'loadRemoteMap.examples': '示例：',
    'loadRemoteMap.cors': '* 必须在您的自定义 url 域上定义 CORS 策略才能访问。欲了解更多信息',
    'loadRemoteMap.clickHere': '点击此处',
    'loadRemoteMap.fetch': '获取'
  }
};

export const appMessages = {
  en: {
    'header.loadData': 'Load data file',
    'header.loadSample': 'Load sample project',
    'header.saveProject': 'Save project',
    'header.shareProject': 'Share',
    'header.loadProject': 'Load project',
    'header.help': 'Help',
    'status.publicShareLoading': 'Loading shared map...',
    'status.publicShareLoadError': 'Failed to load the shared map.',
    'toast.projectLoading': 'Loading project...',
    'toast.projectLoadFailed': 'Failed to load the project.',
    'toast.projectLoaded': 'Project loaded.',
    'toast.projectSavingLatest': 'Saving the latest project...',
    'toast.shareUpdating': 'Updating the share URL...',
    'toast.shareUpdated': 'Share URL updated.',
    'toast.projectSaving': 'Saving project...',
    'toast.projectSaved': 'Project saved.',
    'toast.shareUpdateFailed': 'Failed to update the share URL.',
    'toast.projectSaveFailed': 'Failed to save the project.'
  },
  ja: {
    'header.loadData': 'データファイルの読込',
    'header.loadSample': 'サンプルプロジェクトの読込',
    'header.saveProject': 'プロジェクトの保存',
    'header.shareProject': 'シェア',
    'header.loadProject': 'プロジェクトの読込',
    'header.help': 'ヘルプ',
    'status.publicShareLoading': '共有地図を読み込んでいます...',
    'status.publicShareLoadError': '共有地図の読み込みに失敗しました。',
    'toast.projectLoading': 'プロジェクトを読み込んでいます...',
    'toast.projectLoadFailed': 'プロジェクトの読み込みに失敗しました',
    'toast.projectLoaded': 'プロジェクトを読み込みました',
    'toast.projectSavingLatest': '最新のプロジェクトを保存しています...',
    'toast.shareUpdating': 'シェアURLを更新しています...',
    'toast.shareUpdated': 'シェアURLを更新しました',
    'toast.projectSaving': 'プロジェクトを保存しています...',
    'toast.projectSaved': 'プロジェクトを保存しました',
    'toast.shareUpdateFailed': 'シェアURLの更新に失敗しました',
    'toast.projectSaveFailed': 'プロジェクトの保存に失敗しました'
  }
};

export function normalizeAppLocale(locale) {
  const normalized = String(locale || '').toLowerCase();

  if (normalized.startsWith('ja')) {
    return 'ja';
  }

  return 'en';
}

export function detectBrowserLocale() {
  const browserLanguages = Array.isArray(Window?.navigator?.languages)
    ? Window.navigator.languages
    : [];
  const fallbackLanguages = [Window?.navigator?.language, Window?.navigator?.userLanguage].filter(
    Boolean
  );
  const candidates = browserLanguages.length ? browserLanguages : fallbackLanguages;

  for (const candidate of candidates) {
    const normalized = normalizeAppLocale(candidate);
    if (normalized === 'ja' || String(candidate || '').toLowerCase().startsWith('en')) {
      return normalized;
    }
  }

  return 'en';
}

export function getAppLocale() {
  return normalizeAppLocale(Window.__DATAVIZ_LOCALE || detectBrowserLocale());
}

export function setAppLocale(locale) {
  const normalized = normalizeAppLocale(locale);
  Window.__DATAVIZ_LOCALE = normalized;
  return normalized;
}

export function getAppMessage(key, locale = getAppLocale()) {
  const normalized = normalizeAppLocale(locale);
  return appMessages[normalized]?.[key] || appMessages.en[key] || key;
}
