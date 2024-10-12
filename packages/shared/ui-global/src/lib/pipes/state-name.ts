import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateName',
  standalone: true,
})
export class StateNamePipe implements PipeTransform {
  transform(id: number) {
    switch (id) {
      case 11:
        return 'Rondônia';
      case 12:
        return 'Acre';
      case 13:
        return 'Amazonas';
      case 14:
        return 'Roraima';
      case 15:
        return 'Pará';
      case 16:
        return 'Amapá';
      case 17:
        return 'Tocantins';
      case 21:
        return 'Maranhão';
      case 22:
        return 'Piauí';
      case 23:
        return 'Ceará';
      case 24:
        return 'Rio Grande do Norte';
      case 25:
        return 'Paraíba';
      case 26:
        return 'Pernambuco';
      case 27:
        return 'Alagoas';
      case 28:
        return 'Sergipe';
      case 29:
        return 'Bahia';
      case 31:
        return 'Minas Gerais';
      case 32:
        return 'Espírito Santo';
      case 33:
        return 'Rio de Janeiro';
      case 35:
        return 'São Paulo';
      case 41:
        return 'Paraná';
      case 42:
        return 'Santa Catarina';
      case 43:
        return 'Rio Grande do Sul';
      case 50:
        return 'Mato Grosso do Sul';
      case 51:
        return 'Mato Grosso';
      case 52:
        return 'Goiás';
      case 53:
        return 'Distrito Federal';
      default:
        return '';
    }
  }
}
