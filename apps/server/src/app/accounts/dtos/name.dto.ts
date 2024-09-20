import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class NameDto {
  @IsString()
  @ApiProperty()
  first: string

  @IsString()
  @ApiProperty()
  last: string
}
