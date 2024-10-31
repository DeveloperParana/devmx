import { AlbumDto, CreateAlbumDto, UpdateAlbumDto } from '../dtos';
import { Album } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
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
    private deleteAlbumUseCase: DeleteAlbumUseCase
  ) {}

  async create(data: CreateAlbumDto) {
    const event = await this.createAlbumUseCase.execute(data);
    return plainToInstance(AlbumDto, event);
  }

  async find(params: QueryParamsDto<Album>) {
    const { data, items, pages } = await this.findAlbumsUseCase.execute(params);
    const events = plainToInstance(AlbumDto, data);
    return new PageDto(events, items, pages);
  }

  async findOne(id: string) {
    const event = await this.findAlbumByIDUseCase.execute(id);
    return plainToInstance(AlbumDto, event);
  }

  async update(id: string, data: UpdateAlbumDto) {
    const event = await this.updateAlbumUseCase.execute({ ...data, id });
    return plainToInstance(AlbumDto, event);
  }

  async delete(id: string) {
    const event = this.deleteAlbumUseCase.execute(id);
    return plainToInstance(AlbumDto, event);
  }
}

export function provideAlbumsFacade() {
  return createServerProvider(AlbumsFacade, [
    CreateAlbumUseCase,
    FindAlbumsUseCase,
    FindAlbumByIDUseCase,
    UpdateAlbumUseCase,
    DeleteAlbumUseCase,
  ]);
}
