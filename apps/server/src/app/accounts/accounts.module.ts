import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard, JwtAuthGuard } from './guards';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
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
  provideJwtStrategy,
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
    provideJwtStrategy(),
    provideAuthService(),
    provideAccountsService(),
    providePresentationsService(),
    provideAccountsFacade(),
    providePresentationsFacade(),
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AccountsModule {}
