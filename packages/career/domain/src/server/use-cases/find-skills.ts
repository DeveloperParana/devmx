import { SkillsService } from '../services';
import {
  Page,
  UseCase,
  Skill,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindSkillsUseCase
  implements UseCase<QueryParams<Skill>, Page<Skill>>
{
  constructor(private skillsService: SkillsService) {}

  async execute(params: QueryParams<Skill>) {
    if (params?.filter?.name) {
      params.filter.name = new RegExp(params.filter.name, 'gi');
    }

    return await this.skillsService.find(params);
  }
}
