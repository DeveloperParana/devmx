import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  AlbumService,
  CreateAlbumUseCase,
  DeleteAlbumUseCase,
  FindAlbumByIDUseCase,
  FindAlbumsUseCase,
  UpdateAlbumUseCase,
} from '@devmx/album-domain/client';

export function provideCreateAlbumUseCase() {
  return createUseCaseProvider(CreateAlbumUseCase, [AlbumService]);
}

export function provideFindAlbumsUseCase() {
  return createUseCaseProvider(FindAlbumsUseCase, [AlbumService]);
}

export function provideFindAlbumByIDUseCase() {
  createUseCaseProvider(FindAlbumByIDUseCase, [AlbumService]);
}
export function provideUpdateAlbumUseCase() {
  createUseCaseProvider(UpdateAlbumUseCase, [AlbumService]);
}
export function provideDeleteAlbumUseCase() {
  createUseCaseProvider(DeleteAlbumUseCase, [AlbumService]);
}

export function provideUseCases() {
  return [
    provideCreateAlbumUseCase(),
    provideFindAlbumsUseCase(),
    provideFindAlbumByIDUseCase(),
    provideUpdateAlbumUseCase(),
    provideDeleteAlbumUseCase(),
  ];
}
