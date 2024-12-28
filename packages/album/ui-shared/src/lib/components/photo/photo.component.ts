import { Photo } from '@devmx/shared-api-interfaces';
import {
  input,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-photo',
  template: `
    @if (photo(); as photo) {
    <figure>
      <img
        [src]="photo.data"
        [alt]="photo.caption"
        (click)="open.emit(photo)"
      />

      <figcaption>{{ photo.caption }}</figcaption>
    </figure>
    }
  `,
  styles: `
    :host {
      display: flex;

      figure {
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        img {
          display: flex;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  photo = input.required<Photo>();

  open = output<Photo>();
}
