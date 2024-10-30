import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { PresentationsService } from '@devmx/presentation-domain/server';
import { PresentationCollection } from '../schemas';
import { getModelToken } from '@nestjs/mongoose';
import { Query } from 'mongoose';

export class PresentationsMongoServiceImpl extends MongoService<PresentationCollection> {
  protected override applyPopulate<U>(query: Query<U, PresentationCollection>) {
    return query.populate('owner', 'name username photo');
    // .populate('presentations')
    // .populate('leaders');
  }
}

export function providePresentationsMongoService() {
  return createServiceProvider(
    PresentationsService,
    PresentationsMongoServiceImpl,
    [getModelToken(PresentationCollection.name)]
  );
}
