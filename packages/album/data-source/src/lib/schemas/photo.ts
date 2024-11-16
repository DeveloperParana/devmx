import { Album, ImageMimeType, Photo } from '@devmx/shared-api-interfaces';
import { UserCollection } from '@devmx/account-data-source';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

function toBase64(type: string, content: string) {
  return `data:${type};base64,${content}`;
}

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
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: UserCollection.name }],
  })
  tagged: UserCollection[];

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
