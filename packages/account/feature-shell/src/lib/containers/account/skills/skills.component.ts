import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { inject, Component, ChangeDetectorRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UserForm, UserSkillForm } from '../../../forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { SkillFacade } from '@devmx/learn-data-access';
import { Skill } from '@devmx/shared-api-interfaces';
import { debounceTime, filter } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  FormControl,
  ControlContainer,
  ReactiveFormsModule,
} from '@angular/forms';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

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
    MatAutocompleteModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSliderModule,
    DragDropModule,
    MatInputModule,
    MatListModule,
    IconComponent,
    AsyncPipe,
  ],
})
export class SkillsComponent {
  container = inject(ControlContainer);

  skillFacade = inject(SkillFacade);

  cdr = inject(ChangeDetectorRef);

  get form() {
    return this.container.control as UserForm;
  }

  searchControl = new FormControl<string | Skill>('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        filter((value) => typeof value === 'string'),
        filter((value) => value.length > 1),
        takeUntilDestroyed(),
        debounceTime(600)
      )
      .subscribe((name) => {
        this.skillFacade.setFilter({ name });
        this.skillFacade.load();
      });
  }

  displayFn(skill: Skill) {
    return skill && skill.name ? skill.name : '';
  }

  onOptionSelected(skill: Skill) {
    this.form.skills.add({ skill, weight: 0 });
    this.searchControl.setValue('');
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
