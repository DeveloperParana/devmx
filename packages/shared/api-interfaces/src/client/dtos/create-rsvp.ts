import { RSVPStatus } from '../../lib/types';

export interface CreateRSVP {
  event: string;

  status: RSVPStatus | '';
}
