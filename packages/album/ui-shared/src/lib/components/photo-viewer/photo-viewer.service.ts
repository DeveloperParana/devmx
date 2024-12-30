import { PhotoViewerComponent } from './photo-viewer.component';
import { PhotoViewerData } from './photo-viewer-data';
import { Photo } from '@devmx/shared-api-interfaces';
import { Dialog } from '@angular/cdk/dialog';

export class PhotoViewerService {
  constructor(private dialog: Dialog) {}

  open(data: PhotoViewerData) {
    const photoViewer = this.dialog.open<
      Photo,
      PhotoViewerData,
      PhotoViewerComponent
    >(PhotoViewerComponent, {
      width: `${data.photo.width}px`,
      height: `${data.photo.height}px`,
      disableClose: true,
      hasBackdrop: true,
      maxHeight: `80%`,
      maxWidth: `80%`,
      data,
    });

    const component = photoViewer.componentInstance;

    if (!component) {
      throw `Erro ao criar instância PhotoViewer`;
    }

    return {
      updated$: component.updated$,
      updated: (value: Photo) => component.updated(value),
    };
  }
}

export function providePhotoViewer() {
  return {
    provide: PhotoViewerService,
    deps: [Dialog],
  };
}
