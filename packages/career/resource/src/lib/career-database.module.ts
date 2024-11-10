import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  provideCareers,
  JobOpeningCollection,
  JobOpeningSchema,
} from '@devmx/career-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
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
