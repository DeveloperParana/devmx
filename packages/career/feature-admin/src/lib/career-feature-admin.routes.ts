import { CareerFeatureAdminComponent } from './career-feature-admin.component';
import { MyOffersContainer } from './containers';
import { Route } from '@angular/router';

export const careerFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    component: CareerFeatureAdminComponent,
    children: [
      {
        path: 'minhas-ofertas',
        data: {
          breadcrumb: 'Minhas ofertas',
        },
        component: MyOffersContainer,
      },
    ],
  },
];
