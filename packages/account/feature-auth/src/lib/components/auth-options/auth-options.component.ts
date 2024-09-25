import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthOptionsForm } from '../../forms';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'devmx-auth-options',
  templateUrl: './auth-options.component.html',
  styleUrl: './auth-options.component.scss',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    AsyncPipe,
    JsonPipe,
  ],
  standalone: true,
})
export class AuthOptionsComponent {
  form = new AuthOptionsForm();

}
