import { AccountRef } from './account-ref';
import { JobOpening } from '../entities';

export interface JobOpeningOut extends Omit<JobOpening, 'owner'> {
  owner: AccountRef;
}
