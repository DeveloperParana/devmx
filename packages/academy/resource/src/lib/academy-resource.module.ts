import { InstitutionDatabaseModule } from './academy-database.module';
import { Module } from '@nestjs/common';
import {
  CoursesController,
  InstitutionsController,
  SubjectsController,
} from './controllers';

@Module({
  imports: [InstitutionDatabaseModule],
  controllers: [InstitutionsController, SubjectsController, CoursesController],
})
export class AcademyResourceModule {}
