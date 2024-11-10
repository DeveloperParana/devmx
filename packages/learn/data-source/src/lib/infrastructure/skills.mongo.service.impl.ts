import { MongoService, createServiceProvider } from '@devmx/shared-data-source';
import { SkillsService } from '@devmx/learn-domain/server';
import { SkillCollection } from '../schemas';
import { getModelToken } from '@nestjs/mongoose';

export class SkillsMongoServiceImpl
  extends MongoService<SkillCollection>
  implements SkillsService {}

export function provideSkillsMongoService() {
  return createServiceProvider(SkillsService, SkillsMongoServiceImpl, [
    getModelToken(SkillCollection.name),
  ]);
}
