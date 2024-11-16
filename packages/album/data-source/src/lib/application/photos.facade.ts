import { PhotoDto, CreatePhotoDto, UpdatePhotoDto } from '../dtos';
import { Photo } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreatePhotoUseCase,
  DeletePhotoUseCase,
  FindPhotoByIDUseCase,
  FindPhotosUseCase,
  UpdatePhotoUseCase,
} from '@devmx/album-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class PhotosFacade {
  constructor(
    private createPhotoUseCase: CreatePhotoUseCase,
    private findPhotosUseCase: FindPhotosUseCase,
    private findPhotoByIDUseCase: FindPhotoByIDUseCase,
    private updatePhotoUseCase: UpdatePhotoUseCase,
    private deletePhotoUseCase: DeletePhotoUseCase
  ) {}

  async create(data: CreatePhotoDto) {
    const event = await this.createPhotoUseCase.execute(data);
    return plainToInstance(PhotoDto, event);
  }

  async find(params: QueryParamsDto<Photo>) {
    const { data, items, pages } = await this.findPhotosUseCase.execute(params);
    const albums = plainToInstance(PhotoDto, data);
    return new PageDto(albums, items, pages);
  }

  async findOne(id: string) {
    const album = await this.findPhotoByIDUseCase.execute(id);
    return plainToInstance(PhotoDto, album);
  }

  async update(id: string, data: UpdatePhotoDto) {
    const album = await this.updatePhotoUseCase.execute({ ...data, id });
    return plainToInstance(PhotoDto, album);
  }

  async delete(id: string) {
    const album = this.deletePhotoUseCase.execute(id);
    return plainToInstance(PhotoDto, album);
  }
}

export function providePhotosFacade() {
  return createServerProvider(PhotosFacade, [
    CreatePhotoUseCase,
    FindPhotosUseCase,
    FindPhotoByIDUseCase,
    UpdatePhotoUseCase,
    DeletePhotoUseCase,
  ]);
}
