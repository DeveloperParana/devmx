import { SkillsService } from '../services';
import {
  Page,
  Skill,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindSkillsUseCase
  implements UseCase<QueryParams<Skill>, Page<Skill>>
{
  constructor(private skillsService: SkillsService) {}

  async execute(params: QueryParams<Skill>) {
    if (params.filter) {
      if (params.filter.name) {
        params.filter.name = new RegExp(params.filter.name, 'i');
      } else {
        delete params.filter.name;
      }
    }

    return this.skillsService.find(params);
  }
}
