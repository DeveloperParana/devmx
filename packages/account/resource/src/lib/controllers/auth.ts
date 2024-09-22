import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Body, Get, Post, Controller } from '@nestjs/common';
import { Allowed, User } from '@devmx/shared-data-source';
import { exceptionByError } from '@devmx/shared-resource';
import { AuthUser } from '@devmx/shared-api-interfaces';
import {
  SignInDto,
  SignUpDto,
  AuthFacade,
  AccessTokenDto,
} from '@devmx/account-data-source';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authFacade: AuthFacade) {}

  @Get()
  @ApiBearerAuth()
  user(@User() user: AuthUser) {
    return user;
  }

  @Allowed()
  @Post('sign-in')
  @ApiOkResponse({ type: AccessTokenDto })
  async signIn(@Body() signInDto: SignInDto) {
    try {
      return await this.authFacade.signIn(signInDto);
    } catch (err) {
      throw exceptionByError(err);
    }
  }

  @Allowed()
  @Post('sign-up')
  @ApiOkResponse({ type: AccessTokenDto })
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      return await this.authFacade.signUp(signUpDto);
    } catch (err) {
      throw exceptionByError(err);
    }
  }
}
