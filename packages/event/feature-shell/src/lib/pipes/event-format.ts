import { EventFormat } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventFormat',
  standalone: true,
})
export class EventFormatPipe implements PipeTransform {
  transform(value: EventFormat) {
    switch (value) {
      case 'in-person':
        return 'Presencial';

      case 'online':
        return 'Online';

      case 'mixed':
        return 'Híbrido';
    }
  }
}
