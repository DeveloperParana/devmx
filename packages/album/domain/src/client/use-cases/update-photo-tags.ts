import { Photo, EditablePhoto, UseCase } from '@devmx/shared-api-interfaces';
import { PhotoService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';

export class UpdatePhotoTagsUseCase implements UseCase<EditablePhoto, Photo> {
  constructor(private photoService: PhotoService) {}

  execute(data: EditablePhoto) {
    return this.photoService.updateTags(data.id, data);
  }
}

export function provideUpdatePhotoTagsUseCase() {
  return createUseCaseProvider(UpdatePhotoTagsUseCase, [PhotoService]);
}
