import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { Course } from '@devmx/shared-api-interfaces';
import { ContributorsForm } from './contributors';
import { SubjectsForm } from './course-subject';
import { InstitutionForm } from './institution';

export class CourseForm extends FormGroup<TypedForm<Course>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),

      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      institution: new InstitutionForm(),

      subjects: new SubjectsForm(),

      goal: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      ead: new FormControl(false, {
        nonNullable: true,
      }),

      details: new FormControl(),

      link: new FormControl(),

      contributors: new ContributorsForm(),
    });
  }

  get institution() {
    return this.controls.institution as InstitutionForm;
  }

  get contributors() {
    return this.controls.contributors as ContributorsForm;
  }

  get subjects() {
    return this.controls.subjects as SubjectsForm;
  }

  patch(value: Course) {
    this.patchValue(value);

    if (value.subjects) {
      this.subjects.clear();

      for (const subject of value.subjects) {
        this.subjects.add(subject);
      }
    }

    if (value.contributors) {
      this.contributors.clear();

      for (const subject of value.contributors) {
        this.contributors.add(subject);
      }
    }
  }
}
