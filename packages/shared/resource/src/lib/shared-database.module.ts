import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory(uri: string) {
        return { uri };
      },
      inject: ['MONGO_URI'],
    }),
  ],
})
export class SharedDatabaseModule {}
