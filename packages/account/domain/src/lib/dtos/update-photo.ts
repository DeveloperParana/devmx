import { UserProfile } from '@devmx/shared-api-interfaces';

export interface UpdatePhoto extends Omit<UserProfile, 'photo'> {
  photo: Blob;
  id: string;
}
