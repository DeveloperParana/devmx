import { ImageRef } from '@devmx/shared-api-interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { TypedForm } from '../types';

export class ImageRefForm extends FormGroup<TypedForm<ImageRef>> {
  constructor() {
    super({
      src: new FormControl('', {
        nonNullable: true,
      }),
      alt: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
