import { Allowed, ApiPage, QueryParamsDto } from '@devmx/shared-data-source';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { exceptionByError } from '@devmx/shared-resource';
import { Account } from '@devmx/shared-api-interfaces';
import {
  AccountDto,
  AccountsFacade,
  ChangePasswordDto,
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
  @Allowed()
  @ApiPage(AccountDto)
  async findAll(@Query() params: QueryParamsDto<Account>) {
    try {
      return await this.accountsFacade.find(params);
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

  @Patch(':id/password')
  @ApiOkResponse({ type: AccountDto })
  async update(
    @Param('id') id: string,
    @Body() updateAccountDto: ChangePasswordDto
  ) {
    try {
      return await this.accountsFacade.changePassword(id, updateAccountDto);
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
