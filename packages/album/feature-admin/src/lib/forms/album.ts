import { EditableAlbum } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhotosForm } from './photo';

export class AlbumForm extends FormGroup<TypedForm<EditableAlbum>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      photos: new PhotosForm(),
    });
  }
}
