import { RSVP, RSVPStatus } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rsvpByStatus',
  standalone: true,
})
export class RSVPByStatusPipe implements PipeTransform {
  transform(list: RSVP[], status: RSVPStatus) {
    return list.filter((item) => item.status === status);
  }
}
