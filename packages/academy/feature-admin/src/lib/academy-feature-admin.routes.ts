import { AcademyFeatureAdminComponent } from './academy-feature-admin.component';
import { academyFeatureAdminProviders } from './academy-feature-admin.providers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Course } from '@devmx/shared-api-interfaces';
import { courseResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  CourseContainer,
  ManageCoursesContainer,
  MyCoursesContainer,
} from './containers';

export const academyFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    title: 'Administração',
    providers: academyFeatureAdminProviders,
    component: AcademyFeatureAdminComponent,
    children: [
      {
        path: 'meus-cursos/novo',
        data: {
          breadcrumb: 'Novo',
        },
        title: 'Novo curso',
        component: CourseContainer,
      },

      {
        path: 'meus-cursos/:id',
        data: {
          breadcrumb: (data: { course: Course }) => {
            return data.course.name;
          },
        },
        title: 'Curso',
        resolve: { course: courseResolver },
        component: CourseContainer,
      },
      {
        path: 'meus-cursos',
        data: {
          breadcrumb: 'Meus cursos',
        },
        title: 'Meus cursos',
        component: MyCoursesContainer,
      },
      {
        path: 'gerenciar-cursos',
        data: {
          breadcrumb: 'Gerenciar cursos',
        },
        title: 'Gerenciar cursos',
        canActivate: [rolesGuard('director', 'manager', 'staff')],
        component: ManageCoursesContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'meus-cursos',
      },
    ],
  },
];
