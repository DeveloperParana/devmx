import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { InstitutionService } from '@devmx/academy-domain/client';
import { Institution } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';

export class InstitutionHttpServiceImpl
  extends HttpService<Institution>
  implements InstitutionService {}

export function provideInstitutionHttpService() {
  return {
    provide: InstitutionService,
    useFactory(http: HttpClient, env: Env) {
      return new InstitutionHttpServiceImpl(http, env, 'institutions');
    },
    deps: [HttpClient, Env],
  };
}
