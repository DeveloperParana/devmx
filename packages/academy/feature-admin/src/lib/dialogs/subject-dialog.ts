import { SearchSubjectsDialog } from './search-subjects/search-subjects.dialog';
import { EditableSubject } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import {
  textbox,
  FormService,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

export class SubjectDialog {
  constructor(private dialog: MatDialog, private formService: FormService) {}

  openSubject(data: EditableSubject | null = null) {
    const fields: TypedFields<EditableSubject> = {
      id: textbox({
        label: 'ID',
        type: 'hidden',
        value: data && data.id ? data.id : '',
      }),
      name: textbox({
        label: 'Assunto',
        type: 'text',
        value: data && data.name ? data.name : '',
        errors: {
          required: 'Obrigatório',
        },
      }),
    };

    const form = createFormGroup(fields);

    const title = (data ? 'Editar' : 'Cadastrar') + ' assunto';
    return this.formService.open({ title, fields, form });
  }

  searchSubjects() {
    return this.dialog.open<SearchSubjectsDialog, void, EditableSubject[]>(
      SearchSubjectsDialog
    );
  }
}

export function provideSubjectDialog() {
  return {
    provide: SubjectDialog,
    deps: [MatDialog, FormService],
  };
}
