import { PresentationDatabaseModule } from './presentation-database.module';
import { PresentationsController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [PresentationDatabaseModule],
  controllers: [PresentationsController],
  providers: [],
  exports: [],
})
export class PresentationResourceModule {}
