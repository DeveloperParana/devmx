import { PageDto, QueryParamsDto } from '@devmx/shared-data-source';
import { Presentation } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
  FindPresentationsUseCase,
  RemovePresentationUseCase,
  UpdatePresentationUseCase,
} from '@devmx/presentation-domain/server';
import {
  CreatedPresentationDto,
  CreatePresentationDto,
  PresentationDto,
  UpdatePresentationDto,
} from '../dtos';

// prettier-ignore
export class PresentationsFacade {
  constructor(
    private createPresentationUseCase: CreatePresentationUseCase,
    private findPresentationsUseCase: FindPresentationsUseCase,
    private findPresentationByIDUseCase: FindPresentationByIDUseCase,
    private updatePresentationUseCase: UpdatePresentationUseCase,
    private removePresentationUseCase: RemovePresentationUseCase
  ) {}

  async create(data: CreatePresentationDto) {
    const presentation = await this.createPresentationUseCase.execute(data);
    return plainToInstance(CreatedPresentationDto, presentation);
  }

  async find(params: QueryParamsDto<Presentation>) {
    params.filter = { ...params.filter, visible: true };
    const { data, items, pages } = await this.findPresentationsUseCase.execute(
      params
    );
    const presentations = plainToInstance(PresentationDto, data);
    return new PageDto(presentations, items, pages);
  }

  async findOne(id: string) {
    const presentation = await this.findPresentationByIDUseCase.execute(id);
    return plainToInstance(PresentationDto, presentation);
  }

  async update(id: string, data: UpdatePresentationDto) {
    const presentation = await this.updatePresentationUseCase.execute({...data, id });
    return plainToInstance(PresentationDto, presentation);
  }

  async remove(id: string) {
    const presentation = this.removePresentationUseCase.execute(id);
    return plainToInstance(PresentationDto, presentation);
  }
}
