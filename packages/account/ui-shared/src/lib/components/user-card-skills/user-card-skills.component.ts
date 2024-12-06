import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { UserSkill } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'devmx-user-card-skills',
  templateUrl: './user-card-skills.component.html',
  styleUrl: './user-card-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatListModule, MatProgressBarModule, IconComponent],
  standalone: true,
})
export class UserCardSkillsComponent {
  data = input<UserSkill[]>([]);
}
