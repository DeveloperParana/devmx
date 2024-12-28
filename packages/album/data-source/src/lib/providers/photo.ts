import { providePhotosMongoService } from '../infrastructure';
import { providePhotosFacade } from '../application';
import {
  provideAddPhotoUseCase,
  provideCreatePhotoUseCase,
  provideDeletePhotoUseCase,
  provideFindPhotoByIDUseCase,
  provideFindPhotosUseCase,
  provideUpdatePhotoTagsUseCase,
  provideUpdatePhotoUseCase,
} from '@devmx/album-domain/server';

export function providePhoto() {
  return [
    providePhotosMongoService(),

    provideAddPhotoUseCase(),
    provideCreatePhotoUseCase(),
    provideFindPhotosUseCase(),
    provideFindPhotoByIDUseCase(),
    provideUpdatePhotoUseCase(),
    provideUpdatePhotoTagsUseCase(),
    provideDeletePhotoUseCase(),

    providePhotosFacade(),
  ];
}
