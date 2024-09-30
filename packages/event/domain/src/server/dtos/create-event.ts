import { EventFormat } from '@devmx/shared-api-interfaces';

export interface CreateEvent {
  title: string;

  description: string;

  format: EventFormat;

  date: string;

  time: string;

  cover?: string;

  visible?: boolean;

  address: string;

  city?: string;

  location?: string;
}
