import { ApiPage, QueryParamsDto } from '@devmx/shared-data-source';
import { EventDto } from 'packages/event/data-source/src/lib/dtos';
import { exceptionByError } from '@devmx/shared-resource';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EventsFacade } from '@devmx/event-data-source';
import { Controller, Get, Query } from '@nestjs/common';
import { Event } from '@devmx/shared-api-interfaces';

@ApiBearerAuth()
@ApiTags('Eventos')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsFacade: EventsFacade) {}

  @Get()
  @ApiPage(EventDto)
  async findAll(@Query() params: QueryParamsDto<Event>) {
    try {
      return await this.eventsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
