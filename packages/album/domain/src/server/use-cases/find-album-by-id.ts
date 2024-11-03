import { Album, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumsService } from '../services';

export class FindAlbumByIDUseCase implements UseCase<string, Album | null> {
  constructor(private albumsService: AlbumsService) {}

  async execute(id: string) {
    return this.albumsService.findOne(id);
  }
}
