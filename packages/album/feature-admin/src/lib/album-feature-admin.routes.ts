import { AlbumFeatureAdminComponent } from './album-feature-admin.component';
import { albumFeatureAdminProviders } from './album-feature-admin.providers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Album } from '@devmx/shared-api-interfaces';
import { albumResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  AlbumContainer,
  MyAlbumsContainer,
  ManageAlbumsContainer,
} from './containers';

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
        path: 'gerenciar-albuns',
        data: {
          breadcrumb: 'Gerenciar albuns',
        },
        canActivate: [rolesGuard('director', 'manager', 'staff')],
        component: ManageAlbumsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'meus-albuns',
      },
    ],
  },
];
