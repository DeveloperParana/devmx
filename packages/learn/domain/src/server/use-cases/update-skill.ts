import { UseCase, Skill, EditableSkill } from '@devmx/shared-api-interfaces';
import { SkillsService } from '../services';

export class UpdateSkillUseCase implements UseCase<EditableSkill, Skill> {
  constructor(private skillsService: SkillsService) {}

  async execute(data: EditableSkill) {
    return this.skillsService.update(data.id, data);
  }
}
