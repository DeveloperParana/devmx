import { Presentation } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  PresentationDto,
  CreatePresentationDto,
  UpdatePresentationDto,
} from '../dtos';
import {
  CreatePresentationUseCase,
  DeletePresentationUseCase,
  FindPresentationByIDUseCase,
  FindPresentationsUseCase,
  UpdatePresentationUseCase,
} from '@devmx/presentation-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class PresentationsFacade {
  constructor(
    private createPresentationUseCase: CreatePresentationUseCase,
    private findPresentationsUseCase: FindPresentationsUseCase,
    private findPresentationByIDUseCase: FindPresentationByIDUseCase,
    private updatePresentationUseCase: UpdatePresentationUseCase,
    private deletePresentationUseCase: DeletePresentationUseCase
  ) {}

  async create(data: CreatePresentationDto) {
    const job = await this.createPresentationUseCase.execute(data);
    return plainToInstance(PresentationDto, job);
  }

  async find(params: QueryParamsDto<Presentation>) {
    const { data, items, pages } = await this.findPresentationsUseCase.execute(
      params
    );
    const jobs = plainToInstance(PresentationDto, data);
    return new PageDto(jobs, items, pages);
  }

  async findOne(id: string) {
    const job = await this.findPresentationByIDUseCase.execute(id);
    return plainToInstance(PresentationDto, job);
  }

  async update(id: string, data: UpdatePresentationDto) {
    const job = await this.updatePresentationUseCase.execute({ ...data, id });
    return plainToInstance(PresentationDto, job);
  }

  async delete(id: string) {
    const job = this.deletePresentationUseCase.execute(id);
    return plainToInstance(PresentationDto, job);
  }
}

export function providePresentationsFacade() {
  return createServerProvider(PresentationsFacade, [
    CreatePresentationUseCase,
    FindPresentationsUseCase,
    FindPresentationByIDUseCase,
    UpdatePresentationUseCase,
    DeletePresentationUseCase,
  ]);
}
