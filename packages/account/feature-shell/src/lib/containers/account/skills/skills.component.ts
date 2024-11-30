import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { inject, Component, ChangeDetectorRef } from '@angular/core';
import { SearchSkillComponent } from '@devmx/learn-ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UserForm, UserSkillForm } from '../../../forms';
import { SkillFacade } from '@devmx/learn-data-access';
import { Skill } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
  selector: 'devmx-account-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  imports: [
    MatProgressBarModule,
    SearchSkillComponent,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    DragDropModule,
    MatCardModule,
    IconComponent,
    MatSliderModule,
  ],
})
export class SkillsComponent {
  container = inject(ControlContainer);

  skillFacade = inject(SkillFacade);

  cdr = inject(ChangeDetectorRef);

  get form() {
    return this.container.control as UserForm;
  }

  onNewSkill(skill: Skill) {
    this.form.skills.add({ skill, weight: 0 });
  }

  formatLabel(value: number) {
    return `${value}%`;
  }

  drop(event: CdkDragDrop<UserSkillForm[]>) {
    moveItemInArray(
      this.form.skills.controls,
      event.previousIndex,
      event.currentIndex
    );
  }
}
