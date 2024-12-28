import { Photo, UserTag } from '../entities';

export interface UpdatePhotoTags extends Photo {
  tags: UserTag[];
  album: string;
}
