import { ImageMimeType } from '@devmx/shared-api-interfaces';
import { OpenGraph } from './open-graph';

export interface ImageOpenGraph extends OpenGraph {
  image: string;
  type: ImageMimeType;
  width: number;
  height: number;
}
