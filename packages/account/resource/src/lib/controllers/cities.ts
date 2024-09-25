import { Allowed, ApiPage, QueryParamsDto } from '@devmx/shared-data-source';
import { CitiesFacade, CityDto } from '@devmx/account-data-source';
import { Get, Controller, Query, Param } from '@nestjs/common';
import { exceptionByError } from '@devmx/shared-resource';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private citiesFacade: CitiesFacade) {}

  @Get()
  @Allowed()
  @ApiPage(CityDto)
  async findAll(@Query() params: QueryParamsDto<CityDto>) {
    try {
      return await this.citiesFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: CityDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.citiesFacade.findOne(id);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
