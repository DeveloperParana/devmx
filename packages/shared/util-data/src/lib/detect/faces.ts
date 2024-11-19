// Código TypeScript para detectar rostos em uma imagem e retornar as coordenadas como DOMRect, sem usar bibliotecas

import { create } from '../utils';

// Função principal para detectar rostos de forma manual (simplificada)

/**
 * @example
 *
 * ```ts
 * detectFaces(imageElement)
 *   .then((faces) => {
 *     faces.forEach((face, index) => {
 *       console.log(`Face ${index + 1}:`, face);
 *     });
 *   })
 * ```
 */
export function detectFaces(element: HTMLImageElement) {
  const { width, height } = element;

  const canvas = create('canvas', { width, height });
  const context = canvas.getContext('2d');

  if (!context) throw new Error('Canvas context error');

  context.drawImage(element, 0, 0, width, height);

  const image = context.getImageData(0, 0, canvas.width, canvas.height);

  const faceRects: DOMRect[] = [];

  const visited: boolean[] = new Array(width * height).fill(false);

  for (let y = 0; y < height; y += 5) {
    for (let x = 0; x < width; x += 5) {
      const index = (y * width + x) * 4;
      const red = image.data[index];
      const green = image.data[index + 1];
      const blue = image.data[index + 2];

      // Verifica se o pixel se encaixa em uma faixa de cores de pele
      if (isSkinTone(red, green, blue) && !visited[y * width + x]) {
        // Realizar uma BFS/DFS para encontrar a área conectada do rosto
        const rect = findFaceBounds(x, y, width, height, image.data, visited);
        if (rect) faceRects.push(rect);
      }
    }
  }

  return mergeOverlappingRects(faceRects);
}

function isSkinTone(r: number, g: number, b: number): boolean {
  return r > 95 && g > 40 && b > 20 && r > g && r > b && Math.abs(r - g) > 15;
}

function findFaceBounds(
  startX: number,
  startY: number,
  width: number,
  height: number,
  data: Uint8ClampedArray,
  visited: boolean[]
): DOMRect | null {
  const queue: [number, number][] = [[startX, startY]];
  let minX = startX;
  let minY = startY;
  let maxX = startX;
  let maxY = startY;

  while (queue.length > 0) {
    const [x, y] = queue.shift() ?? [0, 0];
    const index = (y * width + x) * 4;

    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    if (visited[y * width + x]) continue;

    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];

    if (isSkinTone(red, green, blue)) {
      visited[y * width + x] = true;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);

      /**
       * Adiciona os vizinhos à
       * fila para expandir a área
       */
      queue.push([x + 1, y]);
      queue.push([x - 1, y]);
      queue.push([x, y + 1]);
      queue.push([x, y - 1]);
    }
  }

  /**
   * Se o tamanho do retângulo for significativo, retorna o DOMRect
   */
  if (maxX - minX > 20 && maxY - minY > 20) {
    return new DOMRect(minX, minY, maxX - minX, maxY - minY);
  }

  return null;
}

/**
 * Mescla retângulos sobrepostos
 */
function mergeOverlappingRects(rects: DOMRect[]) {
  const mergedRects: DOMRect[] = [];

  rects.forEach((rect) => {
    let overlapping = false;
    for (let i = 0; i < mergedRects.length; i++) {
      if (isOverlapping(mergedRects[i], rect)) {
        overlapping = true;
        mergedRects[i] = mergeRects(mergedRects[i], rect);
        break;
      }
    }
    if (!overlapping) {
      mergedRects.push(rect);
    }
  });

  return mergedRects;
}

// Verifica retângulos sobrepostos
function isOverlapping(rect1: DOMRect, rect2: DOMRect) {
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

// Função auxiliar para mesclar dois retângulos sobrepostos
function mergeRects(rect1: DOMRect, rect2: DOMRect) {
  const x = Math.min(rect1.x, rect2.x);
  const y = Math.min(rect1.y, rect2.y);
  const width = Math.max(rect1.right, rect2.right) - x;
  const height = Math.max(rect1.bottom, rect2.bottom) - y;
  return new DOMRect(x, y, width, height);
}

// // Código TypeScript para detectar rostos em uma imagem e retornar as coordenadas como DOMRect

// // Função principal para detectar rostos
// async function detectFaces(image: HTMLImageElement): Promise<DOMRect[]> {
//   // Criando um canvas para processar a imagem
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');

//   if (!ctx) throw new Error('Não foi possível obter o contexto do canvas');

//   // Configurando o tamanho do canvas
//   canvas.width = image.width;
//   canvas.height = image.height;

//   // Desenhando a imagem no canvas
//   ctx.drawImage(image, 0, 0, image.width, image.height);

//   // Obtendo dados da imagem
//   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   const { data, width, height } = imageData;

//   // Definindo um limiar básico para detecção de rosto (exemplo fictício)
//   const faceRects: DOMRect[] = [];

//   // Simulação de um loop básico para detecção de características faciais (este exemplo é limitado e ilustrativo)
//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       const index = (y * width + x) * 4;
//       const red = data[index];
//       const green = data[index + 1];
//       const blue = data[index + 2];

//       // Verifica se o pixel se encaixa em uma faixa de cores de pele (simplificação para fins ilustrativos)
//       if (isSkinTone(red, green, blue)) {
//         // Criação de um DOMRect fictício como se fosse um rosto encontrado
//         const rect = new DOMRect(x, y, 50, 50); // 50x50 é apenas um exemplo
//         faceRects.push(rect);
//       }
//     }
//   }

//   // Filtrando e ajustando os retângulos detectados para evitar redundâncias
//   return mergeOverlappingRects(faceRects);
// }

// // Função auxiliar para determinar se a cor do pixel está dentro da faixa de tons de pele
// function isSkinTone(r: number, g: number, b: number): boolean {
//   return (r > 95 && g > 40 && b > 20 && r > g && r > b);
// }

// // Função auxiliar para mesclar retângulos sobrepostos
// function mergeOverlappingRects(rects: DOMRect[]): DOMRect[] {
//   // Exemplo simples de filtragem de retângulos (deve ser aprimorado para uso real)
//   const mergedRects: DOMRect[] = [];

//   rects.forEach((rect) => {
//     let overlapping = false;
//     for (let i = 0; i < mergedRects.length; i++) {
//       if (isOverlapping(mergedRects[i], rect)) {
//         overlapping = true;
//         mergedRects[i] = mergeRects(mergedRects[i], rect);
//         break;
//       }
//     }
//     if (!overlapping) {
//       mergedRects.push(rect);
//     }
//   });

//   return mergedRects;
// }

// // Função auxiliar para verificar se dois retângulos se sobrepõem
// function isOverlapping(rect1: DOMRect, rect2: DOMRect): boolean {
//   return (
//     rect1.left < rect2.right &&
//     rect1.right > rect2.left &&
//     rect1.top < rect2.bottom &&
//     rect1.bottom > rect2.top
//   );
// }

// // Função auxiliar para mesclar dois retângulos sobrepostos
// function mergeRects(rect1: DOMRect, rect2: DOMRect): DOMRect {
//   const x = Math.min(rect1.x, rect2.x);
//   const y = Math.min(rect1.y, rect2.y);
//   const width = Math.max(rect1.right, rect2.right) - x;
//   const height = Math.max(rect1.bottom, rect2.bottom) - y;
//   return new DOMRect(x, y, width, height);
// }

// // Exemplo de uso
// const imageElement = document.getElementById('myImage') as HTMLImageElement;

// if (imageElement) {
//   detectFaces(imageElement).then((faces) => {
//     faces.forEach((face, index) => {
//       console.log(`Face ${index + 1}:`, face);
//     });
//   }).catch((error) => {
//     console.error('Erro ao detectar rostos:', error);
//   });
// }
