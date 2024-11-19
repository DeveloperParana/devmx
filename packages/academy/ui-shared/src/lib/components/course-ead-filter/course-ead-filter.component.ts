import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'devmx-course-ead-filter',
  templateUrl: './course-ead-filter.component.html',
  styleUrl: './course-ead-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChipsModule],
})
export class CourseEADFilterComponent {
  change = output<boolean>();
}
