import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  UserSchema,
  UserCollection,
  provideAccounts,
} from '@devmx/account-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserCollection.name, schema: UserSchema },
    ]),
  ],
  providers: [...provideAccounts(JwtService)],
  exports: [...provideAccounts(JwtService)],
})
export class AccountDatabaseModule {}
