import { SelectSkillData, SelectSkillDialog } from './select-skill';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { SkillDialog } from './skill/skill.dialog';
import { Observable, take } from 'rxjs';

export class SkillDialogService {
  constructor(private dialog: MatDialog) {}

  select(data?: { multiple?: true }): Observable<EditableSkill[]>;
  select(data?: { multiple?: false }): Observable<EditableSkill>;
  select(data: SelectSkillData = {}) {
    return this.dialog
      .open(SelectSkillDialog, { data })
      .afterClosed()
      .pipe(take(1));
  }

  open(data?: EditableSkill) {
    return this.dialog.open(SkillDialog, { data }).afterClosed().pipe(take(1));
  }
}

export function provideSkillDialog() {
  return {
    provide: SkillDialogService,
    deps: [MatDialog],
  };
}
