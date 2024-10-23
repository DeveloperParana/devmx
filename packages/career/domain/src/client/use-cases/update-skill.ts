import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { UpdateSkill } from '../../common/dtos';
import { SkillService } from '../services';

export class UpdateSkillUseCase implements UseCase<UpdateSkill, Skill> {
  constructor(private skillService: SkillService) {}

  execute(data: UpdateSkill) {
    return this.skillService.update(data.id, data);
  }
}
