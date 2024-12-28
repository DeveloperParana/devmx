import { Album, EditableAlbum, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';

export class UpdateAlbumUseCase implements UseCase<EditableAlbum, Album> {
  constructor(private albumService: AlbumService) {}

  execute(data: EditableAlbum) {
    return this.albumService.update(data.id, data);
  }
}

export function provideUpdateAlbumUseCase() {
  return createUseCaseProvider(UpdateAlbumUseCase, [AlbumService]);
}
