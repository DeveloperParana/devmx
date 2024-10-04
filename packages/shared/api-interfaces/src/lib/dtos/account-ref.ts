import { Account } from '../entities';

export type AccountRef = Pick<Account, 'id' | 'name' | 'username' | 'photo'>;
