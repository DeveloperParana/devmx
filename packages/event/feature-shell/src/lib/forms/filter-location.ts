import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationFilter } from '@devmx/location-data-access';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class FilterLocationForm extends FormGroup<TypedForm<LocationFilter>> {
  constructor() {
    super({
      lat: new FormControl(0, {
        nonNullable: true,

        validators: [
          Validators.required,
          Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/),
        ],
      }),
      lng: new FormControl(0, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(
            /^[-+]?((1[0-7]\d|0?\d{1,2})(\.\d+)?|180(\.0+)?)$/
          ),
        ],
      }),
      max: new FormControl(10000, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      min: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.min(0)],
      }),
    });
  }

  get min() {
    return this.controls.min?.value ?? 0;
  }
}
