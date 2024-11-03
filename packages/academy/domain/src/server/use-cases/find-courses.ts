import { CoursesService } from '../services';
import {
  Page,
  UseCase,
  Course,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindCoursesUseCase
  implements UseCase<QueryParams<Course>, Page<Course>>
{
  constructor(private coursesService: CoursesService) {}

  async execute(params: QueryParams<Course>) {
    return this.coursesService.find(params);
  }
}
