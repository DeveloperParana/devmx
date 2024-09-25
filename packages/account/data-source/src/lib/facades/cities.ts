import { PageDto, QueryParamsDto } from '@devmx/shared-data-source';
import { plainToInstance } from 'class-transformer';
import { CityDto } from '../dtos';
import {
  FindCitiesUseCase,
  FindCityByIDUseCase,
} from '@devmx/account-domain/server';

export class CitiesFacade {
  constructor(
    private findCitiesUseCase: FindCitiesUseCase,
    private findCityByIDUseCase: FindCityByIDUseCase
  ) {}

  async find(params: QueryParamsDto<CityDto>) {
    const { data, items, pages } = await this.findCitiesUseCase.execute(params);
    const cities = plainToInstance(CityDto, data);
    return new PageDto(cities, items, pages);
  }

  async findOne(id: string) {
    const city = await this.findCityByIDUseCase.execute(id);
    return plainToInstance(CityDto, city);
  }
}
