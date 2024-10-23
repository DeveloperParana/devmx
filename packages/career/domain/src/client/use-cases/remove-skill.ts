import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { SkillService } from '../services';

export class RemoveSkillUseCase implements UseCase<string, Skill> {
  constructor(private skillService: SkillService) {}

  execute(id: string) {
    return this.skillService.delete(id);
  }
}
