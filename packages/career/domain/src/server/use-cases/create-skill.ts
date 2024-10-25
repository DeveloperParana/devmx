import { UseCase, Skill, EditableSkill } from '@devmx/shared-api-interfaces';
import { SkillsService } from '../services';

export class CreateSkillUseCase implements UseCase<EditableSkill, Skill> {
  constructor(private readonly skillsService: SkillsService) {}

  execute(data: EditableSkill) {
    return this.skillsService.create(data);
  }
}
