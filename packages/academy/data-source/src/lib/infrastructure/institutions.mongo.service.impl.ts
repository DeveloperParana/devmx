import { MongoService, createServiceProvider } from '@devmx/shared-data-source';
import { InstitutionsService } from '@devmx/academy-domain/server';
import { InstitutionCollection } from '../schemas';
import { getModelToken } from '@nestjs/mongoose';

export class InstitutionsMongoServiceImpl
  extends MongoService<InstitutionCollection>
  implements InstitutionsService {}

export function provideInstitutionsMongoService() {
  return createServiceProvider(
    InstitutionsService,
    InstitutionsMongoServiceImpl,
    [getModelToken(InstitutionCollection.name)]
  );
}
