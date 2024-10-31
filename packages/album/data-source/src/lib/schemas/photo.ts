import { Album, ImageMimeType, Photo } from '@devmx/shared-api-interfaces';
import { createSchema } from '@devmx/shared-data-source';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

function toBase64(type: string, content: string) {
  return `data:${type};base64,${content}`;
}

@Schema()
export class PhotoCollection extends Document implements Photo {
  override id: string;

  @Prop({ required: true, type: Buffer })
  content: Buffer;

  get data() {
    const hasPhoto = this.content && this.type;
    return hasPhoto ? toBase64(this.type, this.content.toString('base64')) : '';
  }

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AlbumCollection',
    required: true,
  })
  album: Album
}

export const PhotoSchema = createSchema(PhotoCollection);
