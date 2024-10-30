import {
  input,
  output,
  OnInit,
  viewChild,
  Component,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface CropResult {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface DragPosition {
  dragStartX: number;
  dragStartY: number;
}

interface StartPosition {
  startX: number;
  startY: number;
}

const px = (value: number | string) => `${value}px`;

@Component({
  selector: 'devmx-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrl: './image-crop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ImageCropComponent implements OnInit {
  src = input('');

  aspectRatio = input(16 / 9);

  width = input<number | null>(null);

  height = input<number | null>(null);

  cropChange = output<CropResult>();

  boxRef = viewChild<ElementRef<HTMLElement>>('box');

  get box() {
    const ref = this.boxRef();
    if (!ref) throw `box error`;

    return ref.nativeElement;
  }

  overlayRef = viewChild<ElementRef<HTMLElement>>('overlay');

  get overlay() {
    const ref = this.overlayRef();
    if (!ref) throw `overlay error`;

    return ref.nativeElement;
  }

  imageRef = viewChild<ElementRef<HTMLImageElement>>('image');

  get image() {
    const ref = this.imageRef();
    if (!ref) throw `error`;

    return ref.nativeElement;
  }

  private dragStartPositions: DragPosition | null = null;

  private startPositions: StartPosition | null = null;

  loaded = false;

  ngOnInit() {
    const src = this.src();

    this.image.onload = () => {
      this.loaded = true;
      this.setInitialPosition();
    };

    this.box.addEventListener('touchstart', this.startUpdate.bind(this), {
      passive: true,
    });

    this.image.src = src;
  }

  setInitialPosition() {
    const { clientWidth, clientHeight } = this.image;

    const width = this.width() ?? Math.round(clientWidth / 2);

    let height = this.height() ?? width;

    if (this.aspectRatio) {
      height = Math.round(width / this.aspectRatio());
    }

    this.startPositions = {
      startX: (clientWidth - width) / 2,
      startY: (clientHeight - height) / 2,
    };

    this.updateDimensions(width, height);
  }

  updateDimensions(width: number, height: number, reposition = true) {
    if (!this.startPositions) return;

    const { offsetLeft, offsetTop } = this.box;

    const { clientWidth, clientHeight } = this.image;

    const { startX, startY } = this.startPositions;

    const newWidth = Math.min(width, clientWidth - startX);
    const newHeight = Math.min(height, clientHeight - startY);

    const x = reposition ? Math.round(Math.max(0, startX)) : offsetLeft;
    const y = reposition ? Math.round(Math.max(0, startY)) : offsetTop;

    this.box.style.left = px(x);
    this.box.style.top = px(y);
    this.box.style.width = px(newWidth);
    this.box.style.height = px(newHeight);

    this.updateOverlay(x, y, newWidth, newHeight);
    this.fireChangeEvent({ x, y, width: newWidth, height: newHeight });
  }

  updateOverlay(x: number, y: number, width: number, height: number) {
    this.overlay.style.clipPath = `polygon(
      0% 0%, 0% 100%, 100% 100%, 100% 0%,
      ${x}px 0%, ${x}px ${y}px,
      ${x + width}px ${y}px, ${x + width}px ${y + height}px,
      ${x}px ${y + height}px, ${x}px ${y}px,
      ${x}px 0%, 0% 0%
    )`;
  }

  fireChangeEvent(result: CropResult) {
    const image = this.image;
    const ratio = image.naturalWidth / image.clientWidth;

    result = {
      x: Math.round(result.x * ratio),
      y: Math.round(result.y * ratio),
      width: Math.round(result.width * ratio),
      height: Math.round(result.height * ratio),
    };

    this.cropChange.emit(result);
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend', [])
  stopUpdate() {
    this.dragStartPositions = null;
    this.box.classList.remove('nwse', 'nesw');
  }

  @HostListener('mousedown', ['$event'])
  // @HostListener('touchstart', ['$event', '{passive:true}'])
  startUpdate(event: MouseEvent | TouchEvent) {
    if (!(event.target instanceof HTMLElement)) return;

    this.dragStartPositions = {
      dragStartX: 'touches' in event ? event.touches[0].pageX : event.pageX,
      dragStartY: 'touches' in event ? event.touches[0].pageY : event.pageY,
    };
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  moveCropArea(event: MouseEvent | TouchEvent) {
    if (!this.dragStartPositions) return;

    const { dragStartX, dragStartY } = this.dragStartPositions;
    const pageX = 'touches' in event ? event.touches[0].pageX : event.pageX;
    const pageY = 'touches' in event ? event.touches[0].pageY : event.pageY;

    const deltaX = pageX - dragStartX;
    const deltaY = pageY - dragStartY;

    const box = this.box;
    const image = this.image;

    const x = Math.min(
      Math.max(0, box.offsetLeft + deltaX),
      image.clientWidth - box.offsetWidth
    );
    const y = Math.min(
      Math.max(0, box.offsetTop + deltaY),
      image.clientHeight - box.offsetHeight
    );

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    this.updateOverlay(x, y, box.offsetWidth, box.offsetHeight);
    this.fireChangeEvent({
      x,
      y,
      width: box.offsetWidth,
      height: box.offsetHeight,
    });

    this.dragStartPositions = { dragStartX: pageX, dragStartY: pageY };
  }
}
