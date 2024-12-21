import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const date = new Date(value);

    if (!this.validate(date)) {
      throw new BadRequestException(`${metadata.data} não é uma data válida`);
    }

    return date;
  }

  validate(date: Date) {
    return date instanceof Date && !isNaN(date.getTime());
  }
}
