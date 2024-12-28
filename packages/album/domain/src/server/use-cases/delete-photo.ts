import { Photo, UseCase } from '@devmx/shared-api-interfaces';
import { PhotosService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/server';

export class DeletePhotoUseCase implements UseCase<string, Photo> {
  constructor(private photosService: PhotosService) {}

  async execute(id: string) {
    return this.photosService.delete(id);
  }
}

export function provideDeletePhotoUseCase() {
  return createUseCaseProvider(DeletePhotoUseCase, [PhotosService]);
}
