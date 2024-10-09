import { PresentationComment } from '@devmx/presentation-data-access';
import { FormControl, Validators } from '@angular/forms';
import { Form } from '@devmx/shared-ui-global/forms';

export class PresentationCommentForm extends Form<PresentationComment> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      text: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      presentation: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    this.controls.id.disable();
  }

  fill(value: Partial<PresentationComment>) {
    if (value.id) {
      this.controls.id.enable();
    }

    this.patchValue(value);
  }
}
