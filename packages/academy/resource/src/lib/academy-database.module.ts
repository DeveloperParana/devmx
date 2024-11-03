import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  InstitutionSchema,
  provideAcademies,
  InstitutionCollection,
  SubjectCollection,
  SubjectSchema,
  CourseCollection,
  CourseSchema,
} from '@devmx/academy-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: InstitutionCollection.name,
        schema: InstitutionSchema,
      },
      {
        name: SubjectCollection.name,
        schema: SubjectSchema,
      },
      {
        name: CourseCollection.name,
        schema: CourseSchema,
      },
    ]),
  ],
  providers: [...provideAcademies()],
  exports: [...provideAcademies()],
})
export class InstitutionDatabaseModule {}
