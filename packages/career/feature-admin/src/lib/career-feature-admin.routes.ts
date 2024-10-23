import { CareerFeatureAdminComponent } from './career-feature-admin.component';
import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { JobContainer, MyOffersContainer } from './containers';
import { Job } from '@devmx/shared-api-interfaces';
import { jobResolver } from './resolvers';
import { Route } from '@angular/router';
import { provideSkillDialog } from './dialogs';

export const careerFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    providers: [provideFormDialog(), provideSkillDialog()],
    component: CareerFeatureAdminComponent,
    children: [
      {
        path: 'minhas-ofertas/:id',
        data: {
          breadcrumb: (data: { job: Job }) => {
            return data.job.title;
          },
        },
        resolve: { job: jobResolver },
        component: JobContainer,
      },
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
