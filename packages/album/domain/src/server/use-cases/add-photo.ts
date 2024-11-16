import { Album, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { AlbumsService } from '../services';
import { AddPhoto } from '../dtos';

export class AddPhotoUseCase implements UseCase<AddPhoto, Album> {
  constructor(private albumsService: AlbumsService) {}

  async execute({ id, photo }: AddPhoto) {
    const album = await this.albumsService.findOne(id);

    if (!album) {
      throw new NotFoundError('Album não encontrado');
    }

    album.photos.push(photo);

    return await this.albumsService.update(id, album);
  }
}
