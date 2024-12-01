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
        title: 'Acessar',
        component: AuthenticationContainer,
      },
      {
        path: 'cadastrar',
        title: 'Cadastrar',
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
