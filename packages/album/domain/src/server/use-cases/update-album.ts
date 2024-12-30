import { Album, EditableAlbum, UseCase } from '@devmx/shared-api-interfaces';
import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { AlbumsService } from '../services';

export class UpdateAlbumUseCase implements UseCase<EditableAlbum, Album | null> {
  constructor(private albumsService: AlbumsService) {}

  async execute(data: EditableAlbum) {
    return this.albumsService.update(data.id, data);
  }
}

export function provideUpdateAlbumUseCase() {
  return createUseCaseProvider(UpdateAlbumUseCase, [AlbumsService]);
}
