import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  provideCareers,
  SkillCollection,
  SkillSchema,
  JobOpeningCollection,
  JobOpeningSchema,
} from '@devmx/career-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SkillCollection.name,
        schema: SkillSchema,
      },
      {
        name: JobOpeningCollection.name,
        schema: JobOpeningSchema,
      },
    ]),
  ],
  providers: [...provideCareers()],
  exports: [...provideCareers()],
})
export class CareerDatabaseModule {}
