import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { SkillFacade } from '@devmx/learn-data-access';
import { Skill } from '@devmx/shared-api-interfaces';
import { AsyncPipe } from '@angular/common';
import { debounceTime, filter } from 'rxjs';
import {
  input,
  inject,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-search-skill',
  templateUrl: './search-skill.component.html',
  styleUrl: './search-skill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
  ],
})
export class SearchSkillComponent {
  skillFacade = inject(SkillFacade);

  selected = output<Skill>();

  label = input('Habilidade');

  control = new FormControl<string | Skill>('');

  constructor() {
    this.control.valueChanges
      .pipe(
        filter((value) => typeof value === 'string'),
        filter((value) => value.length > 0),
        takeUntilDestroyed(),
        debounceTime(400)
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
    this.selected.emit(skill);
    this.control.setValue('');
  }
}
