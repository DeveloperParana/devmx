import { AccountFeatureBoardComponent } from './account-feature-board.component';
import { roleGroupGuard } from './guards';
import { Route } from '@angular/router';

export const accountFeatureBoardRoutes: Route[] = [
  {
    path: '',
    component: AccountFeatureBoardComponent,
    canActivate: [roleGroupGuard('board')],
  },
];
