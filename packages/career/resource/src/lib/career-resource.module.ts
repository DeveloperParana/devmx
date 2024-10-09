import { CareerDatabaseModule } from './career-database.module';
import { CareersController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [CareerDatabaseModule],
  controllers: [CareersController],
  providers: [],
  exports: [],
})
export class CareerResourceModule {}
