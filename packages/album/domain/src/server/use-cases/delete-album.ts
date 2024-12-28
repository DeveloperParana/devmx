import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { Album, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumsService } from '../services';

export class DeleteAlbumUseCase implements UseCase<string, Album> {
  constructor(private albumsService: AlbumsService) {}

  async execute(id: string) {
    return this.albumsService.delete(id);
  }
}

export function provideDeleteAlbumUseCase() {
  return createUseCaseProvider(DeleteAlbumUseCase, [AlbumsService]);
}
