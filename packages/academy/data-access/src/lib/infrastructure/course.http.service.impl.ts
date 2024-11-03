import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { CourseService } from '@devmx/academy-domain/client';
import { Course } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';

export class CourseHttpServiceImpl
  extends HttpService<Course>
  implements CourseService {}

export function provideCourseHttpService() {
  return {
    provide: CourseService,
    useFactory(http: HttpClient, env: Env) {
      return new CourseHttpServiceImpl(http, env, 'courses');
    },
    deps: [HttpClient, Env],
  };
}
