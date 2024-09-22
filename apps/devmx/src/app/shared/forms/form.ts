import { Entity } from '@devmx/shared-api-interfaces';
import { FormGroup } from '@angular/forms';
import { TypedForm } from './typed-form';

export class Form<T extends Entity> extends FormGroup<TypedForm<T>> {}
