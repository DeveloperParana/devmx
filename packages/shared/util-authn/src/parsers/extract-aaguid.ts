import { bufferToHex } from '../utils/index';

/**
 * Retorna o AAGUID no formato "00000000-0000-0000-0000-000000000000"
 */

export function extractAaguid(authData: ArrayBuffer) {
  if (authData.byteLength < 53) return '00000000-0000-0000-0000-000000000000';

  const buffer = authData.slice(37, 53); // 16 byte
  const hex = bufferToHex(buffer);
  const aaguid = `${hex.substring(0, 8)}-${hex.substring(
    8,
    12
  )}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(
    20,
    32
  )}`;

  /**
   * @example "d41f5a69-b817-4144-a13c-9ebd6d9254d6"
   */
  return aaguid;
}
