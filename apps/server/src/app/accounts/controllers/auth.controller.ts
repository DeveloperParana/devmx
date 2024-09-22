import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthUser } from '@devmx/shared-api-interfaces';
import { AccessTokenDto, SignInDto, SignUpDto } from '../dtos';
import { Allowed, User } from '../../shared';
import { AuthService } from '../services';
import {
  Get,
  Body,
  Post,
  Controller,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
      return await this.authService.signIn(signInDto);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }

  @Allowed()
  @Post('sign-up')
  @ApiOkResponse({ type: AccessTokenDto })
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      return await this.authService.signUp(signUpDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
