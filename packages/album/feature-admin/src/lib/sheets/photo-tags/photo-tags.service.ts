import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Photo } from '@devmx/shared-api-interfaces';
import { PhotoTagsSheet } from './photo-tags.sheet';

export class PhotoTagsService {
  constructor(private bottomSheet: MatBottomSheet) {}

  open(data: Photo) {
    return this.bottomSheet.open<PhotoTagsSheet, Photo, Photo>(PhotoTagsSheet, {
      data,
    });
  }
}

export function providePhotoTags() {
  return { provide: PhotoTagsService, deps: [MatBottomSheet] };
}
