import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { CourseService } from '../services';
import {
  Page,
  UseCase,
  Course,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindCoursesUseCase
  implements UseCase<QueryParams<Course>, Page<Course>>
{
  constructor(private courseService: CourseService) {}

  execute(params: QueryParams<Course>) {
    return this.courseService.find(params);
  }
}

export function provideFindCoursesUseCase() {
  return createUseCaseProvider(FindCoursesUseCase, [CourseService]);
}
