import { FormControl, Validators } from "@angular/forms";
import { PresentationComment } from "@devmx/shared-api-interfaces";
import { Form } from "@devmx/shared-ui-global";

export class PresentationCommentForm extends Form<PresentationComment> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true
      }),
      text: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
    })

    this.controls.id.disable()
  }

  fill(value: Partial<PresentationComment>) {
    if (value.id) {
      this.controls.id.enable()
    }

    this.patchValue(value)
  }
}
