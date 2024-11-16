import { Photo, UseCase } from '@devmx/shared-api-interfaces';
import { PhotoService } from '../services';

export class DeletePhotoUseCase implements UseCase<string, Photo | null> {
  constructor(private photoService: PhotoService) {}

  execute(id: string) {
    return this.photoService.delete(id);
  }
}
