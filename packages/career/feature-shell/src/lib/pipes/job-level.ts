import { ExperienceLevel } from '@devmx/shared-api-interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobLevel',
  standalone: true,
})
export class JobLevelPipe implements PipeTransform {
  transform(value: ExperienceLevel) {
    switch (value) {
      case 'internship':
        return 'Estagiário';

      case 'junior':
        return 'Junior';

      case 'mid':
        return 'Pleno';

      case 'senior':
        return 'Senior';
    }
  }
}
