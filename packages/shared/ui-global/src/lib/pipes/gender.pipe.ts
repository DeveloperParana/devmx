import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '@devmx/shared-api-interfaces';

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {
  transform(value: Gender) {
    return this.#humanizeGender(value);
  }

  #humanizeGender(gender: Gender) {
    switch (gender) {
      case 'female':
        return 'Feminino';
      case 'male':
        return 'Masculino';
      case 'non-binary':
        return 'Não binário';
      case 'gender-fluid':
        return 'Gênero fluído';
      case 'agender':
        return 'Agênero';
      case 'prefer-not-to-say':
        return 'Prefiro não dizer';
      default:
        return 'Outro';
    }
  }
}
