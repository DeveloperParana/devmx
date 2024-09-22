import { Entity } from '../interfaces';

export type Editable<T extends Entity> = Exclude<T, 'id'>;
