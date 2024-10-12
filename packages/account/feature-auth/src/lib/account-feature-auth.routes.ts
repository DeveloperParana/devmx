import { AccountFeatureAuthComponent } from './account-feature-auth.component';
import { provideAuth } from '@devmx/account-data-access';
import { Route } from '@angular/router';

export const accountFeatureAuthRoutes: Route[] = [
  {
    path: '',
    providers: [provideAuth()],
    component: AccountFeatureAuthComponent,
  },
];
