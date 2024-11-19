import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DropdownFormField } from '../../form-field';
import {
  input,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'devmx-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        {
            provide: ControlContainer,
            useFactory: () => inject(ControlContainer, { skipSelf: true }),
        },
    ]
})
export class DropdownComponent<T> {
  options = input.required<DropdownFormField<T>>();
}
