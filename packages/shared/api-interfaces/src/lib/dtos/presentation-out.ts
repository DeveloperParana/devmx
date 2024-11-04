import { UserRef } from './user-ref';
import { Presentation } from '../entities';

export interface PresentationOut extends Omit<Presentation, 'owner'> {
  owner: UserRef;
}
