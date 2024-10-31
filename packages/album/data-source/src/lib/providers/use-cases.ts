import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  AlbumsService,
  CreateAlbumUseCase,
  DeleteAlbumUseCase,
  FindAlbumByIDUseCase,
  FindAlbumsUseCase,
  PhotosService,
  SavePhotoUseCase,
  UpdateAlbumUseCase,
} from '@devmx/album-domain/server';

export function provideCreateAlbumUseCase() {
  return createUseCaseProvider(CreateAlbumUseCase, [AlbumsService]);
}

export function provideFindAlbumsUseCase() {
  return createUseCaseProvider(FindAlbumsUseCase, [AlbumsService]);
}

export function provideFindAlbumByIDUseCase() {
  return createUseCaseProvider(FindAlbumByIDUseCase, [AlbumsService]);
}

export function provideUpdateAlbumUseCase() {
  return createUseCaseProvider(UpdateAlbumUseCase, [AlbumsService]);
}

export function provideDeleteAlbumUseCase() {
  return createUseCaseProvider(DeleteAlbumUseCase, [AlbumsService]);
}

export function provideSavePhotoUseCase() {
  return createUseCaseProvider(SavePhotoUseCase, [PhotosService]);
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
