import { BadRequestException, Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { SignInDto, SignUpDto } from '../dtos';
import { AuthService } from '../services';
import { ApiTags } from '@nestjs/swagger';
import { Allowed } from '../../shared';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Allowed()
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    try {
      return await this.authService.signIn(signInDto);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }

  @Allowed()
  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      return await this.authService.signUp(signUpDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
