import { JobOpeningsService } from '@devmx/career-domain/server';
import { MongoService } from '@devmx/shared-data-source';
import { getModelToken } from '@nestjs/mongoose';
import { JobOpeningCollection } from '../schemas';
import { Model, Query } from 'mongoose';

export class JobOpeningsMongoServiceImpl extends MongoService<JobOpeningCollection> {
  protected override applyPopulate<U>(query: Query<U, JobOpeningCollection>) {
    return query.populate('owner', 'name displayName profile').populate('skills');
  }
}

export function provideJobOpeningsMongoService() {
  return {
    provide: JobOpeningsService,
    useFactory(model: Model<JobOpeningCollection>) {
      return new JobOpeningsMongoServiceImpl(model);
    },
    inject: [getModelToken(JobOpeningCollection.name)],
  };
}
