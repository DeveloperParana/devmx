import { EditableEntity, QueryFilter } from '@devmx/shared-api-interfaces';
import { CoursesService } from '@devmx/academy-domain/server';
import { Query, RootFilterQuery } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { CourseCollection } from '../schemas';
import {
  MongoService,
  createQueryFilterIn,
  createServiceProvider,
} from '@devmx/shared-data-source';

export class CoursesMongoServiceImpl
  extends MongoService<CourseCollection>
  implements CoursesService
{
  protected override applyFilter(filter: QueryFilter<CourseCollection>) {
    const ids = (filter.contributors ?? []) as string[];
    return filter.contributors
      ? createQueryFilterIn(filter, 'contributors', ...ids)
      : ({ ...filter } as RootFilterQuery<CourseCollection>);
  }

  protected override applyPopulate<U>(query: Query<U, CourseCollection>) {
    return query
      .populate('owner', 'name displayName profile')
      .populate('institution', 'name')
      .populate('contributors')
      .populate('subjects');
  }

  protected override applyEditableParser<U>(
    data: EditableEntity<CourseCollection>
  ): U {
    const institution =
      typeof data.institution === 'string'
        ? data.institution
        : data.institution.id;

    const contributors = (data.contributors ?? []).map((p) => {
      return typeof p === 'string' ? p : p.id;
    });

    return { ...data, contributors, institution } as U;
  }
}

export function provideCoursesMongoService() {
  return createServiceProvider(CoursesService, CoursesMongoServiceImpl, [
    getModelToken(CourseCollection.name),
  ]);
}
