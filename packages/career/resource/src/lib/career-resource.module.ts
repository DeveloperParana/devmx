import { SkillsController, JobOpeningsController } from './controllers';
import { CareerDatabaseModule } from './career-database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CareerDatabaseModule],
  controllers: [SkillsController, JobOpeningsController],
  providers: [],
  exports: [],
})
export class CareerResourceModule {}
