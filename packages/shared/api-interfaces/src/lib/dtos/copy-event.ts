import { Event } from '../entities';

export type CopyEvent = Pick<Event, 'id' | 'title'>;
