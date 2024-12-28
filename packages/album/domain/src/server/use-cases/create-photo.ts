import { Photo, EditablePhoto, UseCase } from '@devmx/shared-api-interfaces';
import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { PhotosService } from '../services';

export class CreatePhotoUseCase implements UseCase<EditablePhoto, Photo> {
  constructor(private photosService: PhotosService) {}

  async execute(data: EditablePhoto) {
    return this.photosService.create(data);
  }
}

export function provideCreatePhotoUseCase() {
  return createUseCaseProvider(CreatePhotoUseCase, [PhotosService]);
}
