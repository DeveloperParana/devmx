import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillForm } from '../../forms';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-career-admin-editable-skill',
  templateUrl: './editable-skill.dialog.html',
  styleUrl: './editable-skill.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
  ],
  standalone: true,
})
export class EditableSkillDialog implements OnInit {
  ref = inject<MatDialogRef<EditableSkillDialog, EditableSkill>>(MatDialogRef);

  data = inject<EditableSkill>(MAT_DIALOG_DATA);

  form = new SkillForm();

  ngOnInit() {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      return this.ref.close(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
