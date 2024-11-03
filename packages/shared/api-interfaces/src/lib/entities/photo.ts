import { ImageMimeType } from '../types';

export interface Photo {
  id: string;

  data: string;

  type: ImageMimeType;

  caption?: string;
}
