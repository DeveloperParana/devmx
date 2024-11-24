import { EditableJobSkill, JobSkill } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { signal } from '@angular/core';
import { SkillForm } from './skill';
import {
  FormArray,
  FormGroup,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

export class JobSkillForm extends FormGroup<TypedForm<JobSkill>> {
  constructor(value?: EditableJobSkill) {
    super({
      skill: new SkillForm(),
      weight: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.min(0), Validators.max(100)],
      }),
    });

    if (value) {
      this.patchValue(value);
    }
  }
}

export class SkillsForm extends FormArray<JobSkillForm> {
  constructor() {
    super([]);
  }

  add(value?: EditableJobSkill) {
    this.push(new JobSkillForm(value));
  }

  childrenErrors = signal<(ValidationErrors | null)[]>([]);

  updateErrors() {
    const errors = this.controls.map((jobSkill) => {
      return jobSkill.errors;
    });

    this.childrenErrors.set(errors);
  }
}
