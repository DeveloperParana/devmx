import { LearnFeatureAdminComponent } from './learn-feature-admin.component';
import { learnFeatureAdminProviders } from './learn-feature-admin.providers';
import { SkillsContainer } from './containers';
import { Route } from '@angular/router';

export const learnFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    providers: learnFeatureAdminProviders,
    component: LearnFeatureAdminComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumb: 'Habilidades',
        },
        title: 'Administrar hbilidades',
        component: SkillsContainer,
      },
    ],
  },
];
