import { PresentationService } from '@devmx/presentation-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import { PresentationServiceImpl } from '../services';

export function providePresentationService() {
  return {
    provide: PresentationService,
    useFactory(http: HttpClient, env: Env) {
      return new PresentationServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}
