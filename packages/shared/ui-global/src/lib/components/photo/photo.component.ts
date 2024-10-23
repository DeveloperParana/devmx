import { MatButtonModule } from '@angular/material/button';
import { FileComponent } from '../file/file.component';
import { Vector2 } from '@devmx/shared-util-data';
import {
  output,
  Component,
  viewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
  selector: 'devmx-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, IconComponent, FileComponent],
  standalone: true,
})
export class PhotoComponent implements AfterViewInit {
  cropped = output<Blob>();

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
      this.context = canvas.getContext('2d');
    }
  }

  drawImage() {
    if (!this.context) return;

    const { width, height } = this.context.canvas;

    this.context.clearRect(0, 0, width, height);

    const { x, y } = this.position;
    const w = this.image.width * this.scale;
    const h = this.image.height * this.scale;

    this.context.drawImage(this.image, x, y, w, h);
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

    context.drawImage(this.image, x, y, w, h);

    cropped.toBlob((blob) => {
      if (blob) this.cropped.emit(blob);
    }, 'image/png');
  }

  onFileSelected(file: File) {
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.image.onload = () => this.drawImage();
        this.image.src = reader.result;
      }
    };

    reader.readAsDataURL(file);
  }
}
