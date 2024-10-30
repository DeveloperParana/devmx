function getCanvasContext({ width, height }: HTMLImageElement | DOMRect) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) throw `context error`;
  return context;
}

export function cropImage(image: HTMLImageElement, rect: DOMRect) {
  const context1 = getCanvasContext(image);
  const context2 = getCanvasContext(rect);

  context1.drawImage(image, 0, 0);

  context2.drawImage(
    context1.canvas,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    0,
    0,
    rect.width,
    rect.height
  );

  return context2.canvas.toDataURL('image/webp');
}
