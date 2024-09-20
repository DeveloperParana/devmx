import { AccountsFacade, PresentationsFacade } from './facades';
import { Account, Presentation, PresentationComment } from './schemas';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Env } from '../shared';
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
    useFactory(accountsService: AccountsService) {
      return new AccountsFacade(accountsService);
    },
    inject: [AccountsService],
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
      presentationCommentModel: Model<PresentationComment>
    ) {
      return new PresentationsServiceImpl(
        presentationModel,
        presentationCommentModel
      );
    },
    inject: [
      getModelToken(Presentation.name),
      getModelToken(PresentationComment.name),
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
