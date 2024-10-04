import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  TypedForm,
  FormOption,
  AccountRefForm,
  PresentationRefForm,
} from '@devmx/shared-ui-global';
import {
  Event,
  AccountRef,
  EventFormat,
  PresentationRef,
} from '@devmx/shared-api-interfaces';

export class LeadersForm extends FormArray<AccountRefForm> {
  constructor() {
    super([]);
  }

  add(leader: AccountRef) {
    this.push(new AccountRefForm(leader));
  }
}

export class PresentationsForm extends FormArray<PresentationRefForm> {
  constructor() {
    super([]);
  }

  add(leader: PresentationRef) {
    this.push(new PresentationRefForm(leader));
  }
}

export class EventForm extends FormGroup<TypedForm<Event>> {
  formats: FormOption<EventFormat>[] = [
    { value: 'in-person', viewValue: 'Presencial' },
    { value: 'online', viewValue: 'Online' },
    { value: 'mixed', viewValue: 'Híbrido' },
  ];

  #today = new Date();

  minDate = this.#today;

  constructor() {
    super({
      id: new FormControl(),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl(),
      format: new FormControl('in-person', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      visible: new FormControl(false, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      address: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      city: new FormControl(),
      cover: new FormControl(),
      date: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      time: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      location: new FormControl(),
      leaders: new LeadersForm(),
      presentations: new PresentationsForm(),
    });
  }

  get leaders() {
    return this.controls.leaders as LeadersForm;
  }

  get presentations() {
    return this.controls.presentations as PresentationsForm;
  }

  setLeaders(leaders: AccountRef[]) {
    this.leaders.clear();

    for (const leader of leaders) {
      this.leaders.add(leader);
    }
  }

  setPresentations(presentations: PresentationRef[]) {
    this.presentations.clear();

    for (const presentation of presentations) {
      this.presentations.add(presentation);
    }
  }

  fill(value: Event) {
    this.patchValue(value);

    if (value.leaders) {
      this.setLeaders(value.leaders);
    }

    if (value.presentations) {
      this.setPresentations(value.presentations);
    }
  }
}
