import { async } from '@devmx/shared-util-data';
import { readImageURL } from './read-image-url';
import { loadImage } from './load-image';

export interface ResizedImage extends File {
  width: number;
  height: number;
}

export function resizeImage(file: File, maxWidth = 1280) {
  return async<ResizedImage>((resolve, reject) => {
    readImageURL(file)
      .then(loadImage)
      .then((image) => {
        const canvas = document.createElement('canvas');

        canvas.width = maxWidth;

        const scaleSize = maxWidth / image.width;
        canvas.height = image.height * scaleSize;

        const context = canvas.getContext('2d');

        if (!context) {
          throw reject(new Error(`Context error`));
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        const type = 'image/webp';

        canvas.toBlob((blob) => {
          if (blob) {
            const { width, height } = canvas;

            const image = new File([blob], file.name, { type });

            resolve(Object.assign(image, { width, height }));
          }
        }, type);
      });
  });
}
