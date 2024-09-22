import { Account } from '@devmx/shared-api-interfaces';

export type UpdateAccount = Partial<Omit<Account, 'password'>>;
