import { Institution } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateInstitutionUseCase,
  DeleteInstitutionUseCase,
  FindInstitutionByIDUseCase,
  FindInstitutionsUseCase,
  UpdateInstitutionUseCase,
} from '@devmx/academy-domain/server';
import {
  InstitutionDto,
  CreateInstitutionDto,
  UpdateInstitutionDto,
} from '../dtos';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class InstitutionsFacade {
  constructor(
    private createInstitutionUseCase: CreateInstitutionUseCase,
    private findInstitutionsUseCase: FindInstitutionsUseCase,
    private findInstitutionByIDUseCase: FindInstitutionByIDUseCase,
    private updateInstitutionUseCase: UpdateInstitutionUseCase,
    private deleteInstitutionUseCase: DeleteInstitutionUseCase
  ) {}

  async create(data: CreateInstitutionDto) {
    const event = await this.createInstitutionUseCase.execute(data);
    return plainToInstance(InstitutionDto, event);
  }

  async find(params: QueryParamsDto<Institution>) {
    const { data, items, pages } = await this.findInstitutionsUseCase.execute(
      params
    );
    const events = plainToInstance(InstitutionDto, data);
    return new PageDto(events, items, pages);
  }

  async findOne(id: string) {
    const event = await this.findInstitutionByIDUseCase.execute(id);
    return plainToInstance(InstitutionDto, event);
  }

  async update(id: string, data: UpdateInstitutionDto) {
    const event = await this.updateInstitutionUseCase.execute({ ...data, id });
    return plainToInstance(InstitutionDto, event);
  }

  async delete(id: string) {
    const event = this.deleteInstitutionUseCase.execute(id);
    return plainToInstance(InstitutionDto, event);
  }
}

export function provideInstitutionsFacade() {
  return createServerProvider(InstitutionsFacade, [
    CreateInstitutionUseCase,
    FindInstitutionsUseCase,
    FindInstitutionByIDUseCase,
    UpdateInstitutionUseCase,
    DeleteInstitutionUseCase,
  ]);
}
