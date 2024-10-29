import { EditableEntity } from '../../lib/types';
import { Event } from '../../lib/entities';

// export type UpdateEvent = ConvertRelationsToID<Event>;

export type UpdateEvent = EditableEntity<Event>;
