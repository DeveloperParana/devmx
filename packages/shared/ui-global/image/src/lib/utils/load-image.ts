import { async } from '@devmx/shared-util-data';

export function loadImage(src: string) {
  return async<HTMLImageElement>((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = src;
  });
}
