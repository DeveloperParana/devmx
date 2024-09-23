import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  PresentationSchema,
  providePresentations,
  PresentationCollection,
  PresentationCommentSchema,
  PresentationReactionSchema,
  PresentationCommentCollection,
  PresentationReactionCollection,
} from '@devmx/presentation-data-source';


@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PresentationCollection.name,
        schema: PresentationSchema,
      },
      {
        name: PresentationCommentCollection.name,
        schema: PresentationCommentSchema,
      },
      {
        name: PresentationReactionCollection.name,
        schema: PresentationReactionSchema,
      },
    ]),
  ],
  providers: [...providePresentations()],
  exports: [
    ...providePresentations()
  ]
})
export class PresentationDatabaseModule {}
