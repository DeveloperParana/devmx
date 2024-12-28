import { provideAlbumsMongoService } from '../infrastructure';
import { provideAlbumsFacade } from '../application';
import {
  provideCreateAlbumUseCase,
  provideDeleteAlbumUseCase,
  provideFindAlbumByIDUseCase,
  provideFindAlbumsUseCase,
  provideUpdateAlbumUseCase,
} from '@devmx/album-domain/server';

export function provideAlbum() {
  return [
    provideAlbumsMongoService(),

    provideCreateAlbumUseCase(),
    provideFindAlbumsUseCase(),
    provideFindAlbumByIDUseCase(),
    provideUpdateAlbumUseCase(),
    provideDeleteAlbumUseCase(),

    provideAlbumsFacade()
  ];
}
