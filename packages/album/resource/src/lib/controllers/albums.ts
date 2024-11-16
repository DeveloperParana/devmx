import { Authentication, Album } from '@devmx/shared-api-interfaces';
import { FileInterceptor } from '@nestjs/platform-express';
import { exceptionByError } from '@devmx/shared-resource';
import {
  ApiTags,
  ApiConsumes,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
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
  UploadedFile,
  UseInterceptors,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import {
  AlbumDto,
  PhotosFacade,
  AlbumsFacade,
  UpdateAlbumDto,
  CreateAlbumDto,
  CreatePhotoDto,
} from '@devmx/album-data-source';
import 'multer';


@ApiTags('Albuns')
@Controller('albums')
export class AlbumsController {
  constructor(
    private readonly albumsFacade: AlbumsFacade,
    private readonly photosFacade: PhotosFacade
  ) {}

  @Post()
  @ApiBearerAuth()
  async create(@User('id') owner: string, @Body() data: CreateAlbumDto) {
    try {
      return await this.albumsFacade.create({ ...data, owner });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(AlbumDto)
  async findAll(@Query() params: QueryParamsDto<Album>) {
    try {
      return await this.albumsFacade.find(params);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: AlbumDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.albumsFacade.findOne(id);
    } catch (err) {
      throw new NotFoundException('Album não encontrado');
    }
  }

  @Post(':id/upload')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @User('id') owner: string,
    @Param('id') album: string,
    @Body() data: CreatePhotoDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    try {
      const content = file.buffer;
      const value = { ...data, album, content, owner };
      const photo = await this.photosFacade.create(value);

      return await this.albumsFacade.addPhoto(album, photo);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: AlbumDto })
  async update(
    @User() auth: Authentication,
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto
  ) {
    const album = await this.albumsFacade.findOne(id);

    if (!album) {
      throw new NotFoundException('Album não encontrado');
    }

    if (album.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.albumsFacade.update(id, updateAlbumDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: AlbumDto })
  @Roles(['director', 'manager', 'staff', 'leader'])
  async remove(@User() auth: Authentication, @Param('id') id: string) {
    const album = await this.albumsFacade.findOne(id);

    if (!album) {
      throw exceptionByError({
        code: 404,
        message: 'Album não encontrado',
      });
    }

    if (album.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.albumsFacade.delete(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
