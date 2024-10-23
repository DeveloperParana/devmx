import { SkillsService } from '@devmx/career-domain/server';
import { MongoService } from '@devmx/shared-data-source';
import { getModelToken } from '@nestjs/mongoose';
import { SkillCollection } from '../schemas';
import { Model } from 'mongoose';

export class SkillsMongoServiceImpl extends MongoService<SkillCollection> {}

export function provideSkillsMongoService() {
  return {
    provide: SkillsService,
    useFactory(model: Model<SkillCollection>) {
      return new SkillsMongoServiceImpl(model);
    },
    inject: [getModelToken(SkillCollection.name)],
  };
}
