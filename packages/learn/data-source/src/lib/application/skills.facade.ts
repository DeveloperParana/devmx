import { SkillDto, CreateSkillDto, UpdateSkillDto } from '../dtos';
import { Skill } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateSkillUseCase,
  DeleteSkillUseCase,
  FindSkillByIDUseCase,
  FindSkillsUseCase,
  UpdateSkillUseCase,
} from '@devmx/learn-domain/server';
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
    const skill = await this.createSkillUseCase.execute(data);
    return plainToInstance(SkillDto, skill);
  }

  async find(params: QueryParamsDto<Skill>) {
    const { data, items, pages } = await this.findSkillsUseCase.execute(params);
    const skills = plainToInstance(SkillDto, data);
    return new PageDto(skills, items, pages);
  }

  async findOne(id: string) {
    const skill = await this.findSkillByIDUseCase.execute(id);
    return plainToInstance(SkillDto, skill);
  }

  async update(id: string, data: UpdateSkillDto) {
    const skill = await this.updateSkillUseCase.execute({ ...data, id });
    return plainToInstance(SkillDto, skill);
  }

  async delete(id: string) {
    const skill = this.deleteSkillUseCase.execute(id);
    return plainToInstance(SkillDto, skill);
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
