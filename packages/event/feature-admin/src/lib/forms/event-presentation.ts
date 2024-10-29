import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PresentationRef } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class EventPresentationForm extends FormGroup<
  TypedForm<PresentationRef>
> {
  constructor(presentation?: PresentationRef) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl('', {
        nonNullable: true,
      }),
      cover: new FormControl('', {
        nonNullable: true,
      }),
    });

    if (presentation) this.patchValue(presentation);
  }
}

export class EventPresentationsForm extends FormArray<EventPresentationForm> {
  constructor() {
    super([]);
  }

  add(value?: PresentationRef) {
    this.push(new EventPresentationForm(value));
  }
}
