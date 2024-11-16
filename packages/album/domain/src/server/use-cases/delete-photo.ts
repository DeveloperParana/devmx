import { Photo, UseCase } from '@devmx/shared-api-interfaces';
import { PhotosService } from '../services';

export class DeletePhotoUseCase implements UseCase<string, Photo> {
  constructor(private photosService: PhotosService) {}

  async execute(id: string) {
    return this.photosService.delete(id);
  }
}
