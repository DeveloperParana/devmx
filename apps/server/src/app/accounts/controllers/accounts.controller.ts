import { AccountDto, CreateAccountDto, UpdateAccountDto } from '../dtos';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryParamsDto } from '../../shared/dtos';
import { AccountsFacade } from '../facades';
import { Account } from '../schemas';
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ApiPage } from '../../shared';

@ApiBearerAuth()
@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsFacade: AccountsFacade) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    try {
      return await this.accountsFacade.create(createAccountDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get()
  @ApiPage(AccountDto)
  async findAll(@Query() params: QueryParamsDto<Account>) {
    try {
      return await this.accountsFacade.find(params);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: AccountDto })
  async findOne(@Param('id') id: string) {
    try {
      return await this.accountsFacade.findOne(id);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: AccountDto })
  async update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto
  ) {
    try {
      return await this.accountsFacade.update(id, updateAccountDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: AccountDto })
  async remove(@Param('id') id: string) {
    try {
      return await this.accountsFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
