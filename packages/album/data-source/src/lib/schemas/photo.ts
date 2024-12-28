import { UserCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { userTag } from './user-tag';
import { toBase64 } from '../utils';
import {
  Album,
  Photo,
  UserTag,
  ImageMimeType,
} from '@devmx/shared-api-interfaces';


@Schema({ timestamps: { createdAt: true } })
export class PhotoCollection extends Document implements Photo {
  override id: string;

  @Prop({ required: true, type: Buffer })
  content: Buffer;

  get data() {
    if (!this.content || !this.type) {
      return '';
    }

    return toBase64(this.type, this.content.toString('base64'));
  }

  @Prop({ required: true, type: Number })
  width: number;

  @Prop({ required: true, type: Number })
  height: number;

  @Prop({
    type: String,
    enum: [
      'image/avif',
      'image/bmp',
      'image/gif',
      'image/jpeg',
      'image/svg+xml',
      'image/png',
      'image/apng',
      'image/webp',
    ],
    default: 'image/webp',
  })
  type: ImageMimeType;

  @Prop({ type: String })
  caption?: string;

  @Prop({
    type: [userTag],
    default: [],
  })
  tags?: UserTag[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AlbumCollection',
    required: true,
  })
  album: Album;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: UserCollection.name,
    required: true,
  })
  owner: UserCollection;

  @Prop({ type: Date })
  createdAt: Date;
}

export const PhotoSchema = createSchema(PhotoCollection);
