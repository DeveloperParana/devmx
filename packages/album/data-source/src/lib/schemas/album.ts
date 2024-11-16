import { UserCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { PhotoCollection, PhotoSchema } from './photo';
import { Album } from '@devmx/shared-api-interfaces';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: true } })
export class AlbumCollection extends Document implements Album {
  override id: string;

  @Prop({ type: String })
  title: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: PhotoCollection.name }],
  })
  photos: PhotoCollection[];

  @Prop({
    type: PhotoSchema,
  })
  cover?: PhotoCollection;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: UserCollection.name }],
  })
  contributors: UserCollection[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserCollection.name,
    required: true,
  })
  owner: UserCollection;

  @Prop({ type: Date })
  createdAt: Date;
}

export const AlbumSchema = createSchema(AlbumCollection);
