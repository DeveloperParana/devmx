import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { RolesForm } from '../../forms';
import {
  FormGroup,
  ControlContainer,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'devmx-editable-roles',
  templateUrl: './editable-roles.component.html',
  styleUrl: './editable-roles.component.scss',
  imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory() {
        return inject(ControlContainer, { skipSelf: true });
      },
    },
  ],
  standalone: true,
})
export class EditableRolesComponent implements OnInit {
  container = inject(ControlContainer);

  #destroyRef = inject(DestroyRef);

  get parentForm() {
    return this.container.control as FormGroup;
  }

  ngOnInit() {
    this.parentForm.addControl('roles', new RolesForm());

    this.#destroyRef.onDestroy(() => {
      this.parentForm.removeControl('roles');
    });
  }
}
