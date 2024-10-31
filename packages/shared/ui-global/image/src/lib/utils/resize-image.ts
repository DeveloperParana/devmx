import { async } from '@devmx/shared-util-data';
import { readImageURL } from './read-image-url';
import { loadImage } from './load-image';

export function resizeImage(file: File, maxWidth = 800) {
  return async<File>((resolve, reject) => {
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

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(new File([blob], file.name, { type: 'image/webp' }));
          }
        }, 'image/webp');
      });
  });
}
