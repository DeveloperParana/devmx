import { Presentation, User } from '../entities';

type UserPresentationRef = Pick<
  User,
  'name' | 'displayName' | 'profile' | 'id'
>;

export interface PresentationOut extends Omit<Presentation, 'owner'> {
  owner: UserPresentationRef;
}
