import { SearchSkillsDialog } from './search-skills/search-skills.dialog';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import {
  textbox,
  FormService,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

export class SkillDialog {
  constructor(private dialog: MatDialog, private formService: FormService) {}

  openSkill(data: EditableSkill | null = null) {
    const fields: TypedFields<EditableSkill> = {
      id: textbox({
        label: 'ID',
        type: 'hidden',
        value: data && data.id ? data.id : '',
      }),
      name: textbox({
        label: 'Habilidade',
        type: 'text',
        value: data && data.name ? data.name : '',
        errors: {
          required: 'Obrigatório',
        },
      }),
    };

    const form = createFormGroup(fields);

    return this.formService.open({ title: '', fields, form });
  }

  searchSkills() {
    return this.dialog.open<SearchSkillsDialog, void, EditableSkill[]>(
      SearchSkillsDialog
    );
  }
}

export function provideSkillDialog() {
  return {
    provide: SkillDialog,
    deps: [MatDialog, FormService],
  };
}
