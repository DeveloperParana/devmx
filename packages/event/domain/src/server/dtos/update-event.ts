import { CreateEvent } from './create-event';

export interface UpdateEvent extends CreateEvent {
  id: string;
}
