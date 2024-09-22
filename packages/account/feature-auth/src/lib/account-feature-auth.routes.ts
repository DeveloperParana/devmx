import { AccountFeatureAuthComponent } from './account-feature-auth.component';
import { Route } from '@angular/router';
import {
  provideAuthFacade,
  provideAuthService,
} from '@devmx/account-data-access';

export const accountFeatureAuthRoutes: Route[] = [
  {
    path: '',
    providers: [provideAuthService(), provideAuthFacade()],
    component: AccountFeatureAuthComponent,
  },
];
