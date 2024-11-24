import { VideoMimeType } from '@devmx/shared-api-interfaces';
import { OpenGraph } from './open-graph';

export interface VideoOpenGraph extends OpenGraph {
  video: string;
  type: VideoMimeType;
  width: number;
  height: number;
}
