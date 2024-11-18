import { EventFormat } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showEventAddress',
  standalone: true,
})
export class ShowEventAddressPipe implements PipeTransform {
  transform(value: EventFormat) {
    return ['in-person', 'mixed'].includes(value);
  }
}
