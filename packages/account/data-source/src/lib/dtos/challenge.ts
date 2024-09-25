import { ApiProperty } from '@nestjs/swagger';

export class ChallengeDto {
  @ApiProperty()
  challenge: string;

  constructor(challenge: string) {
    this.challenge = challenge;
  }
}
