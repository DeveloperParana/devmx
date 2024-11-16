import { async } from '@devmx/shared-util-data';

export function readAsArrayBuffer(file: Blob) {
  return async<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result);
      }
    };

    reader.onerror = () => {
      reject(new Error('Falha ao ler ArrayBuffer'));
    };

    reader.readAsArrayBuffer(file);
  });
}
