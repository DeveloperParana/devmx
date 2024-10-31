import { AlbumFeatureShellComponent } from './album-feature-shell.component';
import { AlbumDetailsContainer, AlbumsContainer } from './containers';
import { Album } from '@devmx/shared-api-interfaces';
import { albumResolver } from './resolvers';
import { Route } from '@angular/router';

export const albumFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Albuns',
    },
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
          breadcrumb: 'Alguns',
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
        component: AlbumDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
