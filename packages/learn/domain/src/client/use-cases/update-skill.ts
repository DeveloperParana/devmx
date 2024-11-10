import { UseCase, Skill, EditableSkill } from '@devmx/shared-api-interfaces';
import { SkillService } from '../services';

export class UpdateSkillUseCase implements UseCase<EditableSkill, Skill> {
  constructor(private skillService: SkillService) {}

  execute(data: EditableSkill) {
    return this.skillService.update(data.id, data);
  }
}
