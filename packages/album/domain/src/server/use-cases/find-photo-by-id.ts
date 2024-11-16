import { Photo, UseCase } from '@devmx/shared-api-interfaces';
import { PhotosService } from '../services';

export class FindPhotoByIDUseCase implements UseCase<string, Photo | null> {
  constructor(private photosService: PhotosService) {}

  async execute(id: string) {
    return this.photosService.findOne(id);
  }
}
