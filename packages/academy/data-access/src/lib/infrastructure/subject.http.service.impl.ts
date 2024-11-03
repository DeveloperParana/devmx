import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { SubjectService } from '@devmx/academy-domain/client';
import { Subject } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';

export class SubjectHttpServiceImpl
  extends HttpService<Subject>
  implements SubjectService {}

export function provideSubjectHttpService() {
  return {
    provide: SubjectService,
    useFactory(http: HttpClient, env: Env) {
      return new SubjectHttpServiceImpl(http, env, 'subjects');
    },
    deps: [HttpClient, Env],
  };
}
