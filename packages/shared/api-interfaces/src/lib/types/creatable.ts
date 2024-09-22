import { Entity } from '../interfaces';

export type Creatable<T extends Entity> = Omit<T, 'id'>;
