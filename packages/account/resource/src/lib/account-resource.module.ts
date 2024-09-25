import { PresentationDatabaseModule } from '@devmx/presentation-resource';
import { AccountDatabaseModule } from './account-database.module';
import { Env } from '@devmx/shared-api-interfaces/server';
import { MulterModule } from '@nestjs/platform-express';
import { AuthGuard, JwtAuthGuard } from './guards';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {
  AuthController,
  AccountsController,
  CitiesController,
} from './controllers';

@Module({
  imports: [
    PassportModule,
    MulterModule.registerAsync({
      useFactory(env: Env) {
        return env.multer.photos;
      },
      inject: [Env],
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
  controllers: [AuthController, AccountsController, CitiesController],
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
