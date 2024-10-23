import { SkillService } from '../services';
import {
  Skill,
  Page,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindSkillsUseCase
  implements UseCase<QueryParams<Skill>, Page<Skill>>
{
  constructor(private skillService: SkillService) {}

  execute(params: QueryParams<Skill>) {
    return this.skillService.find(params);
  }
}
