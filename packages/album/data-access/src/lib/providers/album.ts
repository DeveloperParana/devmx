import { provideAlbumHttpService } from '../infrastrucure';
import { provideAlbumFacade } from '../application';
import {
  provideCreateAlbumUseCase,
  provideDeleteAlbumUseCase,
  provideFindAlbumByIDUseCase,
  provideFindAlbumsUseCase,
  provideUpdateAlbumUseCase,
} from '@devmx/album-domain/client';

export function provideAlbum() {
  return [
    provideAlbumHttpService(),

    provideCreateAlbumUseCase(),
    provideDeleteAlbumUseCase(),
    provideFindAlbumByIDUseCase(),
    provideFindAlbumsUseCase(),
    provideUpdateAlbumUseCase(),

    provideAlbumFacade(),
  ];
}
