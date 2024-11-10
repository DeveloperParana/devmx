import { AcademyDatabaseModule } from './academy-database.module';
import { Module } from '@nestjs/common';
import {
  CoursesController,
  InstitutionsController,
  SubjectsController,
} from './controllers';

@Module({
  imports: [AcademyDatabaseModule],
  controllers: [InstitutionsController, SubjectsController, CoursesController],
})
export class AcademyResourceModule {}
