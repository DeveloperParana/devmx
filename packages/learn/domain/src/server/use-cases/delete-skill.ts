import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { SkillsService } from '../services';

export class DeleteSkillUseCase implements UseCase<string, Skill> {
  constructor(private skillsService: SkillsService) {}

  async execute(id: string) {
    return this.skillsService.delete(id);
  }
}
