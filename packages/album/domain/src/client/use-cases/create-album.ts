import { Album, EditableAlbum, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';

export class CreateAlbumUseCase implements UseCase<EditableAlbum, Album> {
  constructor(private albumService: AlbumService) {}

  execute(data: EditableAlbum) {
    return this.albumService.create(data);
  }
}

export function provideCreateAlbumUseCase() {
  return createUseCaseProvider(CreateAlbumUseCase, [AlbumService]);
}
