import { Photo, EditablePhoto, UseCase } from '@devmx/shared-api-interfaces';
import { PhotosService } from '../services';

export class UpdatePhotoUseCase implements UseCase<EditablePhoto, Photo> {
  constructor(private albumsService: PhotosService) {}

  async execute(data: EditablePhoto) {
    return this.albumsService.update(data.id, data);
  }
}
