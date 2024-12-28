import { Album, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumService } from '../services';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';

export class DeleteAlbumUseCase implements UseCase<string, Album | null> {
  constructor(private albumService: AlbumService) {}

  execute(id: string) {
    return this.albumService.delete(id);
  }
}

export function provideDeleteAlbumUseCase() {
  return createUseCaseProvider(DeleteAlbumUseCase, [AlbumService]);
}
