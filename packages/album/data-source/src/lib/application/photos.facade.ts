import { PhotoDto, CreatePhotoDto, UpdatePhotoDto, UpdatePhotoTagsDto } from '../dtos';
import { Photo } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreatePhotoUseCase,
  DeletePhotoUseCase,
  FindPhotoByIDUseCase,
  FindPhotosUseCase,
  UpdatePhotoTagsUseCase,
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
    private deletePhotoUseCase: DeletePhotoUseCase,
    private updatePhotoTagsUseCase: UpdatePhotoTagsUseCase
  ) {}

  async create(data: CreatePhotoDto) {
    const event = await this.createPhotoUseCase.execute(data);
    return plainToInstance(PhotoDto, event);
  }

  async find(params: QueryParamsDto<Photo>) {
    const { data, items, pages } = await this.findPhotosUseCase.execute(params);
    const photos = plainToInstance(PhotoDto, data);
    return new PageDto(photos, items, pages);
  }

  async findOne(id: string) {
    const photo = await this.findPhotoByIDUseCase.execute(id);
    return plainToInstance(PhotoDto, photo);
  }

  async update(id: string, data: UpdatePhotoDto) {
    const photo = await this.updatePhotoUseCase.execute({ ...data, id });
    return plainToInstance(PhotoDto, photo);
  }

  async updateTags(id: string, data: UpdatePhotoTagsDto) {
    const photo = await this.updatePhotoTagsUseCase.execute({ ...data, id });
    return plainToInstance(PhotoDto, photo);
  }

  async delete(id: string) {
    const photo = this.deletePhotoUseCase.execute(id);
    return plainToInstance(PhotoDto, photo);
  }
}

export function providePhotosFacade() {
  return createServerProvider(PhotosFacade, [
    CreatePhotoUseCase,
    FindPhotosUseCase,
    FindPhotoByIDUseCase,
    UpdatePhotoUseCase,
    DeletePhotoUseCase,
    UpdatePhotoTagsUseCase
  ]);
}
