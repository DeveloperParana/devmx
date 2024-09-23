import { PresentationDatabaseModule } from '@devmx/presentation-resource';
import { AuthController, AccountsController } from './controllers';
import { AccountDatabaseModule } from './account-database.module';
import { Env } from '@devmx/shared-api-interfaces/server';
import { MulterModule } from '@nestjs/platform-express';
import { AuthGuard, JwtAuthGuard } from './guards';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { join } from 'node:path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    PassportModule,
    MulterModule.register({
      dest: join(__dirname, 'assets', 'photos'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'assets'),
    }),
    JwtModule.registerAsync({
      useFactory(env: Env) {
        return {
          global: true,
          secret: env.jwt.secret,
          signOptions: { expiresIn: '3660s' },
        };
      },
      inject: [Env],
    }),
    AccountDatabaseModule,
    PresentationDatabaseModule,
  ],
  controllers: [AuthController, AccountsController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [],
})
export class AccountResourceModule {}
