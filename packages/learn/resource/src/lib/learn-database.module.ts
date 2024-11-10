import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  provideLearns,
  SkillCollection,
  SkillSchema,
} from '@devmx/learn-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SkillCollection.name,
        schema: SkillSchema,
      },
    ]),
  ],
  providers: [...provideLearns()],
  exports: [...provideLearns()],
})
export class LearnDatabaseModule {}
