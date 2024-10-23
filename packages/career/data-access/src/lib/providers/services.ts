import { Env } from '@devmx/shared-api-interfaces/client';
import { JobService } from '@devmx/career-domain/client';
import { HttpClient } from '@devmx/shared-data-access';
import { JobServiceImpl } from '../services';
import { provideSkillHttpService } from '../infrastructure';

export function provideJobService() {
  return {
    provide: JobService,
    useFactory(http: HttpClient, env: Env) {
      return new JobServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}

export function provideServices() {
  return [provideJobService(), provideSkillHttpService()];
}
