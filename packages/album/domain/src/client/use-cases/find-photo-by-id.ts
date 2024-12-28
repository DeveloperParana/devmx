import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { Photo, UseCase } from '@devmx/shared-api-interfaces';
import { PhotoService } from '../services';

export class FindPhotoByIDUseCase implements UseCase<string, Photo | null> {
  constructor(private photoService: PhotoService) {}

  execute(id: string) {
    return this.photoService.findOne(id);
  }
}

export function provideFindPhotoByIDUseCase() {
  return createUseCaseProvider(FindPhotoByIDUseCase, [PhotoService]);
}
