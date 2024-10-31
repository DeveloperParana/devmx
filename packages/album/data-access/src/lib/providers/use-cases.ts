import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  AlbumService,
  CreateAlbumUseCase,
  DeleteAlbumUseCase,
  FindAlbumByIDUseCase,
  FindAlbumsUseCase,
  SavePhotoUseCase,
  UpdateAlbumUseCase,
} from '@devmx/album-domain/client';

export function provideCreateAlbumUseCase() {
  return createUseCaseProvider(CreateAlbumUseCase, [AlbumService]);
}

export function provideFindAlbumsUseCase() {
  return createUseCaseProvider(FindAlbumsUseCase, [AlbumService]);
}

export function provideFindAlbumByIDUseCase() {
  return createUseCaseProvider(FindAlbumByIDUseCase, [AlbumService]);
}
export function provideUpdateAlbumUseCase() {
  return createUseCaseProvider(UpdateAlbumUseCase, [AlbumService]);
}
export function provideDeleteAlbumUseCase() {
  return createUseCaseProvider(DeleteAlbumUseCase, [AlbumService]);
}
export function provideSavePhotoUseCase() {
  return createUseCaseProvider(SavePhotoUseCase, [AlbumService]);
}

export function provideUseCases() {
  return [
    provideCreateAlbumUseCase(),
    provideFindAlbumsUseCase(),
    provideFindAlbumByIDUseCase(),
    provideUpdateAlbumUseCase(),
    provideDeleteAlbumUseCase(),
    provideSavePhotoUseCase(),
  ];
}
