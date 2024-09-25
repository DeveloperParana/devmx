import { AccountFeatureAuthComponent } from './account-feature-auth.component';
import { provideAccount } from '@devmx/account-data-access';
import { Route } from '@angular/router';

export const accountFeatureAuthRoutes: Route[] = [
  {
    path: '',
    providers: [provideAccount()],
    component: AccountFeatureAuthComponent,
  },
];
