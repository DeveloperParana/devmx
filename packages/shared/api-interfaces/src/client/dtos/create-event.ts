import { ConvertRelationsToID } from '../../lib/types';
import { Event } from '../../lib/entities';

export type CreateEvent = ConvertRelationsToID<Omit<Event, 'id'>>;
