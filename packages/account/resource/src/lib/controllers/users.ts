import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import { AuthUser } from '@devmx/shared-api-interfaces';
import {
  User,
  Allowed,
  ApiPage,
  authIsAdmin,
  QueryParamsDto,
  Roles,
} from '@devmx/shared-data-source';
import {
  UserDto,
  UsersFacade,
  UpdateSocialDto,
  UpdateProfileDto,
  UpdatePasswordDto,
  UpdateRolesDto,
  UpdateUserDto,
} from '@devmx/account-data-source';
import {
  Get,
  Body,
  Param,
  Query,
  Patch,
  Delete,
  Controller,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  constructor(private readonly usersFacade: UsersFacade) {}

  @Get()
  @Allowed()
  @ApiPage(UserDto)
  async findAll(@Query() params: QueryParamsDto<UserDto>) {
    try {
      return await this.usersFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('about/:name')
  @Allowed()
  @ApiOkResponse({ type: UserDto })
  async findOneByName(@Param('name') name: string) {
    const user = await this.usersFacade.findOneByName(name);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  @Get(':id')
  @Allowed()
  @ApiOkResponse({ type: UserDto })
  async findOne(@Param('id') id: string) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOkResponse({ type: UserDto })
  async update(
    @User('id') auth: string,
    @Param('id') id: string,
    @Body() data: UpdateUserDto
  ) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (user.id !== auth) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.usersFacade.update(data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @ApiBearerAuth()
  @Patch(':id/profile')
  @ApiOkResponse({ type: UserDto })
  async updateProfile(
    @User('id') auth: string,
    @Param('id') id: string,
    @Body() data: UpdateProfileDto
  ) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (user.id !== auth) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.usersFacade.updateProfile(data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @ApiBearerAuth()
  @Patch(':id/social')
  @ApiOkResponse({ type: UserDto })
  async updateSocial(
    @User('id') auth: string,
    @Param('id') id: string,
    @Body() data: UpdateSocialDto
  ) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (user.id !== auth) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.usersFacade.updateSocial(data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Post(':id/photo')
  @UseInterceptors(FileInterceptor('photo'))
  @ApiConsumes('multipart/form-data')
  async updatePhotoFile(
    @User('id') auth: string,
    @Param('id') id: string,
    @Body() data: UpdateProfileDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (auth != id) {
      throw new ForbiddenException('Acesso negado');
    }

    data.photo = file.filename;

    try {
      return await this.usersFacade.updateProfile({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @ApiBearerAuth()
  @Patch(':id/password')
  @ApiOkResponse({ type: UserDto })
  async updatePassword(
    @User('id') auth: string,
    @Param('id') id: string,
    @Body() data: UpdatePasswordDto
  ) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (user.id !== auth) {
      throw new ForbiddenException('Acesso negado');
    }

    return await this.usersFacade.updatePassword(data);
  }

  @ApiBearerAuth()
  @Patch(':id/roles')
  @Roles(['director', 'manager'])
  @ApiOkResponse({ type: UserDto })
  async updateRoles(@Param('id') id: string, @Body() data: UpdateRolesDto) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return await this.usersFacade.updateRoles(data);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserDto })
  async remove(@User() auth: AuthUser, @Param('id') id: string) {
    const user = await this.usersFacade.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (user.id !== auth.id && !authIsAdmin(auth.roles)) {
      throw new ForbiddenException('Acesso negado');
    }

    try {
      return await this.usersFacade.delete(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}