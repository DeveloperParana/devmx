import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presentationFormat',
  standalone: true,
})
export class PresentationFormatPipe implements PipeTransform {
  transform(value: PresentationFormat) {
    switch (value) {
      case 'talk':
        return 'Palestra';

      case 'workshop':
        return 'Oficina (workshop)';

      case 'webinar':
        return 'Webinar (Seminário online)';
    }
  }
}
