import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm, UserRefForm } from '@devmx/shared-ui-global/forms';
import { EditableAlbum, UserRef } from '@devmx/shared-api-interfaces';
import { PhotosForm } from './photo';

class ContributorsForm extends FormArray<UserRefForm> {
  constructor() {
    super([]);
  }

  add(value?: UserRef) {
    this.push(new UserRefForm(value));
  }
}

export class AlbumForm extends FormGroup<TypedForm<EditableAlbum>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      title: new FormControl(new Date().toLocaleDateString(), {
        nonNullable: true,
        validators: [Validators.required],
      }),
      contributors: new ContributorsForm(),
      photos: new PhotosForm(),
    });
  }

  get contributors() {
    return this.controls.contributors as ContributorsForm;
  }

  patch(album: EditableAlbum) {
    this.patchValue(album);

    if (album.contributors && album.contributors.length > 0) {
      for (const contributor of album.contributors) {
        this.contributors.add(contributor);
      }
    }
  }
}
