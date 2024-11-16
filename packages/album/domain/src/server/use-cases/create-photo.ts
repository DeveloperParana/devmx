import { Photo, EditablePhoto, UseCase } from '@devmx/shared-api-interfaces';
import { PhotosService } from '../services';

export class CreatePhotoUseCase implements UseCase<EditablePhoto, Photo> {
  constructor(private photosService: PhotosService) {}

  async execute(data: EditablePhoto) {
    return this.photosService.create(data);
  }
}
