import { ApiProperty } from '@nestjs/swagger';

export class PageDto<T> {
  @ApiProperty()
  data: T[];

  @ApiProperty()
  items: number;

  @ApiProperty()
  pages: number;

  constructor(data: T[], items: number, pages: number) {
    this.data = data;
    this.items = items;
    this.pages = pages;
  }
}
