import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

export interface DateRange {
  start: Date;
  end: Date;
}

export class EventDateRangeForm extends FormGroup<TypedForm<DateRange>> {
  constructor() {
    super({
      start: new FormControl(),
      end: new FormControl(),
    });
  }
}
