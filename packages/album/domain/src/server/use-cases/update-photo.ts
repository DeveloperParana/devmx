import { Photo, EditablePhoto, UseCase } from '@devmx/shared-api-interfaces';
import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { PhotosService } from '../services';

export class UpdatePhotoUseCase implements UseCase<EditablePhoto, Photo> {
  constructor(private albumsService: PhotosService) {}

  async execute(data: EditablePhoto) {
    return this.albumsService.update(data.id, data);
  }
}

export function provideUpdatePhotoUseCase() {
  return createUseCaseProvider(UpdatePhotoUseCase, [PhotosService]);
}
