import { TypedForm } from '@devmx/shared-ui-global/forms';
import { SubjectForm } from './subject';
import { signal } from '@angular/core';
import {
  CourseSubject,
  EditableCourseSubject,
} from '@devmx/shared-api-interfaces';
import {
  FormArray,
  FormGroup,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

export class CourseSubjectForm extends FormGroup<TypedForm<CourseSubject>> {
  constructor(value?: EditableCourseSubject) {
    super({
      // id: new FormControl('', {
      //   nonNullable: true,
      // }),
      subject: new SubjectForm(),
      instructor: new FormControl('', {
        nonNullable: true,
      }),
      hours: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.min(0)],
      }),
    });

    if (value) {
      this.patchValue(value);
    }
  }

  get subject() {
    return this.controls.subject as SubjectForm;
  }
}

export class SubjectsForm extends FormArray<CourseSubjectForm> {
  constructor() {
    super([], {
      validators: [Validators.required],
    });
  }

  add(value?: EditableCourseSubject) {
    this.push(new CourseSubjectForm(value));
  }

  childrenErrors = signal<(ValidationErrors | null)[]>([]);

  updateErrors() {
    const errors = this.controls.map((jobSubject) => {
      return jobSubject.errors;
    });

    this.childrenErrors.set(errors);
  }
}
