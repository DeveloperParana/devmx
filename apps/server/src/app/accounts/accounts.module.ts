import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AuthGuard } from './guards';
import { Env } from '../shared';
import {
  AuthController,
  AccountsController,
  PresentationsController,
} from './controllers';
import {
  provideAccountsFacade,
  provideAccountsService,
  provideAuthService,
  provideCryptoService,
  provideJwtService,
  providePresentationsFacade,
  providePresentationsService,
} from './accounts.providers';
import {
  Account,
  AccountSchema,
  Presentation,
  PresentationComment,
  PresentationCommentSchema,
  PresentationReaction,
  PresentationReactionSchema,
  PresentationSchema,
} from './schemas';

@Module({
  imports: [
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
      { name: Account.name, schema: AccountSchema },
      { name: Presentation.name, schema: PresentationSchema },
      { name: PresentationComment.name, schema: PresentationCommentSchema },
      { name: PresentationReaction.name, schema: PresentationReactionSchema },
    ]),
  ],
  controllers: [AuthController, AccountsController, PresentationsController],
  providers: [
    provideCryptoService(),
    provideJwtService(JwtService),
    provideAuthService(),
    provideAccountsService(),
    providePresentationsService(),
    provideAccountsFacade(),
    providePresentationsFacade(),
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AccountsModule {}
