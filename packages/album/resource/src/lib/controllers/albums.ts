import { Authentication, Album } from '@devmx/shared-api-interfaces';
import { FileInterceptor } from '@nestjs/platform-express';
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
  @Roles(['leader', 'fellow', 'director', 'manager', 'staff', 'speaker'])
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @User() auth: Authentication,
    @Param('id') id: string,
    @Body() data: CreatePhotoDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const album = await this.albumsFacade.findOne(id);

    if (!album) {
      throw new NotFoundException('Album não encontrado');
    }

    if (!this.#checkPermission(auth, album)) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      const owner = auth.id;
      const content = file.buffer;
      const value = { ...data, album: id, content, owner };

      const photo = await this.photosFacade.create(value);

      return await this.albumsFacade.addPhoto(id, photo);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: AlbumDto })
  @Roles(['leader', 'fellow', 'director', 'manager', 'staff', 'speaker'])
  async update(
    @User() auth: Authentication,
    @Param('id') id: string,
    @Body() data: UpdateAlbumDto
  ) {
    const album = await this.albumsFacade.findOne(id);

    if (!album) {
      throw new NotFoundException('Album não encontrado');
    }

    if (!this.#checkPermission(auth, album)) {
      throw new ForbiddenException('Acesso negado');
    }

    data.owner = auth.id;

    try {
      return await this.albumsFacade.update(id, data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: AlbumDto })
  @Roles(['leader', 'fellow', 'director', 'manager', 'staff', 'speaker'])
  async remove(@User() auth: Authentication, @Param('id') id: string) {
    const album = await this.albumsFacade.findOne(id);

    if (!album) {
      throw new NotFoundException('Album não encontrado');
    }

    if (!this.#checkPermission(auth, album)) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.albumsFacade.delete(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  #checkPermission(auth: Authentication, entity: AlbumDto) {
    let isContributor = false;

    if (entity.contributors && entity.contributors.length) {
      const contributor = entity.contributors.find(
        (contributor) => contributor.id === auth.id
      );

      isContributor = !!contributor;
    }

    return entity.owner.id === auth.id || isContributor;
  }
}
