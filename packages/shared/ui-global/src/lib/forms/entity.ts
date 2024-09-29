import { FormControl, FormGroup } from '@angular/forms';
import { Entity } from '@devmx/shared-api-interfaces';
import { TypedForm } from '../types';

export class EntityForm<T extends Entity> extends FormGroup<TypedForm<T>> {
  constructor(
    controls = {
      id: new FormControl(),
    } as TypedForm<T>
  ) {
    super(controls);
  }
}
