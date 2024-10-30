import { RSVP } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findInRSVP',
  standalone: true,
})
export class FindInRSVPPipe implements PipeTransform {
  transform(list: RSVP[], account: string) {
    return list.find((item) => item.account.id === account) ?? null;
  }
}
