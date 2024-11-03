import { Album, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumService } from '../services';

export class FindAlbumByIDUseCase implements UseCase<string, Album | null> {
  constructor(private albumService: AlbumService) {}

  execute(id: string) {
    return this.albumService.findOne(id);
  }
}
