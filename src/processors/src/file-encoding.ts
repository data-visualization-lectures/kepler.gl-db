// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

/**
 * In-app conversion for Shift JIS / Windows-31J (CP932) data files.
 * UTF-8 and binary uploads are left unchanged.
 */

const BINARY_FILE_EXTENSIONS = ['.arrow', '.parquet', '.geoparquet', '.feather', '.pqt'];

// Prefer CP932 (Japanese Windows) then standard Shift JIS.
const SHIFT_JIS_LABELS = ['windows-31j', 'shift_jis'] as const;

export type TextFileEncoding = 'utf-8' | 'windows-31j';

function hasExtension(fileName: string, extension: string): boolean {
  return fileName.toLowerCase().endsWith(extension);
}

export function isBinaryDataFileName(fileName: string): boolean {
  return BINARY_FILE_EXTENSIONS.some(ext => hasExtension(fileName, ext));
}

export function hasBinarySignature(bytes: Uint8Array): boolean {
  if (bytes.length >= 4) {
    // Parquet magic: PAR1
    if (bytes[0] === 0x50 && bytes[1] === 0x41 && bytes[2] === 0x52 && bytes[3] === 0x31) {
      return true;
    }
  }
  if (bytes.length >= 6) {
    // Arrow IPC magic: ARROW1
    if (
      bytes[0] === 0x41 &&
      bytes[1] === 0x52 &&
      bytes[2] === 0x52 &&
      bytes[3] === 0x4f &&
      bytes[4] === 0x57 &&
      bytes[5] === 0x31
    ) {
      return true;
    }
  }

  const limit = Math.min(bytes.length, 1024);
  for (let i = 0; i < limit; i++) {
    if (bytes[i] === 0) {
      return true;
    }
  }
  return false;
}

function decodeStrict(bytes: Uint8Array, label: string): string | null {
  try {
    return new TextDecoder(label, {fatal: true}).decode(bytes);
  } catch {
    return null;
  }
}

export function createShiftJisDecoder(fatal = true): TextDecoder | null {
  for (const label of SHIFT_JIS_LABELS) {
    try {
      return new TextDecoder(label, {fatal});
    } catch {
      // Encoding not supported in this runtime.
    }
  }
  return null;
}

export function isValidUtf8(bytes: Uint8Array): boolean {
  return decodeStrict(bytes, 'utf-8') !== null;
}

/**
 * Detect text encoding for a data file payload.
 * Prefer UTF-8 whenever it is valid so existing files keep today's behavior.
 */
export function detectTextFileEncoding(bytes: Uint8Array): TextFileEncoding | null {
  if (!bytes.length) {
    return 'utf-8';
  }
  if (hasBinarySignature(bytes)) {
    return null;
  }
  if (isValidUtf8(bytes)) {
    return 'utf-8';
  }

  const decoder = createShiftJisDecoder(true);
  if (!decoder) {
    return null;
  }
  try {
    decoder.decode(bytes);
    return 'windows-31j';
  } catch {
    return null;
  }
}

export function decodeTextFileBytes(
  bytes: Uint8Array
): {encoding: TextFileEncoding; text: string} | null {
  const encoding = detectTextFileEncoding(bytes);
  if (!encoding) {
    return null;
  }
  if (encoding === 'utf-8') {
    return {encoding, text: new TextDecoder('utf-8').decode(bytes)};
  }
  const decoder = createShiftJisDecoder(false);
  if (!decoder) {
    return null;
  }
  return {encoding, text: decoder.decode(bytes)};
}

/**
 * If a dropped/uploaded text file is Shift JIS (CP932), return a UTF-8 File.
 * UTF-8 and binary files are returned as the same File instance.
 */
export async function decodeUploadedTextFile(file: File): Promise<File> {
  if (isBinaryDataFileName(file.name)) {
    return file;
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const decoded = decodeTextFileBytes(bytes);
  if (!decoded || decoded.encoding === 'utf-8') {
    return file;
  }

  return new File([decoded.text], file.name, {
    type: file.type || 'text/plain;charset=utf-8',
    lastModified: file.lastModified
  });
}
