import { readAsArrayBuffer } from './read-as-array-buffer';
import { MimeType } from '@devmx/shared-api-interfaces';
import { async } from '@devmx/shared-util-data';
import { dec2Hex } from './dec2hex';

export function readMimeType(file: File) {
  return async<MimeType | null>(async (resolve) => {
    const slice = file.slice(0, 4);
    const buffer = await readAsArrayBuffer(slice);

    const view = new DataView(buffer);
    const magic = view.getUint32(0, false);

    console.log(dec2Hex(magic));

    switch (magic) {
      case 0x89504e47:
        return resolve('image/png');
      case 0x47494638:
        return resolve('image/gif');
      case 0x52494646:
        return resolve('image/webp');
      case 0x3c737667:
        return resolve('image/svg+xml');
      case 0xffd8ffe0:
      case 0xffd8ffe1:
      case 0xffd8ffee:
        return resolve('image/jpeg');
      default:
        return resolve(null);
    }
  });
}
