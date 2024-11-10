import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { SkillService } from '../services';

export class FindSkillByIDUseCase implements UseCase<string, Skill | null> {
  constructor(private skillService: SkillService) {}

  execute(id: string) {
    return this.skillService.findOne(id);
  }
}
