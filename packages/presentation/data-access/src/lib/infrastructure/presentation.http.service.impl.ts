import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { PresentationService } from '@devmx/presentation-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { Presentation } from '@devmx/shared-api-interfaces';

export class PresentationHttpServiceImpl
  extends HttpService<Presentation>
  implements PresentationService {}

export function providePresentationHttpService() {
  return {
    provide: PresentationService,
    useFactory(http: HttpClient, env: Env) {
      return new PresentationHttpServiceImpl(http, env, 'presentations');
    },
    deps: [HttpClient, Env],
  };
}
