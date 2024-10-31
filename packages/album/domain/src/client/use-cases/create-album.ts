import { Album, EditableAlbum, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumService } from '../services';

export class CreateAlbumUseCase implements UseCase<EditableAlbum, Album> {
  constructor(private albumService: AlbumService) {}

  execute(data: EditableAlbum) {
    return this.albumService.create(data);
  }
}
