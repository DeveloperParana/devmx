import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'devmx-account-profile',
  templateUrl: './profile.container.html',
  styleUrl: './profile.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    EditorComponent,
  ],
  standalone: true,
})
export class ProfileContainer {
  form = new FormGroup({
    minibio: new FormControl(),
  });
}
