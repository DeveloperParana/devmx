import { Component, inject, input } from '@angular/core';
import { Env } from '@devmx/shared-api-interfaces/client';

@Component({
  selector: 'devmx-image',
  styleUrl: './image.component.scss',
  template: `<img
    [src]="path"
    [loading]="lazy() ? 'lazy' : 'eager'"
    [width]="width()"
    [alt]="alt()"
  />`,
  standalone: true,
})
export class ImageComponent {
  env = inject(Env);

  src = input<string>();

  get path() {
    return `${this.env.photos.url}/${this.src()}`;
  }

  alt = input('');

  width = input(320);

  lazy = input(true);
}
