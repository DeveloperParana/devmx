import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { Photo } from '@devmx/shared-api-interfaces';

export class PhotoForm extends FormGroup<TypedForm<Photo>> {
  constructor(photo?: Photo) {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      data: new FormControl('', {
        nonNullable: true,
      }),
      type: new FormControl('image/webp', {
        nonNullable: true,
      }),
    });

    if (photo) {
      this.patchValue(photo);
    }
  }
}

export class PhotosForm extends FormArray<PhotoForm> {
  constructor() {
    super([]);
  }

  add(photo?: Photo) {
    this.push(new PhotoForm(photo));
  }
}
