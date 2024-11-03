import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { SubjectsService } from '@devmx/academy-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { SubjectCollection } from '../schemas';

export class SubjectsMongoServiceImpl
  extends MongoService<SubjectCollection>
  implements SubjectsService {}

export function provideSubjectsMongoService() {
  return createServiceProvider(SubjectsService, SubjectsMongoServiceImpl, [
    getModelToken(SubjectCollection.name),
  ]);
}
