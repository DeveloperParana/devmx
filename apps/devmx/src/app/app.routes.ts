import { PresentationsContainer } from './presentations';
import { AuthContainer } from './auth/auth.container';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    component: AuthContainer
  },
  {
    path: '',
    component: PresentationsContainer
  }
];
