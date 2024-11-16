import { albumFeatureShellProviders } from './album-feature-shell.providers';
import { AlbumFeatureShellComponent } from './album-feature-shell.component';
import { AlbumContainer, AlbumsContainer } from './containers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Album } from '@devmx/shared-api-interfaces';
import { albumResolver } from './resolvers';
import { Route } from '@angular/router';

export const albumFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Albuns',
    },
    canActivate: [rolesGuard('member')],
    providers: albumFeatureShellProviders,
    component: AlbumFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        loadChildren: () =>
          import('@devmx/album-feature-admin').then(
            (m) => m.albumFeatureAdminRoutes
          ),
      },
      {
        path: '',
        data: {
          breadcrumb: 'Albuns',
        },
        component: AlbumsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { album: Album }) => {
            return data.album.title;
          },
        },
        resolve: { album: albumResolver },
        component: AlbumContainer,
      },
      // {
      //   path: ':id',
      //   data: {
      //     breadcrumb: (data: { album: Album }) => {
      //       return data.album.title;
      //     },
      //   },
      //   resolve: { album: albumResolver },
      //   component: AlbumDetailsContainer,
      //   outlet: 'right',
      // },
    ],
  },
];
