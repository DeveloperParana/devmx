import { CreateAccountDto } from './create-account.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
