import { AccountsModule } from './accounts/accounts.module';
import { SharedModule, DatabaseModule } from './shared';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { env } from '../envs/env';

@Module({
  imports: [SharedModule.forRoot(env), DatabaseModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
