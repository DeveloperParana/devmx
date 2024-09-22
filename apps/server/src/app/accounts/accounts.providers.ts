import { AccountsFacade, PresentationsFacade } from './facades';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Env } from '../shared';
import {
  Account,
  Presentation,
  PresentationComment,
  PresentationReaction,
} from './schemas';
import {
  JwtService,
  CryptoService,
  CryptoServiceImpl,
  AuthService,
  AuthServiceImpl,
  AccountsService,
  AccountsServiceImpl,
  PresentationsService,
  PresentationsServiceImpl,
} from './services';
import { JwtStrategy } from './strategies';

export function provideCryptoService() {
  return {
    provide: CryptoService,
    useClass: CryptoServiceImpl,
  };
}

export function provideJwtService<T>(JwtServiceImpl: T) {
  return {
    provide: JwtService,
    useClass: JwtServiceImpl,
  };
}

export function provideJwtStrategy() {
  return {
    provide: JwtStrategy,
    useFactory(env: Env) {
      return new JwtStrategy(env);
    },
    inject: [Env],
  };
}

export function provideAccountsService() {
  return {
    provide: AccountsService,
    useFactory(model: Model<Account>) {
      return new AccountsServiceImpl(model);
    },
    inject: [getModelToken(Account.name)],
  };
}

export function provideAccountsFacade() {
  return {
    provide: AccountsFacade,
    useFactory(accountsService: AccountsService, presentationsService: PresentationsService) {
      return new AccountsFacade(accountsService, presentationsService);
    },
    inject: [AccountsService, PresentationsService],
  };
}

export function provideAuthService() {
  return {
    provide: AuthService,
    useFactory(
      accountsService: AccountsService,
      cryptoService: CryptoService,
      jwtService: JwtService,
      env: Env
    ) {
      return new AuthServiceImpl(
        accountsService,
        cryptoService,
        jwtService,
        env
      );
    },
    inject: [AccountsService, CryptoService, JwtService, Env],
  };
}

export function providePresentationsService() {
  return {
    provide: PresentationsService,
    useFactory(
      presentationModel: Model<Presentation>,
      presentationCommentModel: Model<PresentationComment>,
      presentationReactionModel: Model<PresentationReaction>
    ) {
      return new PresentationsServiceImpl(
        presentationModel,
        presentationCommentModel,
        presentationReactionModel
      );
    },
    inject: [
      getModelToken(Presentation.name),
      getModelToken(PresentationComment.name),
      getModelToken(PresentationReaction.name),
    ],
  };
}

export function providePresentationsFacade() {
  return {
    provide: PresentationsFacade,
    useFactory(presentationsService: PresentationsService) {
      return new PresentationsFacade(presentationsService);
    },
    inject: [PresentationsService],
  };
}

/**
 *  _____         _
 * |_   _|__  ___| |_ ___
 *   | |/ _ \/ __| __/ __|
 *   | |  __/\__ \ |_\__ \
 *   |_|\___||___/\__|___/
 */

export function provideCryptoServiceTest() {
  return {
    provide: CryptoService,
    useValue: {
      hash() {
        //
      },
      compare() {
        //
      },
    },
  };
}

export function provideAuthServiceTest() {
  return {
    provide: AuthService,
    useValue: {
      signIn() {
        //
      },
    },
  };
}

export function provideAccountsServiceTest() {
  return {
    provide: AccountsService,
    useValue: {
      create() {
        //
      },
      find() {
        //
      },
      findOne() {
        //
      },
      update() {
        //
      },
      remove() {
        //
      },
    },
  };
}

export function providePresentationsServiceTest() {
  return {
    provide: PresentationsService,
    useValue: {
      create() {
        //
      },
      find() {
        //
      },
      findOne() {
        //
      },
      update() {
        //
      },
      remove() {
        //
      },
    },
  };
}
