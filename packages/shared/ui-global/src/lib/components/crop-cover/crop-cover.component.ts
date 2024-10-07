import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FileComponent } from '../file/file.component';
import { Vector2 } from '@devmx/shared-util-data';
import {
  output,
  input,
  Component,
  viewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-crop-cover',
  templateUrl: './crop-cover.component.html',
  styleUrl: './crop-cover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule, FileComponent],
  standalone: true,
})
export class CropCoverComponent implements AfterViewInit {
  cropped = output<Blob>();

  width = input(1280)

  height = input(480)

  canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvasRef');

  context: CanvasRenderingContext2D | null = null;

  image = new Image();

  position = new Vector2();

  mouse = new Vector2();

  isDragging = false;

  scale = 1;

  ngAfterViewInit() {
    const canvas = this.canvasRef()?.nativeElement;
    if (canvas) {
      canvas.width = this.width()
      canvas.height = this.height()
      this.context = canvas.getContext('2d');
    }
  }

  drawImage() {
    if (!this.context) return;

    const { width, height } = this.context.canvas;

    // Limpar o canvas
    this.context.clearRect(0, 0, width, height);

    // Desenhar o fundo opaco para indicar as áreas de corte
    this.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.context.fillRect(0, 0, width, height);

    // Definir a área da imagem a ser mantida como original
    const cropWidth = width;
    const cropHeight = height;

    // Calcular as dimensões da imagem escalada
    const { x, y } = this.position;
    const scaledWidth = this.image.width * this.scale;
    const scaledHeight = this.image.height * this.scale;

    // Calcular a posição para centralizar a imagem no canvas
    const offsetX = x + (width - scaledWidth) / 2;
    const offsetY = y + (height - scaledHeight) / 2;

    // Definir a área de recorte e redesenhar a imagem
    this.context.save();
    this.context.beginPath();
    this.context.rect(0, 0, cropWidth, cropHeight);
    this.context.clip();
    this.context.globalAlpha = 1.0; // Áreas que mostram a imagem original
    this.context.drawImage(this.image, offsetX, offsetY, scaledWidth, scaledHeight);
    this.context.restore();
  }

  zoomIn() {
    this.scale *= 1.1;
    this.drawImage();
  }

  zoomOut() {
    this.scale /= 1.1;
    this.drawImage();
  }

  startDrag({ clientX, clientY }: MouseEvent) {
    this.isDragging = true;
    this.mouse.set(clientX, clientY);
  }

  stopDrag() {
    this.isDragging = false;
  }

  dragImage({ clientX, clientY }: MouseEvent) {
    if (this.isDragging) {
      const x = clientX - this.mouse.x;
      const y = clientY - this.mouse.y;

      this.position.add({ x, y });

      this.mouse.set(clientX, clientY);

      this.drawImage();
    }
  }

  cropImage() {
    const cropped = document.createElement('canvas');
    const context = cropped.getContext('2d');
    if (!this.context || !context) return;

    cropped.width = this.context.canvas.width;
    cropped.height = this.context.canvas.height;

    const { x, y } = this.position;
    const w = this.image.width * this.scale;
    const h = this.image.height * this.scale;

    // Copiar somente a área de interesse da imagem para o canvas de recorte
    context.drawImage(this.image, x, y, w, h, 0, 0, cropped.width, cropped.height);

    cropped.toBlob((blob) => {
      if (blob) this.cropped.emit(blob);
    }, 'image/png');
  }

  onFileSelected(file: File) {
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.image.onload = () => {
          // Redimensionar a imagem para garantir que o menor lado atenda aos requisitos mínimos
          const aspectRatio = this.width() / this.height();
          if (this.image.width / this.image.height > aspectRatio) {
            this.scale = this.height() / this.image.height;
          } else {
            this.scale = this.width() / this.image.width;
          }
          this.drawImage();
        };
        this.image.src = reader.result;
      }
    };

    reader.readAsDataURL(file);
  }
}
