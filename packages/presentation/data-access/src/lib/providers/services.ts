import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import {
  PresentationService,
  PresentationCommentService,
} from '@devmx/presentation-domain/client';
import {
  PresentationCommentServiceImpl,
  PresentationServiceImpl,
} from '../services';

export function providePresentationService() {
  return {
    provide: PresentationService,
    useFactory(http: HttpClient, env: Env) {
      return new PresentationServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}

export function providePresentationCommentService() {
  return {
    provide: PresentationCommentService,
    useFactory(http: HttpClient, env: Env) {
      return new PresentationCommentServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}
