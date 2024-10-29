import { ApiPage, QueryParamsDto, User } from '@devmx/shared-data-source';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import { Event } from '@devmx/shared-api-interfaces';
import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
import {
  EventDto,
  EventsFacade,
  CreateEventDto,
  UpdateEventDto,
  RSVPsFacade,
  CreateRSVPDto,
} from '@devmx/event-data-source';
import 'multer';

@ApiBearerAuth()
@ApiTags('Eventos')
@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsFacade: EventsFacade,
    private readonly rsvpsFacade: RSVPsFacade
  ) {}

  @Post()
  async create(@User('id') owner: string, @Body() data: CreateEventDto) {
    try {
      return await this.eventsFacade.create({ ...data, owner });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @ApiPage(EventDto)
  async findAll(@Query() params: QueryParamsDto<Event>) {
    try {
      return await this.eventsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: EventDto })
  async findOne(@User('id') owner: string, @Param('id') id: string) {
    try {
      const event = await this.eventsFacade.findOne(id);

      if (!event.visible && event.owner.id !== owner) {
        throw exceptionByError({ code: 403, message: 'Acesso negado' });
      }

      return event;
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }
  }

  @Post(':id/rsvps')
  async createRSVP(
    @User('id') account: string,
    @Param('id') event: string,
    @Body() data: CreateRSVPDto
  ) {
    try {
      return await this.rsvpsFacade.create({ ...data, event, account });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id/rsvps')
  @ApiOkResponse({ type: EventDto })
  async findRSVPs(@User('id') owner: string, @Param('id') id: string) {
    try {
      const event = await this.eventsFacade.findOne(id);

      if (!event.visible && event.owner.id !== owner) {
        throw exceptionByError({ code: 403, message: 'Acesso negado' });
      }

      return await this.rsvpsFacade.find(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: EventDto })
  async update(
    @User('id') owner: string,
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto
  ) {
    const event = await this.eventsFacade.findOne(id);

    if (!event) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }

    if (event.owner.id !== owner) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.eventsFacade.update(id, updateEventDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: EventDto })
  async remove(@User('id') owner: string, @Param('id') id: string) {
    const event = await this.eventsFacade.findOne(id);

    if (!event) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }

    if (event.owner.id !== owner) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.eventsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
