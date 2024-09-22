import { Presentation, PresentationFormat } from '@devmx/shared-api-interfaces';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Form, FormOption } from '@devmx/shared-ui-global';

export class PresentationForm extends Form<Presentation> {
  formats: FormOption<PresentationFormat>[] = [
    { value: 'talk', viewValue: 'Palestra' },
    { value: 'workshop', viewValue: 'Oficina (workshop)' },
    { value: 'webinar', viewValue: 'Seminário online (webinar)' },
  ];

  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(512)],
      }),
      format: new FormControl('talk', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      resources: new FormArray<FormControl<string>>([]),
      tags: new FormArray<FormControl<string>>([]),
      visible: new FormControl(),
    });

    this.controls.id.disable();
  }

  currentResource = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(
        /^(https?:\/\/)?([a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)+.*)$/
      ),
    ],
  });

  currentTag = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  fill(value: Presentation) {
    if (value.id && this.controls.id) {
      this.controls.id.enable();
    }
    this.patchValue(value);

    for (const resource of value.resources) {
      this.pushResource(resource);
    }

    for (const tag of value.tags) {
      this.pushTag(tag);
    }
  }

  get resources() {
    return this.controls.resources;
  }

  get tags() {
    return this.controls.tags;
  }

  addResource(event: Event) {
    event.preventDefault();

    if (this.currentResource.valid) {
      this.pushResource(this.currentResource.value);
      return this.currentResource.reset('');
    }

    this.currentResource.markAsTouched();
  }

  addTag(event: Event) {
    event.preventDefault();

    if (this.currentTag.valid) {
      this.pushTag(this.currentTag.value);
      return this.currentTag.reset('');
    }

    this.currentTag.markAsTouched();
  }

  pushResource(value = '') {
    this.resources.push(new FormControl(value, { nonNullable: true }));
  }

  pushTag(value = '') {
    this.tags.push(new FormControl(value, { nonNullable: true }));
  }

  removeResource(index: number) {
    this.resources.removeAt(index);
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }
}
