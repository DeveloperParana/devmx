import { EditableSkill, Skill } from '@devmx/shared-api-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillForm } from '../../forms';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export type SkillDialogRef = MatDialogRef<SkillDialog, EditableSkill>;

@Component({
    selector: 'devmx-skill',
    templateUrl: './skill.dialog.html',
    styleUrl: './skill.dialog.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class SkillDialog implements OnInit {
  ref = inject<SkillDialogRef>(MatDialogRef);

  data = inject<Skill | undefined>(MAT_DIALOG_DATA);

  form = new SkillForm();

  ngOnInit() {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      return this.ref.close(value);
    }

    this.form.markAllAsTouched();
  }
}
