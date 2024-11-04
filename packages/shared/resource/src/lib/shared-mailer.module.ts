import { provideMailerService } from '@devmx/shared-data-source';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [provideMailerService()],
  exports: [provideMailerService()],
})
export class SharedMailerModule {}
