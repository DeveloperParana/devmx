import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { SkillsService } from '../services';

export class FindSkillByIDUseCase implements UseCase<string, Skill> {
  constructor(private skillsService: SkillsService) {}

  async execute(id: string) {
    const skill = await this.skillsService.findOne(id);

    if (!skill) {
      throw new NotFoundError(`Vaga não encontrada`);
    }

    return skill;
  }
}
