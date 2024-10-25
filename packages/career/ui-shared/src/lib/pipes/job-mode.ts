import { JobMode } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobMode',
  standalone: true,
})
export class JobModePipe implements PipeTransform {
  transform(value: JobMode) {
    switch (value) {
      case 'hybrid':
        return 'Híbrido';

      case 'office':
        return 'Presencial';

      case 'remote':
        return 'Remoto';
    }
  }
}
