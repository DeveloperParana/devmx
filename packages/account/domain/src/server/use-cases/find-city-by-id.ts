import { City, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { CitiesService } from '../services';

export class FindCityByIDUseCase implements UseCase<string, City> {
  constructor(private citiesService: CitiesService) {}

  async execute(id: string) {
    const city = await this.citiesService.findOne(id);

    if (!city) {
      throw new NotFoundError('Cidade não encontrada');
    }

    return city;
  }
}
