import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UserSkill } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrl: './user-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent {
  data = input.required<UserSkill[]>();
}
