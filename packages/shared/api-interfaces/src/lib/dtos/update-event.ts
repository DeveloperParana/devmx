import { ConvertRelationsToID } from '../../lib/types';
import { Event } from '../../lib/entities';

export type UpdateEvent = ConvertRelationsToID<Event>;
