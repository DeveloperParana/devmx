import { Vector2Like } from './vector2';

export interface RectLike {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Rect implements RectLike {
  constructor(
    public x = 0,
    public y = 0,
    public width = 0,
    public height = 0
  ) {}

  // Propriedades adicionais da DOMRect
  get top() {
    return this.y;
  }

  get left() {
    return this.x;
  }

  get bottom() {
    return this.y + this.height;
  }

  get right() {
    return this.x + this.width;
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      left: this.left,
      bottom: this.bottom,
      right: this.right,
    };
  }

  clone() {
    return new Rect(this.x, this.y, this.width, this.height);
  }

  contains(point: Vector2Like) {
    return (
      point.x >= this.left &&
      point.x <= this.right &&
      point.y >= this.top &&
      point.y <= this.bottom
    );
  }

  intersects(rect: Rect) {
    return !(
      rect.left > this.right ||
      rect.right < this.left ||
      rect.top > this.bottom ||
      rect.bottom < this.top
    );
  }

  union(rect: Rect) {
    const left = Math.min(this.left, rect.left);
    const top = Math.min(this.top, rect.top);
    const right = Math.max(this.right, rect.right);
    const bottom = Math.max(this.bottom, rect.bottom);

    return new Rect(left, top, right - left, bottom - top);
  }

  intersection(rect: Rect) {
    const left = Math.max(this.left, rect.left);
    const top = Math.max(this.top, rect.top);
    const right = Math.min(this.right, rect.right);
    const bottom = Math.min(this.bottom, rect.bottom);

    if (left < right && top < bottom) {
      return new Rect(left, top, right - left, bottom - top);
    }

    return null;
  }

  translate(vector: Vector2Like) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  scale(scaleX: number, scaleY: number) {
    this.width *= scaleX;
    this.height *= scaleY;
    return this;
  }
}
