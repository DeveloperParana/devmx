import { AlbumFeatureAdminComponent } from './album-feature-admin.component';
import { albumFeatureAdminProviders } from './album-feature-admin.providers';
import { AlbumContainer, MyAlbumsContainer } from './containers';
import { Album } from '@devmx/shared-api-interfaces';
import { albumResolver } from './resolvers';
import { Route } from '@angular/router';

export const albumFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    providers: albumFeatureAdminProviders,
    component: AlbumFeatureAdminComponent,
    children: [
      {
        path: 'meus-albuns/:id',
        data: {
          breadcrumb: (data: { album: Album }) => {
            return data.album.title;
          },
        },
        resolve: { album: albumResolver },
        component: AlbumContainer,
      },
      {
        path: 'meus-albuns',
        data: {
          breadcrumb: 'Meus albuns',
        },
        component: MyAlbumsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'meus-albuns',
      },
    ],
  },
];
