import { AccountRef } from './account-ref';
import { Presentation } from '../entities';

export interface PresentationOut extends Omit<Presentation, 'owner'> {
  owner: AccountRef;
}
