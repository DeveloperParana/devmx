import { CareerFeaturePageComponent } from './career-feature-page.component';
import { JobOpeningsContainer } from './containers';
import { Route } from '@angular/router';

export const careerFeaturePageRoutes: Route[] = [
  {
    path: '',
    title: 'Vagas',
    component: CareerFeaturePageComponent,
    children: [
      {
        path: '',
        component: JobOpeningsContainer,
      },
    ],
  },
];
