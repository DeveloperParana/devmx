import { Photo, UseCase } from '@devmx/shared-api-interfaces';
import { PhotosService } from '../services';
import { SavePhoto } from '../dtos';

export class SavePhotoUseCase implements UseCase<SavePhoto, Photo> {
  constructor(private photosService: PhotosService) {}

  async execute({ album, photo }: SavePhoto) {
    return this.photosService.savePhoto(album, photo);
  }
}
