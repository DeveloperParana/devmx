import { IsNotEmpty, IsString } from 'class-validator';
import { SendUserCode } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';

export class SendUserCodeDto implements SendUserCode {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
