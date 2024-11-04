import { JobOpening } from '../entities';
import { UserRef } from './user-ref';

export interface JobOpeningOut extends Omit<JobOpening, 'owner'> {
  owner: UserRef;
}
