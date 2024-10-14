import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { provideAutocompleteCitiesService } from '@devmx/location-ui-forms';
import { providePresentation } from '@devmx/presentation-data-access';
import { roleGroupsGuard, roleGroupGuard, roleGuard } from './guards';
import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideLocation } from '@devmx/location-data-access';
import { provideCareer } from '@devmx/career-data-access';
import { provideAbout } from '@devmx/account-data-access';
import { aboutResolver, jobResolver } from './resolvers';
import { provideEvent } from '@devmx/event-data-access';
import { JobOut } from '@devmx/shared-api-interfaces';
import { Route } from '@angular/router';
import {
  JobContainer,
  AboutContainer,
  JobsContainer,
  SettingsContainer,
  PresentationContainer,
  PresentationsContainer,
  HomeContainer,
  SignOutContainer,
} from './containers';

export const accountFeatureShellRoutes: Route[] = [
  {
    path: 'conta/auth',
    loadChildren: () =>
      import('@devmx/account-feature-auth').then(
        (m) => m.accountFeatureAuthRoutes
      ),
  },
  {
    path: 'sobre/:username',
    providers: [...provideAbout()],
    resolve: { account: aboutResolver },
    component: AboutContainer,
  },
  {
    path: 'conta',
    providers: [
      ...providePresentation(),
      ...provideEvent(),
      ...provideLocation(),
      ...provideCareer(),
      provideAutocompleteCitiesService(),
      provideFormDialog(),
    ],
    canActivate: [roleGuard('member')],
    component: AccountFeatureShellComponent,
    data: {
      breadcrumb: 'Conta',
    },
    children: [
      {
        path: 'administracao',
        canActivate: [roleGroupsGuard('worthy', 'board')],
        loadChildren: async () => {
          return import('@devmx/account-feature-admin').then(
            (m) => m.accountFeatureAdminRoutes
          );
        },
      },
      {
        path: 'dashboard',
        canActivate: [roleGroupGuard('board')],
        loadChildren: async () => {
          return import('@devmx/account-feature-board').then(
            (m) => m.accountFeatureBoardRoutes
          );
        },
      },
      {
        path: 'minhas-apresentacoes/:id',
        canActivate: [roleGuard('speaker')],
        component: PresentationContainer,
      },
      {
        path: 'minhas-apresentacoes',
        data: {
          breadcrumb: 'Minhas apresentações',
        },
        canActivate: [roleGuard('speaker')],
        component: PresentationsContainer,
      },
      {
        path: 'minhas-vagas/:id',
        data: {
          breadcrumb: (data: { job: JobOut }) => {
            return data.job.title;
          },
        },
        resolve: { job: jobResolver },
        component: JobContainer,
      },
      {
        path: 'minhas-vagas',
        data: {
          breadcrumb: 'Minhas vagas',
        },
        canActivate: [roleGuard('recruiter')],
        component: JobsContainer,
      },
      {
        path: 'configuracoes',
        data: {
          breadcrumb: 'Configurações',
        },
        component: SettingsContainer,
      },
      {
        path: 'sair',
        component: SignOutContainer,
      },
      {
        path: '',
        component: HomeContainer,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'conta',
  },
];
