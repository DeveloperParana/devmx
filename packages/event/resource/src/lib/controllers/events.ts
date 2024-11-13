import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthUser, Event } from '@devmx/shared-api-interfaces';
import { exceptionByError } from '@devmx/shared-resource';
import {
  User,
  Roles,
  Allowed,
  ApiPage,
  authIsAdmin,
  QueryParamsDto,
} from '@devmx/shared-data-source';
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
  RSVPDto,
  EventsFacade,
  CreateEventDto,
  UpdateEventDto,
  RSVPsFacade,
  CreateRSVPDto,
} from '@devmx/event-data-source';
import 'multer';

@ApiTags('Eventos')
@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsFacade: EventsFacade,
    private readonly rsvpsFacade: RSVPsFacade
  ) {}

  @Post()
  @ApiBearerAuth()
  async create(@User('id') owner: string, @Body() data: CreateEventDto) {
    try {
      return await this.eventsFacade.create({ ...data, owner });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(EventDto)
  async findAll(@Query() params: QueryParamsDto<Event>) {
    try {
      return await this.eventsFacade.findFrom(new Date(), params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('all')
  @Allowed()
  @ApiPage(EventDto)
  async findPast(@Query() params: QueryParamsDto<Event>) {
    try {
      return await this.eventsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: EventDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.eventsFacade.findOne(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }
  }

  @ApiBearerAuth()
  @Post(':id/rsvps')
  async createRSVP(
    @User('id') user: string,
    @Param('id') event: string,
    @Body() data: CreateRSVPDto
  ) {
    try {
      return await this.rsvpsFacade.create({ ...data, event, user });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get(':id/rsvps')
  @ApiOkResponse({ type: [RSVPDto] })
  async findRSVPs(@Param('id') id: string) {
    try {
      return await this.rsvpsFacade.find(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }
  }

  @Allowed()
  @Get(':id/rsvps/confirmed')
  @ApiOkResponse({ type: [RSVPDto] })
  async findRSVPConfirmeds(@Param('id') id: string) {
    try {
      return await this.rsvpsFacade.findConfirmed(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: EventDto })
  @Roles(['leader'])
  async update(
    @User() auth: AuthUser,
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

    if (event.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.eventsFacade.update(id, updateEventDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: EventDto })
  @Roles(['director', 'manager', 'staff', 'leader'])
  async remove(@User() auth: AuthUser, @Param('id') id: string) {
    const event = await this.eventsFacade.findOne(id);

    if (!event) {
      throw exceptionByError({
        code: 404,
        message: 'Evento não encontrado',
      });
    }

    if (event.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.eventsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
