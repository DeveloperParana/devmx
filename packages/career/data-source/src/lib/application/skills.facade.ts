import { SkillDto, CreateSkillDto, UpdateSkillDto } from '../dtos';
import { Skill } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateSkillUseCase,
  DeleteSkillUseCase,
  FindSkillByIDUseCase,
  FindSkillsUseCase,
  UpdateSkillUseCase,
} from '@devmx/career-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class SkillsFacade {
  constructor(
    private createSkillUseCase: CreateSkillUseCase,
    private findSkillsUseCase: FindSkillsUseCase,
    private findSkillByIDUseCase: FindSkillByIDUseCase,
    private updateSkillUseCase: UpdateSkillUseCase,
    private deleteSkillUseCase: DeleteSkillUseCase
  ) {}

  async create(data: CreateSkillDto) {
    const job = await this.createSkillUseCase.execute(data);
    return plainToInstance(SkillDto, job);
  }

  async find(params: QueryParamsDto<Skill>) {
    const { data, items, pages } = await this.findSkillsUseCase.execute(params);
    const jobs = plainToInstance(SkillDto, data);
    return new PageDto(jobs, items, pages);
  }

  async findOne(id: string) {
    const job = await this.findSkillByIDUseCase.execute(id);
    return plainToInstance(SkillDto, job);
  }

  async update(id: string, data: UpdateSkillDto) {
    const job = await this.updateSkillUseCase.execute({ ...data, id });
    return plainToInstance(SkillDto, job);
  }

  async delete(id: string) {
    const job = this.deleteSkillUseCase.execute(id);
    return plainToInstance(SkillDto, job);
  }
}

export function provideSkillsFacade() {
  return createServerProvider(SkillsFacade, [
    CreateSkillUseCase,
    FindSkillsUseCase,
    FindSkillByIDUseCase,
    UpdateSkillUseCase,
    DeleteSkillUseCase,
  ]);
}
