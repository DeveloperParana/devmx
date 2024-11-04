import { AccountFeatureAuthComponent } from './account-feature-auth.component';
import { AuthenticationContainer, RegistrationContainer } from './containers';
import { Route } from '@angular/router';

export const accountFeatureAuthRoutes: Route[] = [
  {
    path: '',
    component: AccountFeatureAuthComponent,
    children: [
      {
        path: '',
        component: AuthenticationContainer,
      },
      {
        path: 'nova',
        component: RegistrationContainer,
      },
    ],
  },
];
