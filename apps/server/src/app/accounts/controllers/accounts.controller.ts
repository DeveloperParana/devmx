import { CreateAccountDto, UpdateAccountDto } from '../dtos';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AccountsFacade } from '../facades';
import { QueryParamsDto } from '../dtos';
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
  async findAll(@Query() params: QueryParamsDto<Account>) {
    try {
      return await this.accountsFacade.find(params);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.accountsFacade.findOne(id);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Patch(':id')
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
  async remove(@Param('id') id: string) {
    try {
      return await this.accountsFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
