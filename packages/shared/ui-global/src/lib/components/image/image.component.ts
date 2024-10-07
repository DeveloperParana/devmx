import { Component, input } from '@angular/core';

@Component({
  selector: 'devmx-image',
  styleUrl: './image.component.scss',
  template: `<img
    [src]="src()"
    [loading]="lazy() ? 'lazy' : 'eager'"
    [width]="width()"
    [alt]="alt()"
  />`,
  standalone: true,
})
export class ImageComponent {
  src = input<string>();

  alt = input('');

  width = input(320);

  lazy = input(true);
}
