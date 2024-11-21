import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

interface DateTime {
  date: Date;
  time: Date;
}

export class DateTimePickerForm extends FormGroup<TypedForm<DateTime>> {
  constructor() {
    super({
      date: new FormControl(),
      time: new FormControl(),
    });
  }
}
