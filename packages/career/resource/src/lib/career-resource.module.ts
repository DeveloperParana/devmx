import { CareerDatabaseModule } from './career-database.module';
import { JobOpeningsController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [CareerDatabaseModule],
  controllers: [JobOpeningsController],
  providers: [],
  exports: [],
})
export class CareerResourceModule {}
