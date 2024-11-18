import { EventFormat } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showEventLink',
  standalone: true,
})
export class ShowEventLinkPipe implements PipeTransform {
  transform(value: EventFormat) {
    return ['online', 'mixed'].includes(value);
  }
}
