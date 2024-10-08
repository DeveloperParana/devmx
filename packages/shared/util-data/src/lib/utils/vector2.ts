export interface Vector2Like {
  x: number;
  y: number;
}

export class Vector2 {
  constructor(public x = 0, public y = 0) {}

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  copy(v: Vector2Like) {
    this.x = v.x;
    this.y = v.y;

    return this;
  }

  add(v: Vector2Like) {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  sub(v: Vector2Like) {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }
}
