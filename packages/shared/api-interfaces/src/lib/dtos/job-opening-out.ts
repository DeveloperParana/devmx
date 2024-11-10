import { JobOpening, User } from '../entities';

export type JobOpeningRef = Pick<User, 'displayName' | 'name' | 'profile' | 'id'>;

export interface JobOpeningOut extends JobOpening {
  owner: JobOpeningRef;
}
