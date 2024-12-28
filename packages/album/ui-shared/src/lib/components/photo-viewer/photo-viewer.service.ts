import { PhotoViewerComponent } from './photo-viewer.component';
import { PhotoViewerData } from './photo-viewer-data';
import { Photo } from '@devmx/shared-api-interfaces';
import { Dialog } from '@angular/cdk/dialog';

export class PhotoViewerService {
  constructor(private dialog: Dialog) {}

  open(data: PhotoViewerData) {
    const width = `${data.photo.width}px`;
    const height = `${data.photo.height}px`;
    const disableClose = true;

    return this.dialog.open<Photo, PhotoViewerData, PhotoViewerComponent>(
      PhotoViewerComponent,
      { data, width, height, disableClose }
    );
  }
}

export function providePhotoViewer() {
  return {
    provide: PhotoViewerService,
    deps: [Dialog],
  };
}
