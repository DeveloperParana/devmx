import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Skill, UserSkill } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { SkillForm } from '@devmx/learn-ui-shared';

export class UserSkillForm extends FormGroup<TypedForm<UserSkill>> {
  constructor(value?: Partial<UserSkill>) {
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

export class UserSkillsForm extends FormArray<UserSkillForm> {
  constructor() {
    super([]);
  }

  add(value?: UserSkill) {
    this.push(new UserSkillForm(value));
  }

  has(skill?: Skill) {
    return this.value.some((item) => item.skill === skill);
  }

  override patchValue(
    value: Partial<UserSkill>[],
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void {
    for (const item of value) {
      if (!this.has(item.skill)) {
        this.push(new UserSkillForm(item), options);
      }
    }
  }
}
