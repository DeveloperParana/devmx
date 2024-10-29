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
import { Vector2 } from '@devmx/shared-util-data';

const px = (value: number | string) => `${value}px`;

@Component({
  selector: 'devmx-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrl: './crop-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CropImageComponent implements OnInit {
  src = input('');

  aspectRatio = input(16 / 9);

  width = input<number | null>(null);

  height = input<number | null>(null);

  cropChange = output<DOMRect>();

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

  #start: Vector2 | null = null;

  #dragStart: Vector2 | null = null;

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

    const x = (clientWidth - width) / 2;
    const y = (clientHeight - height) / 2;

    this.#start = new Vector2(x, y);

    this.updateDimensions(width, height);
  }

  updateDimensions(width: number, height: number, reposition = true) {
    if (!this.#start) return;

    const { offsetLeft, offsetTop } = this.box;

    const { clientWidth, clientHeight } = this.image;

    const newWidth = Math.min(width, clientWidth - this.#start.x);
    const newHeight = Math.min(height, clientHeight - this.#start.y);

    const x = reposition ? Math.round(Math.max(0, this.#start.x)) : offsetLeft;
    const y = reposition ? Math.round(Math.max(0, this.#start.y)) : offsetTop;

    this.box.style.left = px(x);
    this.box.style.top = px(y);
    this.box.style.width = px(newWidth);
    this.box.style.height = px(newHeight);

    this.updateOverlay(x, y, newWidth, newHeight);

    const event = new DOMRect(x, y, newWidth, newHeight);

    this.fireChangeEvent(event);
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

  fireChangeEvent(result: DOMRect) {
    const image = this.image;
    const ratio = image.naturalWidth / image.clientWidth;

    result = new DOMRect(
      Math.round(result.x * ratio),
      Math.round(result.y * ratio),
      Math.round(result.width * ratio),
      Math.round(result.height * ratio)
    );

    this.cropChange.emit(result);
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend', [])
  stopUpdate() {
    this.#dragStart = null;

    this.box.classList.remove('nwse', 'nesw');
  }

  @HostListener('mousedown', ['$event'])
  startUpdate(event: MouseEvent | TouchEvent) {
    if (!(event.target instanceof HTMLElement)) return;

    const x = 'touches' in event ? event.touches[0].pageX : event.pageX;
    const y = 'touches' in event ? event.touches[0].pageY : event.pageY;

    this.#dragStart = new Vector2(x, y);
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  moveCropArea(event: MouseEvent | TouchEvent) {
    if (!this.#dragStart) return;

    const pageX = 'touches' in event ? event.touches[0].pageX : event.pageX;
    const pageY = 'touches' in event ? event.touches[0].pageY : event.pageY;

    const deltaX = pageX - this.#dragStart.x;
    const deltaY = pageY - this.#dragStart.y;

    const box = this.box;
    const image = this.image;

    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = box;

    const x = Math.min(
      Math.max(0, offsetLeft + deltaX),
      image.clientWidth - offsetWidth
    );

    const y = Math.min(
      Math.max(0, offsetTop + deltaY),
      image.clientHeight - offsetHeight
    );

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    this.updateOverlay(x, y, offsetWidth, offsetHeight);

    const result = new DOMRect(x, y, offsetWidth, offsetHeight);

    this.fireChangeEvent(result);

    this.#dragStart = new Vector2(pageX, pageY);
  }
}
