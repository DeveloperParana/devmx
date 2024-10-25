import { JobType } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobType',
  standalone: true,
})
export class JobTypePipe implements PipeTransform {
  transform(value: JobType) {
    switch (value) {
      case 'contract':
        return 'Contrato';

      case 'freelance':
        return 'Freelance';

      case 'part-time':
        return 'Meio período';

      case 'full-time':
        return 'Tempo integral';
    }
  }
}
