import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  Photo,
  EditablePhoto,
  UpdatePhotoTags,
} from '@devmx/shared-api-interfaces';
import {
  CreatePhotoUseCase,
  DeletePhotoUseCase,
  FindPhotoByIDUseCase,
  FindPhotosUseCase,
  UpdatePhotoTagsUseCase,
  UpdatePhotoUseCase,
  UploadPhoto,
  UploadPhotoUseCase,
} from '@devmx/album-domain/client';

export class PhotoFacade extends EntityFacade<Photo> {
  constructor(
    private createPhotoUseCase: CreatePhotoUseCase,
    private findPhotosUseCase: FindPhotosUseCase,
    private findPhotoByIdUseCase: FindPhotoByIDUseCase,
    private updatePhotoUseCase: UpdatePhotoUseCase,
    private updatePhotoTagsUseCase: UpdatePhotoTagsUseCase,
    private deletePhotoUseCase: DeletePhotoUseCase,
    private uploadPhotoUseCase: UploadPhotoUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { caption: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findPhotosUseCase.execute(this.state.params));
  }

  upload(data: UploadPhoto) {
    return this.uploadPhotoUseCase.execute(data);
  }

  loadOne(id: string) {
    this.onLoadOne(this.findPhotoByIdUseCase.execute(id));
  }

  create(data: EditablePhoto) {
    return this.createPhotoUseCase.execute(data);
  }

  update(data: EditablePhoto) {
    const request$ = this.updatePhotoUseCase.execute(data);

    // this.onUpdate(request$);

    this.loadOne(data.id);

    return request$.pipe(take(1));
  }

  updateTags(data: UpdatePhotoTags) {
    return this.updatePhotoTagsUseCase.execute(data);
  }

  delete(id: string) {
    return this.deletePhotoUseCase.execute(id);
  }
}

export function providePhotoFacade() {
  return createClientProvider(PhotoFacade, [
    CreatePhotoUseCase,
    FindPhotosUseCase,
    FindPhotoByIDUseCase,
    UpdatePhotoUseCase,
    UpdatePhotoTagsUseCase,
    DeletePhotoUseCase,
    UploadPhotoUseCase,
  ]);
}
