import { UseCase } from '@devmx/shared-api-interfaces';
import { AlbumService } from '../services';
import { SavePhoto } from '../dtos';

export class SavePhotoUseCase implements UseCase<SavePhoto, unknown> {
  constructor(private albumService: AlbumService) {}

  execute(data: SavePhoto) {
    return this.albumService.savePhoto(data.album, data.photo);
  }
}
