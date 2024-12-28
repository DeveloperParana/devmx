import { ImageMimeType } from '../types';
import { UserTag } from './user-tag';

export interface Photo {
  id: string;

  data: string;

  width: number;

  height: number;

  type: ImageMimeType;

  caption?: string;

  tags?: UserTag[];
}
