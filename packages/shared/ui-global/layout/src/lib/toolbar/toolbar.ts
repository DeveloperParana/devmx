import { Authentication } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class AuthUserFacade {
  abstract auth$: Observable<Authentication | null>;

  abstract signOut(): void;
}

export class LayoutToolbar {
  constructor(readonly auth: AuthUserFacade) {}
}
