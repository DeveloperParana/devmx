import { Course } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  CourseFacade,
  courseResolverWrapped,
} from '@devmx/academy-data-access';

export const courseResolver: ResolveFn<Course> = (route) => {
  return courseResolverWrapped(inject(CourseFacade), route.params);
};
