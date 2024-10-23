import { EventFormat } from '@devmx/shared-api-interfaces';

export interface FilterEvent {
  format: EventFormat | '';
  title: string;
  city?: string;
}
