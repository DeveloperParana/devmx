import { SubjectsService } from '../services';
import {
  Page,
  UseCase,
  Subject,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindSubjectsUseCase
  implements UseCase<QueryParams<Subject>, Page<Subject>>
{
  constructor(private subjectsService: SubjectsService) {}

  async execute(params: QueryParams<Subject>) {
    return this.subjectsService.find(params);
  }
}
