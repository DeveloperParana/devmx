import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { providePresentation } from '@devmx/presentation-data-access';
import { PresentationOut } from '@devmx/shared-api-interfaces';
import { presentationResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  PresentationDetailsContainer,
  PresentationsContainer,
} from './containers';

export const presentationFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [...providePresentation()],
    data: {
      breadcrumb: 'Apresentações',
    },
    component: PresentationFeatureShellComponent,
    children: [
      {
        path: '',
        component: PresentationsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { presentation: PresentationOut }) => {
            return data.presentation.title;
          },
        },
        resolve: { presentation: presentationResolver },
        component: PresentationDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
