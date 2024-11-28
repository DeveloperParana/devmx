import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { provideUserPhoto } from '../../../dialogs';
import { UserForm } from '../../../forms';
import {
  MarkdownEditorComponent,
  MarkdownToolbarComponent,
  MarkdownViewComponent,
} from '@devmx/shared-ui-global/markdown';

@Component({
  selector: 'devmx-account-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  providers: [provideNativeDateAdapter(), provideUserPhoto()],
  imports: [
    MarkdownToolbarComponent,
    MarkdownEditorComponent,
    MarkdownViewComponent,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
})
export class ProfileComponent {
  container = inject(ControlContainer);

  get form() {
    return this.container.control as UserForm;
  }
}
