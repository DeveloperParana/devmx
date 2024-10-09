import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  JobSchema,
  JobCollection,
  provideCareers,
} from '@devmx/career-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: JobCollection.name,
        schema: JobSchema,
      },
    ]),
  ],
  providers: [...provideCareers()],
  exports: [...provideCareers()],
})
export class CareerDatabaseModule {}
