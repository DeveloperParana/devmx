import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AccountSchema,
  provideAccounts,
  AccountCollection,
  CityCollection,
  CitySchema,
} from '@devmx/account-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountCollection.name, schema: AccountSchema },
      { name: CityCollection.name, schema: CitySchema },
    ]),
  ],
  providers: [...provideAccounts(JwtService)],
  exports: [...provideAccounts(JwtService)],
})
export class AccountDatabaseModule {}
