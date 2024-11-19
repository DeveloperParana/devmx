import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Course } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatListModule, IconComponent],
})
export class CourseCardComponent {
  data = input.required<Course>();

  discrete = input<boolean | ''>(false);

  get course() {
    return this.data();
  }
}
