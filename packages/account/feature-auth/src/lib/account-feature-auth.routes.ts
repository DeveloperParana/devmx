import { AccountFeatureAuthComponent } from './account-feature-auth.component';
import { Route } from '@angular/router';
import {
  provideAccount
} from '@devmx/account-data-access';

export const accountFeatureAuthRoutes: Route[] = [
  {
    path: '',
    providers: [provideAccount()],
    component: AccountFeatureAuthComponent,
  },
];
