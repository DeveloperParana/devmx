import { CreatePlaceDto, PlaceDto, UpdatePlaceDto } from '../dtos';
import { QueryParamsDto } from '@devmx/shared-data-source';
import { LocationFilter } from '@devmx/location-domain';
import { Place } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  FindPlacesUseCase,
  FindPlaceByIDUseCase,
  FindPlacesByLocationUseCase,
  SearchPlacesUseCase,
  CreatePlaceUseCase,
  UpdatePlaceUseCase,
  RemovePlaceUseCase,
} from '@devmx/location-domain/server';

export class PlacesFacade {
  constructor(
    private createPlaceUseCase: CreatePlaceUseCase,
    private updatePlaceUseCase: UpdatePlaceUseCase,
    private removePlaceUseCase: RemovePlaceUseCase,
    private findPlacesUseCase: FindPlacesUseCase,
    private searchPlacesUseCase: SearchPlacesUseCase,
    private findPlaceByIDUseCase: FindPlaceByIDUseCase,
    private findPlacesByLocationUseCase: FindPlacesByLocationUseCase
  ) {}

  async create(data: CreatePlaceDto) {
    const place = await this.createPlaceUseCase.execute(data);
    return plainToInstance(PlaceDto, place);
  }

  find(params: QueryParamsDto<Place>) {
    return this.findPlacesUseCase.execute(params);
  }

  search(name: string) {
    return this.searchPlacesUseCase.execute(name);
  }

  async findOne(id: string) {
    const place = await this.findPlaceByIDUseCase.execute(id);
    return plainToInstance(PlaceDto, place);
  }

  findByLocation(filter: LocationFilter) {
    return this.findPlacesByLocationUseCase.execute(filter);
  }

  async update(id: string, data: UpdatePlaceDto) {
    const place = await this.updatePlaceUseCase.execute({ ...data, id });
    return plainToInstance(PlaceDto, place);
  }

  async remove(id: string) {
    const place = this.removePlaceUseCase.execute(id);
    return plainToInstance(PlaceDto, place);
  }
}
