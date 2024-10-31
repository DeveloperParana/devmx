import { AccountCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Album } from '@devmx/shared-api-interfaces';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { PhotoCollection } from './photo';

@Schema({ timestamps: { createdAt: true } })
export class AlbumCollection extends Document implements Album {
  override id: string;

  @Prop({ type: String })
  title: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: PhotoCollection.name,
      },
    ],
  })
  photos: PhotoCollection[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: AccountCollection.name,
      },
    ],
  })
  contributors: AccountCollection[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountCollection.name,
    required: true,
  })
  owner: AccountCollection;

  @Prop({ type: Date })
  createdAt: Date;
}

export const AlbumSchema = createSchema(AlbumCollection);
