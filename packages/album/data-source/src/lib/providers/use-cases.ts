import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  AddPhotoUseCase,
  AlbumsService,
  CreateAlbumUseCase,
  CreatePhotoUseCase,
  DeleteAlbumUseCase,
  DeletePhotoUseCase,
  FindAlbumByIDUseCase,
  FindAlbumsUseCase,
  FindPhotoByIDUseCase,
  FindPhotosUseCase,
  PhotosService,
  UpdateAlbumUseCase,
  UpdatePhotoUseCase,
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

export function provideAddPhotoUseCase() {
  return createUseCaseProvider(AddPhotoUseCase, [AlbumsService]);
}

export function provideCreatePhotoUseCase() {
  return createUseCaseProvider(CreatePhotoUseCase, [PhotosService]);
}

export function provideFindPhotosUseCase() {
  return createUseCaseProvider(FindPhotosUseCase, [PhotosService]);
}

export function provideFindPhotoByIDUseCase() {
  return createUseCaseProvider(FindPhotoByIDUseCase, [PhotosService]);
}

export function provideUpdatePhotoUseCase() {
  return createUseCaseProvider(UpdatePhotoUseCase, [PhotosService]);
}

export function provideDeletePhotoUseCase() {
  return createUseCaseProvider(DeletePhotoUseCase, [PhotosService]);
}

export function provideUseCases() {
  return [
    provideCreateAlbumUseCase(),
    provideFindAlbumsUseCase(),
    provideFindAlbumByIDUseCase(),
    provideUpdateAlbumUseCase(),
    provideDeleteAlbumUseCase(),
    provideAddPhotoUseCase(),

    provideCreatePhotoUseCase(),
    provideFindPhotosUseCase(),
    provideFindPhotoByIDUseCase(),
    provideUpdatePhotoUseCase(),
    provideDeletePhotoUseCase(),
  ];
}
