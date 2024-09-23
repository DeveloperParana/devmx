import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { PresentationContainer, PresentationsContainer } from './containers';
import { providePresentation } from '@devmx/presentation-data-access';
import { provideAccount } from '@devmx/account-data-access';
import { Route } from '@angular/router';

export const presentationFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [...providePresentation(), ...provideAccount()],
    component: PresentationFeatureShellComponent,
    children: [
      {
        path: ':id',
        component: PresentationContainer,
      },
      {
        path: '',
        component: PresentationsContainer,
      },
    ],
  },
];
