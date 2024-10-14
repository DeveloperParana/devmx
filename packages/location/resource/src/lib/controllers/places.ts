import { ApiPage, QueryParamsDto, User } from '@devmx/shared-data-source';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
import {
  PlaceDto,
  PlacesFacade,
  CreatePlaceDto,
  UpdatePlaceDto,
} from '@devmx/location-data-source';

@ApiBearerAuth()
@ApiTags('Locais')
@Controller({
  path: 'locations/places',
  version: '1',
})
export class PlacesController {
  constructor(private placesFacade: PlacesFacade) {}

  @Post()
  async create(@User('id') creator: string, @Body() data: CreatePlaceDto) {
    try {
      return await this.placesFacade.create({ ...data, creator });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @ApiPage(PlaceDto)
  async findAll(@Query() params: QueryParamsDto<PlaceDto>) {
    try {
      return await this.placesFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: PlaceDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.placesFacade.findOne(id);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: PlaceDto })
  async update(
    @User('id') creator: string,
    @Param('id') id: string,
    @Body() updatePlaceDto: UpdatePlaceDto
  ) {
    const place = await this.placesFacade.findOne(id);

    if (place.creator.id !== creator) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.placesFacade.update(id, updatePlaceDto);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: PlaceDto })
  async remove(@User('id') creator: string, @Param('id') id: string) {
    try {
      const place = await this.placesFacade.findOne(id);

      if (place.creator.id !== creator) {
        throw exceptionByError({ code: 403, message: 'Acesso negado' });
      }

      return await this.placesFacade.remove(id);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
