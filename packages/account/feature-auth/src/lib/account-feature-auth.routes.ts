import { AccountFeatureAuthComponent } from './account-feature-auth.component';
import { accountFeatureAuthProviders } from './account-feature-auth.providers';
import { AuthenticationContainer, RegistrationContainer } from './containers';
import { Route } from '@angular/router';

export const accountFeatureAuthRoutes: Route[] = [
  {
    path: '',
    providers: accountFeatureAuthProviders,
    component: AccountFeatureAuthComponent,
    children: [
      {
        path: 'acessar',
        component: AuthenticationContainer,
      },
      {
        path: 'cadastrar',
        component: RegistrationContainer,
      },
      {
        path: '',
        redirectTo: 'acessar',
        pathMatch: 'full',
      },
    ],
  },
];
