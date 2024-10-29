import { EditableEntity } from '../types';
import { Event } from '../entities';

// export type CreateEvent = ConvertRelationsToID<Omit<Event, 'id'>>;
export type CreateEvent = EditableEntity<Event>;
