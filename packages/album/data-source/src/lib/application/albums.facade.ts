import { AlbumDto, CreateAlbumDto, UpdateAlbumDto } from '../dtos';
import { Album, Photo } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  AddPhotoUseCase,
  CreateAlbumUseCase,
  DeleteAlbumUseCase,
  FindAlbumByIDUseCase,
  FindAlbumsUseCase,
  UpdateAlbumUseCase,
} from '@devmx/album-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class AlbumsFacade {
  constructor(
    private createAlbumUseCase: CreateAlbumUseCase,
    private findAlbumsUseCase: FindAlbumsUseCase,
    private findAlbumByIDUseCase: FindAlbumByIDUseCase,
    private updateAlbumUseCase: UpdateAlbumUseCase,
    private deleteAlbumUseCase: DeleteAlbumUseCase,
    private addPhotoUseCase: AddPhotoUseCase
  ) {}

  async create(data: CreateAlbumDto) {
    const event = await this.createAlbumUseCase.execute(data);
    return plainToInstance(AlbumDto, event);
  }

  async addPhoto(id: string, photo: Photo) {
    const album = await this.addPhotoUseCase.execute({ id, photo });
    return plainToInstance(AlbumDto, album);
  }

  async find(params: QueryParamsDto<Album>) {
    const { data, items, pages } = await this.findAlbumsUseCase.execute(params);
    const albums = plainToInstance(AlbumDto, data);
    return new PageDto(albums, items, pages);
  }

  async findOne(id: string) {
    const album = await this.findAlbumByIDUseCase.execute(id);
    return plainToInstance(AlbumDto, album);
  }

  async update(id: string, data: UpdateAlbumDto) {
    const album = await this.updateAlbumUseCase.execute({ ...data, id });
    return plainToInstance(AlbumDto, album);
  }

  async delete(id: string) {
    const album = this.deleteAlbumUseCase.execute(id);
    return plainToInstance(AlbumDto, album);
  }
}

export function provideAlbumsFacade() {
  return createServerProvider(AlbumsFacade, [
    CreateAlbumUseCase,
    FindAlbumsUseCase,
    FindAlbumByIDUseCase,
    UpdateAlbumUseCase,
    DeleteAlbumUseCase,
    AddPhotoUseCase,
  ]);
}
