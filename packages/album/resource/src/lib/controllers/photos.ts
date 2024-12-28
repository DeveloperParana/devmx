import { Authentication, Photo } from '@devmx/shared-api-interfaces';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOkResponse,
  ApiBearerAuth,
  ApiConsumes,
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
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import {
  PhotoDto,
  PhotosFacade,
  CreatePhotoDto,
  UpdatePhotoDto,
  UpdatePhotoTagsDto,
} from '@devmx/album-data-source';
import 'multer';
import { plainToClass } from 'class-transformer';

@ApiTags('Fotos')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosFacade: PhotosFacade) {}

  @Post()
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @User('id') owner: string,
    @Body() data: CreatePhotoDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    try {
      const content = file.buffer;
      return await this.photosFacade.create({ ...data, content, owner });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get()
  @Allowed()
  @ApiPage(PhotoDto)
  async findAll(@Query() params: QueryParamsDto<Photo>) {
    return await this.photosFacade.find(params);
  }

  @Allowed()
  @Get(':id')
  @ApiOkResponse({ type: PhotoDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.photosFacade.findOne(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Patch(':id/tags')
  @ApiBearerAuth()
  @ApiOkResponse({ type: PhotoDto })
  async photoTags(
    @Param('id') id: string,
    @Body() updatePhotoDto: UpdatePhotoTagsDto
  ) {
    const photo = await this.photosFacade.findOne(id);

    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    try {
      const data = { ...photo, ...updatePhotoDto };
      const value = plainToClass(UpdatePhotoTagsDto, data);
      return await this.photosFacade.updateTags(id, value);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: PhotoDto })
  @Roles(['director', 'manager', 'staff', 'leader'])
  async update(
    @User() auth: Authentication,
    @Param('id') id: string,
    @Body() updatePhotoDto: UpdatePhotoDto
  ) {
    const photo = await this.photosFacade.findOne(id);

    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    if (photo.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw new ForbiddenException('Acesso negado');
    }

    console.log(plainToClass(UpdatePhotoDto, { ...photo, ...updatePhotoDto }));

    try {
      return await this.photosFacade.update(
        id,
        plainToClass(UpdatePhotoDto, { ...photo, ...updatePhotoDto })
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: PhotoDto })
  @Roles(['director', 'manager', 'staff', 'leader'])
  async remove(@User() auth: Authentication, @Param('id') id: string) {
    const photo = await this.photosFacade.findOne(id);

    if (!photo) {
      throw new NotFoundException('Foto não encontrada');
    }

    if (photo.owner.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.photosFacade.delete(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
