import { AccountFeatureBoardComponent } from './account-feature-board.component';
import { Route } from '@angular/router';

export const accountFeatureBoardRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Dashboard'
    },
    component: AccountFeatureBoardComponent,
  },
];
