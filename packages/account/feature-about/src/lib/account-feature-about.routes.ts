import { AccountFeatureAboutComponent } from './account-feature-about.component';
import { accountFeatureAboutProviders } from './account-feature-about.providers';
import { aboutUserResolver, aboutUserSchemaResolver } from './resolvers';
import { User } from '@devmx/shared-api-interfaces';
import { AboutUserContainer } from './containers';
import { Route } from '@angular/router';

export const accountFeatureAboutRoutes: Route[] = [
  {
    path: ':name',
    providers: accountFeatureAboutProviders,
    component: AccountFeatureAboutComponent,
    data: {
      breadcrumb: 'Sobre',
    },
    resolve: { schema: aboutUserSchemaResolver },
    children: [
      {
        path: '',
        data: {
          breadcrumb: (data: { user: User }) => {
            return data.user.displayName;
          },
        },
        title: 'Sobre um usuário',
        resolve: { about: aboutUserResolver },
        component: AboutUserContainer,
      },
    ],
  },
];
