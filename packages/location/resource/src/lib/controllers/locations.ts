import { Allowed, ApiPage, QueryParamsDto } from '@devmx/shared-data-source';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { exceptionByError } from '@devmx/shared-resource';
import {
  CityDto,
  CitiesFacade,
  LocationFilterDto,
} from '@devmx/location-data-source';

@ApiTags('Localizações')
@Controller('locations')
export class LocationsController {
  constructor(private citiesFacade: CitiesFacade) {}

  @Get('cities')
  @Allowed()
  @ApiPage(CityDto)
  async findAll(@Query() params: QueryParamsDto<CityDto>) {
    try {
      return await this.citiesFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @ApiBearerAuth()
  @Get('cities/near')
  async findCitiesByLocation(@Query() params: LocationFilterDto) {
    return this.citiesFacade.findByLocation(params);
  }

  @ApiBearerAuth()
  @Get('cities/search/:name')
  async searchCities(@Param('name') name: string) {
    console.log(name);

    return this.citiesFacade.search(name);
  }

  @Allowed()
  @Get('cities/:id')
  @ApiOkResponse({ type: CityDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.citiesFacade.findOne(id);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
