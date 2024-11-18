import { EventOut } from './event-out';

export interface EventPage extends EventOut {
  start: Date;

  end: Date;
}
