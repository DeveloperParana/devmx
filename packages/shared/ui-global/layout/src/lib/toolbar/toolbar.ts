import { AuthUser } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class AuthUserFacade {
  abstract user$: Observable<AuthUser | null>;

  abstract signOut(): void
}

export class LayoutToolbar {
  constructor(readonly auth: AuthUserFacade) {}
}
