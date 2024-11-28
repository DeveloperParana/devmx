import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
} from '@angular/core';
import { Vector2 } from '@devmx/shared-util-data';

@Directive({
  selector: 'canvas[devmxCropPhoto]',
})
export class CropPhotoDirective implements AfterViewInit {
  ref = inject<ElementRef<HTMLCanvasElement>>(ElementRef);

  destroy = inject(DestroyRef);

  get context() {
    return this.ref.nativeElement.getContext('2d');
  }

  image = new Image();

  position = new Vector2();

  mouse = new Vector2();

  isDragging = false;

  scale = 1;

  ngAfterViewInit(): void {
    this.ref.nativeElement.addEventListener('mousemove', this.dragImage);
    this.ref.nativeElement.addEventListener('mousedown', this.startDrag);
    this.ref.nativeElement.addEventListener('mouseleave', this.stopDrag);
    this.ref.nativeElement.addEventListener('mouseup', this.stopDrag);

    this.image.addEventListener('load', this.drawImage);

    this.destroy.onDestroy(() => {
      this.ref.nativeElement.removeEventListener('mousemove', this.dragImage);
      this.ref.nativeElement.removeEventListener('mousedown', this.startDrag);
      this.ref.nativeElement.removeEventListener('mouseleave', this.stopDrag);
      this.ref.nativeElement.removeEventListener('mouseup', this.stopDrag);

      this.image.removeEventListener('load', this.drawImage);
    });
  }

  drawImage = () => {
    if (!this.image || !this.context) return;

    const { width, height } = this.context.canvas;

    this.context.clearRect(0, 0, width, height);

    const { x, y } = this.position;
    const w = this.image.width * this.scale;
    const h = this.image.height * this.scale;

    this.context.drawImage(this.image, x, y, w, h);
  };

  zoomIn() {
    this.scale *= 1.1;
    this.drawImage();
  }

  zoomOut() {
    this.scale /= 1.1;
    this.drawImage();
  }

  startDrag = ({ clientX, clientY }: MouseEvent) => {
    this.isDragging = true;
    this.mouse.set(clientX, clientY);
  };

  stopDrag = () => {
    this.isDragging = false;
  };

  dragImage = ({ clientX, clientY }: MouseEvent) => {
    if (this.isDragging) {
      const x = clientX - this.mouse.x;
      const y = clientY - this.mouse.y;

      this.position.add({ x, y });

      this.mouse.set(clientX, clientY);

      this.drawImage();
    }
  };
}
