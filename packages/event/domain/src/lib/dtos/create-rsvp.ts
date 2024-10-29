import { RSVPStatus } from '@devmx/shared-api-interfaces';

export interface CreateRSVP {
  account: string;

  event: string;

  status: RSVPStatus;
}
