import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { MatListModule, MatListOption } from '@angular/material/list';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { SkillFacade } from '@devmx/learn-data-access';
import { AsyncPipe } from '@angular/common';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface SelectSkillData {
  multiple?: boolean;
}

export type SelectSkillDialogRef = MatDialogRef<
  SelectSkillDialog,
  EditableSkill | EditableSkill[]
>;

@Component({
    selector: 'devmx-select-skill',
    templateUrl: './select-skill.dialog.html',
    styleUrl: './select-skill.dialog.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        PaginatorComponent,
        SearchFieldComponent,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
        AsyncPipe,
    ]
})
export class SelectSkillDialog {
  ref = inject<SelectSkillDialogRef>(MatDialogRef);

  data = inject<SelectSkillData>(MAT_DIALOG_DATA);

  skillFacade = inject(SkillFacade);

  constructor() {
    this.skillFacade.load();
  }

  onSearchChange(name: string) {
    this.skillFacade.setFilter({ name });
    this.skillFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.skillFacade.setParams({ page, size });
    this.skillFacade.load();
  }

  close(selected: MatListOption[]) {
    if (this.data.multiple) {
      this.ref.close(selected.map((item) => item.value));
    } else {
      this.ref.close(selected[0].value);
    }
  }
}
