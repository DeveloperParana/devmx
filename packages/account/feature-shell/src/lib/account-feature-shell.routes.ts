import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { accountFeatureShellSidenav } from './account-feature-shell.sidenav';
import { provideAutocompleteCitiesService } from '@devmx/location-ui-forms';
import { providePresentation } from '@devmx/presentation-data-access';
import { roleGroupsGuard, roleGroupGuard, roleGuard } from './guards';
import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideLocation } from '@devmx/location-data-access';
import { provideCareer } from '@devmx/career-data-access';
import { aboutResolver, jobResolver } from './resolvers';
import { provideEvent } from '@devmx/event-data-access';
import { JobOut } from '@devmx/shared-api-interfaces';
import { SidenavLeftOutlet } from './outlets';
import { Route } from '@angular/router';
import {
  AuthFacade,
  provideAbout,
  provideAccount,
} from '@devmx/account-data-access';
import {
  provideLayout,
  provideLayoutSidenav,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';
import {
  JobContainer,
  AboutContainer,
  JobsContainer,
  SettingsContainer,
  PresentationContainer,
  PresentationsContainer,
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
      ...provideAccount(),
      ...providePresentation(),
      ...provideEvent(),
      ...provideLocation(),
      ...provideCareer(),
      provideAutocompleteCitiesService(),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(accountFeatureShellSidenav),
      provideLayout(SidenavLeftOutlet),
      provideFormDialog(),
    ],
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
        path: '',
        pathMatch: 'full',
        redirectTo: 'configuracoes',
      },
    ],
  },
];
