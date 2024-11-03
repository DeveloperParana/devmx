import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Course } from '@devmx/shared-api-interfaces';

export abstract class CoursesService extends EntityService<Course> {}
