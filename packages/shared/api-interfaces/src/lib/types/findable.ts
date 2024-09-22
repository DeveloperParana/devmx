import { Entity } from '../interfaces';

export type Findable<T extends Entity> = Partial<T> & Required<Pick<T, 'id'>>;
