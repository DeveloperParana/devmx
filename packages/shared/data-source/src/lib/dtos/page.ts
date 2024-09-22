import { ApiProperty } from '@nestjs/swagger';

export class PageDto<T> {
  @ApiProperty()
  data: T[];

  @ApiProperty({ minimum: 0, default: 0 })
  items: number;

  @ApiProperty({ minimum: 1, default: 1 })
  pages: number;

  constructor(data: T[], items: number, pages: number) {
    this.data = data;
    this.items = items;
    this.pages = pages;
  }
}
