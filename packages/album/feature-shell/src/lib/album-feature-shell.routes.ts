import { albumFeatureShellProviders } from './album-feature-shell.providers';
import { AlbumFeatureShellComponent } from './album-feature-shell.component';
import { Album, Photo } from '@devmx/shared-api-interfaces';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { albumResolver, photoResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  AlbumContainer,
  AlbumsContainer,
  PhotoDetailsContainer,
} from './containers';

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
        path: 'fotos/:id',
        data: {
          breadcrumb: (data: { photo: Photo & { album: Album } }) => {
            return `Foto do album ` + data.photo.album.title;
          },
        },
        title: 'Foto',
        resolve: { photo: photoResolver },
        component: PhotoDetailsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { album: Album }) => {
            return data.album.title;
          },
        },
        title: 'Album de fotos',
        resolve: { album: albumResolver },
        component: AlbumContainer,
      },
      {
        path: '',
        data: {
          breadcrumb: 'Albuns',
        },
        title: 'Albuns',
        component: AlbumsContainer,
      },
    ],
  },
];
