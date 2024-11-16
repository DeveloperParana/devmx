import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  AlbumService,
  PhotoService,
  CreateAlbumUseCase,
  CreatePhotoUseCase,
  DeleteAlbumUseCase,
  DeletePhotoUseCase,
  FindAlbumByIDUseCase,
  FindAlbumsUseCase,
  FindPhotoByIDUseCase,
  FindPhotosUseCase,
  UpdateAlbumUseCase,
  UpdatePhotoUseCase,
  UploadPhotoUseCase,
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

export function provideCreatePhotoUseCase() {
  return createUseCaseProvider(CreatePhotoUseCase, [PhotoService]);
}

export function provideFindPhotosUseCase() {
  return createUseCaseProvider(FindPhotosUseCase, [PhotoService]);
}

export function provideFindPhotoByIDUseCase() {
  return createUseCaseProvider(FindPhotoByIDUseCase, [PhotoService]);
}
export function provideUpdatePhotoUseCase() {
  return createUseCaseProvider(UpdatePhotoUseCase, [PhotoService]);
}
export function provideDeletePhotoUseCase() {
  return createUseCaseProvider(DeletePhotoUseCase, [PhotoService]);
}
export function provideUploadPhotoUseCase() {
  return createUseCaseProvider(UploadPhotoUseCase, [AlbumService]);
}

export function provideUseCases() {
  return [
    provideCreateAlbumUseCase(),
    provideFindAlbumsUseCase(),
    provideFindAlbumByIDUseCase(),
    provideUpdateAlbumUseCase(),
    provideDeleteAlbumUseCase(),

    provideCreatePhotoUseCase(),
    provideFindPhotosUseCase(),
    provideFindPhotoByIDUseCase(),
    provideUpdatePhotoUseCase(),
    provideDeletePhotoUseCase(),

    provideUploadPhotoUseCase(),
  ];
}
