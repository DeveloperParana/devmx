import { createSchema } from '@devmx/shared-data-source';
import { PresentationsController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import {
  PresentationSchema,
  providePresentations,
  PresentationCommentSchema,
  PresentationReactionSchema,
} from '@devmx/presentation-data-source';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PresentationSchema.name,
        schema: createSchema(PresentationSchema),
      },
      {
        name: PresentationCommentSchema.name,
        schema: createSchema(PresentationCommentSchema),
      },
      {
        name: PresentationReactionSchema.name,
        schema: createSchema(PresentationReactionSchema),
      },
    ]),
  ],
  controllers: [PresentationsController],
  providers: [...providePresentations()],
  exports: [],
})
export class PresentationResourceModule {}
