import { Album, EditableAlbum, UseCase } from '@devmx/shared-api-interfaces';
import { AlbumsService } from '../services';

export class CreateAlbumUseCase implements UseCase<EditableAlbum, Album> {
  constructor(private albumsService: AlbumsService) {}

  async execute(data: EditableAlbum) {
    return this.albumsService.create(data);
  }
}
