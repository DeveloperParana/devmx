import { CreateEvent } from './create-event';

export interface UpdateEvent extends Partial<CreateEvent> {
  id: string;
}
