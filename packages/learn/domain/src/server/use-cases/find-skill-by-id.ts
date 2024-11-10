import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { SkillsService } from '../services';

export class FindSkillByIDUseCase implements UseCase<string, Skill | null> {
  constructor(private skillsService: SkillsService) {}

  async execute(id: string) {
    return this.skillsService.findOne(id);
  }
}
