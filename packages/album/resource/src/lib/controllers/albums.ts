import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthUser, Album } from '@devmx/shared-api-interfaces';
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
  AlbumDto,
  AlbumsFacade,
  CreateAlbumDto,
  UpdateAlbumDto,
} from '@devmx/album-data-source';
import 'multer';

@ApiTags('Albums')
@Controller('albums')
export class AlbumsController {
  constructor(
    private readonly albumsFacade: AlbumsFacade,
    // private readonly rsvpsFacade: PhotosFacade
  ) {}

  @Post()
  @ApiBearerAuth()
  async create(@User('id') owner: string, @Body() data: CreateAlbumDto) {
    try {
      return await this.albumsFacade.create({ ...data, owner });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(AlbumDto)
  async findAll(@Query() params: QueryParamsDto<Album>) {
    try {
      return await this.albumsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: AlbumDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.albumsFacade.findOne(id);
    } catch (err) {
      throw exceptionByError({
        code: 404,
        message: 'Album não encontrado',
      });
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: AlbumDto })
  @Roles(['director', 'manager', 'staff', 'leader'])
  async update(
    @User() auth: AuthUser,
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto
  ) {
    const album = await this.albumsFacade.findOne(id);

    if (!album) {
      throw exceptionByError({
        code: 404,
        message: 'Album não encontrado',
      });
    }

    if (album.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.albumsFacade.update(id, updateAlbumDto);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: AlbumDto })
  @Roles(['director', 'manager', 'staff', 'leader'])
  async remove(@User() auth: AuthUser, @Param('id') id: string) {
    const album = await this.albumsFacade.findOne(id);

    if (!album) {
      throw exceptionByError({
        code: 404,
        message: 'Album não encontrado',
      });
    }

    if (album.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw exceptionByError({ code: 403, message: 'Acesso negado' });
    }

    try {
      return await this.albumsFacade.delete(id);
    } catch (err) {
      throw exceptionByError({ code: 400, message: 'Solicitação incorreta' });
    }
  }
}
