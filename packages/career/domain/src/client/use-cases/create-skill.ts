import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { CreateSkill } from '../../common/dtos';
import { SkillService } from '../services';

export class CreateSkillUseCase implements UseCase<CreateSkill, Skill> {
  constructor(private skillService: SkillService) {}

  execute(data: CreateSkill) {
    return this.skillService.create(data);
  }
}
