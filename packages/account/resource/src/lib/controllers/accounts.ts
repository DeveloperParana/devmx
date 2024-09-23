import { User, ApiPage, QueryParamsDto } from '@devmx/shared-data-source';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import { Account } from '@devmx/shared-api-interfaces';
import {
  AccountDto,
  AccountsFacade,
  ChangePasswordDto,
  PresentationDto,
  UpdateAccountDto,
} from '@devmx/account-data-source';
import {
  Body,
  Get,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';

@ApiBearerAuth()
@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsFacade: AccountsFacade) {}

  @Get()
  @ApiPage(AccountDto)
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
    @User('id') account: string,
    @Query() params: QueryParamsDto<PresentationDto>
  ) {
    try {
      return await this.accountsFacade.findPresentations(account, params);
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
