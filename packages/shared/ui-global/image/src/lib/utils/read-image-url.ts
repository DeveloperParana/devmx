import { async } from '@devmx/shared-util-data';

export function readImageURL(file: Blob) {
  return async<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      }
    };

    reader.onerror = (err) => {
      if (err instanceof Error) reject(err);
      else reject(new Error('Falha ao carregar imagem'));
    };

    reader.readAsDataURL(file);
  });
}
