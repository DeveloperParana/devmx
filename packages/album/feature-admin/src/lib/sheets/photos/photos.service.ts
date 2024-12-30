import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Album } from '@devmx/shared-api-interfaces';
import { PhotosSheet } from './photos.sheet';

export class PhotosService {
  constructor(private bottomSheet: MatBottomSheet) {}

  open(data: Album) {
    return this.bottomSheet.open<PhotosSheet, Album, Album>(PhotosSheet, {
      data,
    });
  }
}

export function providePhotos() {
  return { provide: PhotosService, deps: [MatBottomSheet] };
}
