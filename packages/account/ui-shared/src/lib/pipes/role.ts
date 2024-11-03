import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '@devmx/shared-api-interfaces';

@Pipe({
  name: 'role',
  standalone: true,
})
export class RolePipe implements PipeTransform {
  transform(value: Role | string) {
    return this.#humanizeRole(value);
  }

  #humanizeRole(role: Role | string) {
    switch (role) {
      case 'member':
        return 'membro';
      case 'speaker':
        return 'palestrante';
      case 'recruiter':
        return 'recrutador';
      case 'academic':
        return 'acadêmico';
      case 'staff':
        return 'organizador';
      case 'leader':
        return 'líder';
      case 'fellow':
        return 'companheiro';
      case 'donor':
        return 'doador';
      case 'neighbor':
        return 'de casa';
      case 'manager':
        return 'gerente';
      case 'director':
        return 'diretor';
      default:
        return '';
    }
  }
}
