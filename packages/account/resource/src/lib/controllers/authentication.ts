import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Body, Get, Post, Controller } from '@nestjs/common';
import { Allowed, User } from '@devmx/shared-data-source';
import { exceptionByError } from '@devmx/shared-resource';
import { AuthUser } from '@devmx/shared-api-interfaces';
import {
  CreateUserDto,
  AccessTokenDto,
  SendUserCodeDto,
  ValidateUserCodeDto,
  AuthenticationFacade,
} from '@devmx/account-data-source';

@ApiTags('Autenticação')
@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationFacade: AuthenticationFacade) {}

  @Get()
  @ApiBearerAuth()
  user(@User() user: AuthUser) {
    return user;
  }

  @Post()
  @Allowed()
  // @ApiOkResponse({ type: AccessTokenDto })
  async signIn(@Body() { name }: SendUserCodeDto) {
    try {
      return await this.authenticationFacade.sendUserCode(name);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Post('validate')
  @ApiOkResponse({ type: AccessTokenDto })
  async signUp(@Body() data: ValidateUserCodeDto) {
    try {
      return await this.authenticationFacade.validadeUserCode(data);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Post('create-user')
  async createUser(@Body() data: CreateUserDto) {
    try {
      return await this.authenticationFacade.createUser(data);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
