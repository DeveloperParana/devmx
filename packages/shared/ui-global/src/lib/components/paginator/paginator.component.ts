import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {
  input,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface PageParams {
  page: number;

  size: number;
}

@Component({
  selector: 'devmx-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatPaginatorModule],
})
export class PaginatorComponent {
  items = input(0);

  size = input(10);

  pageChange = output<PageParams>();

  onChange({ pageIndex, pageSize }: PageEvent) {
    this.pageChange.emit({ page: pageIndex, size: pageSize });
  }
}
