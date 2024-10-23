import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  JobSchema,
  JobCollection,
  provideCareers,
  SkillCollection,
  SkillSchema,
} from '@devmx/career-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: JobCollection.name,
        schema: JobSchema,
      },
      {
        name: SkillCollection.name,
        schema: SkillSchema,
      },
    ]),
  ],
  providers: [...provideCareers()],
  exports: [...provideCareers()],
})
export class CareerDatabaseModule {}
