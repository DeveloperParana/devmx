import { NgClass } from "@angular/common";
import { Component, input, output, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { SortDirection } from "@devmx/shared-api-interfaces";
import { IconComponent } from "@devmx/shared-ui-global/icon";

@Component({
    exportAs: 'sortDirection',
    selector: 'devmx-sort-direction',
    templateUrl: './sort-direction.component.html',
    styleUrl: './sort-direction.component.scss',
    imports: [MatButtonModule, IconComponent, NgClass]
})
export class SortDirectionComponent {
  ascText = input('')

  descText = input('')

  change = output<SortDirection>();

  current = signal<SortDirection>('asc');

  toggle() {
    if (this.current() === 'asc') {
      this.current.set('desc');
    } else {
      this.current.set('asc');
    }

    this.change.emit(this.current())
  }
}
