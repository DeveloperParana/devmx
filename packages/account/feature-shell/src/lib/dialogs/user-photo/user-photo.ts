import { Dialog } from '@angular/cdk/dialog';
import { UserPhotoDialog } from './user-photo.dialog';
import { UserPhotoData } from './user-photo-data';

export class UserPhoto {
  constructor(private dialog: Dialog) {}

  open(data: UserPhotoData) {
    return this.dialog.open<Blob, UserPhotoData, UserPhotoDialog>(
      UserPhotoDialog,
      { data }
    );
  }
}

export function provideUserPhoto() {
  return {
    provide: UserPhoto,
    deps: [Dialog],
  };
}
