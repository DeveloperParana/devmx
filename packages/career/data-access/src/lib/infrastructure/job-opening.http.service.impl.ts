import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { JobOpeningService } from '@devmx/career-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { JobOpening } from '@devmx/shared-api-interfaces';

export class JobOpeningHttpServiceImpl
  extends HttpService<JobOpening>
  implements JobOpeningService {}

export function provideJobOpeningHttpService() {
  return {
    provide: JobOpeningService,
    useFactory(http: HttpClient, env: Env) {
      return new JobOpeningHttpServiceImpl(http, env, 'job-openings');
    },
    deps: [HttpClient, Env],
  };
}
