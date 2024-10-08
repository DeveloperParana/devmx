import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormOption, TypedForm } from '@devmx/shared-ui-global';
import {
  CreatePresentation,
  PresentationFormat,
} from '@devmx/shared-api-interfaces';

export class CreatePresentationForm extends FormGroup<
  TypedForm<CreatePresentation>
> {
  formats: FormOption<PresentationFormat>[] = [
    { value: 'talk', viewValue: 'Palestra' },
    { value: 'workshop', viewValue: 'Oficina (workshop)' },
    { value: 'webinar', viewValue: 'Seminário online (webinar)' },
  ];

  constructor() {
    super({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      format: new FormControl('talk', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl('', {
        nonNullable: true,
      }),
      visible: new FormControl(false, {
        nonNullable: true,
      }),
      resources: new FormArray<FormControl<string>>([]),
      tags: new FormArray<FormControl<string>>([]),
    });
  }
}
