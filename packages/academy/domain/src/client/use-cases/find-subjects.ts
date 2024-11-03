import { SubjectService } from '../services';
import {
  Page,
  UseCase,
  Subject,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindSubjectsUseCase
  implements UseCase<QueryParams<Subject>, Page<Subject>>
{
  constructor(private subjectService: SubjectService) {}

  execute(params: QueryParams<Subject>) {
    return this.subjectService.find(params);
  }
}
