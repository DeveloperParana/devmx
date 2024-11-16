import { UserRef } from '../dtos';
import { ImageMimeType } from '../types';

export interface Photo {
  id: string;

  data: string;

  width: number;

  height: number;

  type: ImageMimeType;

  caption?: string;

  tagged?: UserRef[];
}
