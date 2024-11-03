import { AcademyFeatureShellComponent } from './academy-feature-shell.component';
import { CourseDetailsContainer, CoursesContainer } from './containers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Course } from '@devmx/shared-api-interfaces';
import { courseResolver } from './resolvers';
import { Route } from '@angular/router';

export const academyFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Academia',
    },
    component: AcademyFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        canActivate: [rolesGuard('academic', 'director', 'manager', 'staff')],
        loadChildren: () =>
          import('@devmx/academy-feature-admin').then(
            (m) => m.academyFeatureAdminRoutes
          ),
      },
      {
        path: '',
        data: {
          breadcrumb: 'Cursos',
        },
        component: CoursesContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { course: Course }) => {
            return data.course.name;
          },
        },
        resolve: { course: courseResolver },
        component: CourseDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
