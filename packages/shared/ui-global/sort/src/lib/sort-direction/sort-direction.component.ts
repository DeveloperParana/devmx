import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { SortDirection } from '@devmx/shared-api-interfaces';
import { FormOption } from '@devmx/shared-ui-global/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  exportAs: 'sortDirection',
  selector: 'devmx-sort-direction',
  templateUrl: './sort-direction.component.html',
  styleUrl: './sort-direction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChipsModule],
})
export class SortDirectionComponent {
  sortChange = output<SortDirection>();

  directions: FormOption<SortDirection>[] = [
    { value: 'asc', viewValue: 'ASC' },
    { value: 'desc', viewValue: 'DESC' },
  ];
  // ascText = input('');

  // descText = input('');

  // sortChange = output<SortDirection>();

  // current = signal<SortDirection>('asc');

  // toggle() {
  //   if (this.current() === 'asc') {
  //     this.current.set('desc');
  //   } else {
  //     this.current.set('asc');
  //   }

  //   this.sortChange.emit(this.current());
  // }
}
