import { Photo, EditablePhoto, UseCase } from '@devmx/shared-api-interfaces';
import { PhotoService } from '../services';

export class CreatePhotoUseCase implements UseCase<EditablePhoto, Photo> {
  constructor(private photoService: PhotoService) {}

  execute(data: EditablePhoto) {
    return this.photoService.create(data);
  }
}
