import { Account, AuthUser, Role } from '@devmx/shared-api-interfaces';
import { FileInterceptor } from '@nestjs/platform-express';
import { exceptionByError } from '@devmx/shared-resource';
import {
  User,
  Roles,
  JobDto,
  Allowed,
  ApiPage,
  QueryParamsDto,
  QueryByRoleParamsDto,
} from '@devmx/shared-data-source';
import {
  ApiBody,
  ApiTags,
  ApiConsumes,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  EventDto,
  AccountDto,
  AccountsFacade,
  ChangePasswordDto,
  ChangeRolesDto,
  PresentationDto,
  UpdateAccountDto,
} from '@devmx/account-data-source';
import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
  UploadedFile,
  ParseFilePipe,
  UseInterceptors,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import 'multer';

@ApiBearerAuth()
@ApiTags('Contas')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsFacade: AccountsFacade) {}

  @Post('photo')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { photo: { type: 'string', format: 'binary' } },
    },
  })
  @UseInterceptors(FileInterceptor('photo'))
  uploadFile(
    @User('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 * 1000 }),
          new FileTypeValidator({ fileType: 'image/png' }),
        ],
      })
    )
    photo: Express.Multer.File
  ) {
    return this.accountsFacade.update(id, { id, photo: photo.filename });
  }

  @Get()
  @ApiPage(AccountDto)
  @Roles(['director', 'manager', 'staff', 'leader', 'fellow'])
  async findAll(@Query() params: QueryParamsDto<Account>) {
    try {
      return await this.accountsFacade.find(params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('presentations')
  @ApiPage(PresentationDto)
  async findAccountPresentations(
    @User('id') owner: string,
    @Query() params: QueryParamsDto<PresentationDto>
  ) {
    try {
      return await this.accountsFacade.findPresentations(owner, params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('jobs')
  @ApiPage(JobDto)
  async findAccountJobs(
    @User('id') owner: string,
    @Query() params: QueryParamsDto<JobDto>
  ) {
    try {
      return await this.accountsFacade.findJobs(owner, params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('events')
  @ApiPage(PresentationDto)
  async findEventsByOwner(
    @User('id') owner: string,
    @Query() params: QueryParamsDto<EventDto>
  ) {
    try {
      return await this.accountsFacade.findEvents(owner, params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('speakers')
  @ApiPage(AccountDto)
  async findSpeakers(@Query() params: QueryParamsDto<AccountDto>) {
    try {
      return await this.accountsFacade.findByRole('speaker', params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('leaders')
  @ApiPage(AccountDto)
  async findLeaders(@Query() params: QueryParamsDto<AccountDto>) {
    try {
      return await this.accountsFacade.findByRole('leader', params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get('by-role/:role')
  @ApiPage(AccountDto)
  async findAccountsByRole(
    @Param('role') roleParam: string,
    @Query() params: QueryByRoleParamsDto<EventDto>
  ) {
    const role = (roleParam as Role) ?? params.role;
    try {
      return await this.accountsFacade.findByRole(role, params);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Patch('password')
  @ApiOkResponse({ type: AccountDto })
  async changePassword(
    @User('id') id: string,
    @Body() data: ChangePasswordDto
  ) {
    try {
      return await this.accountsFacade.changePassword(id, { ...data, id });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Patch(':id/roles')
  @ApiOkResponse({ type: AccountDto })
  async changeRoles(
    @Param('id') id: string,
    @User() user: AuthUser,
    @Body() data: ChangeRolesDto
  ) {
    try {
      return await this.accountsFacade.changeRoles(id, user, data);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Get('profile/:username')
  @ApiOkResponse({ type: AccountDto })
  async findOneByUsername(@Param('username') username: string) {
    try {
      return await this.accountsFacade.findOneByUsername(username);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: AccountDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.accountsFacade.findOne(id);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: AccountDto })
  async update(@Param('id') id: string, @Body() data: UpdateAccountDto) {
    try {
      return await this.accountsFacade.update(id, { ...data, id });
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: AccountDto })
  async remove(@Param('id') id: string) {
    try {
      return await this.accountsFacade.remove(id);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
