import { ConvertRelationsToID } from '../types';
import { Event } from '../entities';

export type CreateEvent = ConvertRelationsToID<Omit<Event, 'id'>>;
