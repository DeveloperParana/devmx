import { RSVPStatus } from '@devmx/shared-api-interfaces';

export interface CreateRSVP {
  user: string;

  event: string;

  status: RSVPStatus;
}
