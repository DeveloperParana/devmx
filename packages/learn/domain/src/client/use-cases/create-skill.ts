import { SkillService } from '../services';
import { UseCase, Skill, EditableSkill } from '@devmx/shared-api-interfaces';

export class CreateSkillUseCase implements UseCase<EditableSkill, Skill> {
  constructor(private skillService: SkillService) {}

  execute(data: EditableSkill) {
    return this.skillService.create(data);
  }
}
