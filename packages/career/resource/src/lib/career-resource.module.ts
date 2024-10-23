import { CareersController, SkillsController } from './controllers';
import { CareerDatabaseModule } from './career-database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CareerDatabaseModule],
  controllers: [CareersController, SkillsController],
  providers: [],
  exports: [],
})
export class CareerResourceModule {}
