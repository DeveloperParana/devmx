import { providePhotoHttpService } from '../infrastrucure';
import { providePhotoFacade } from '../application';
import {
  provideCreatePhotoUseCase,
  provideDeletePhotoUseCase,
  provideFindPhotoByIDUseCase,
  provideFindPhotosUseCase,
  provideUpdatePhotoTagsUseCase,
  provideUpdatePhotoUseCase,
  provideUploadPhotoUseCase,
} from '@devmx/album-domain/client';

export function providePhoto() {
  return [
    providePhotoHttpService(),

    provideCreatePhotoUseCase(),
    provideDeletePhotoUseCase(),
    provideFindPhotoByIDUseCase(),
    provideFindPhotosUseCase(),
    provideUpdatePhotoTagsUseCase(),
    provideUpdatePhotoUseCase(),
    provideUploadPhotoUseCase(),

    providePhotoFacade(),
  ];
}
