import { Album, EditableAlbum, UseCase } from '@devmx/shared-api-interfaces';
import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { AlbumsService } from '../services';

export class CreateAlbumUseCase implements UseCase<EditableAlbum, Album> {
  constructor(private albumsService: AlbumsService) {}

  async execute(data: EditableAlbum) {
    return this.albumsService.create(data);
  }
}

export function provideCreateAlbumUseCase() {
  return createUseCaseProvider(CreateAlbumUseCase, [AlbumsService]);
}
