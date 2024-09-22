import { AccountSchema, provideAccounts } from '@devmx/account-data-source';
import { AuthController, AccountsController } from './controllers';
import { Env } from '@devmx/shared-api-interfaces/server';
import { createSchema } from '@devmx/shared-data-source';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard, JwtAuthGuard } from './guards';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    PassportModule,
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
    MongooseModule.forFeature([
      { name: AccountSchema.name, schema: createSchema(AccountSchema) },
    ]),
  ],
  controllers: [AuthController, AccountsController],
  providers: [
    ...provideAccounts(JwtService),
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
  exports: [],
})
export class AccountResourceModule {}
