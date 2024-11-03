import { SearchInstitutionDialog } from './search-institution/search-institution.dialog';
import { EditableInstitution } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import {
  textbox,
  FormService,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

export class InstitutionDialog {
  constructor(private dialog: MatDialog, private formService: FormService) {}

  openInstitution(data: EditableInstitution | null = null) {
    const fields: TypedFields<EditableInstitution> = {
      id: textbox({
        label: 'ID',
        type: 'hidden',
        value: data && data.id ? data.id : '',
      }),
      name: textbox({
        label: 'Nome',
        type: 'text',
        value: data && data.name ? data.name : '',
        errors: {
          required: 'Obrigatório',
        },
      }),
    };

    const form = createFormGroup(fields);

    const title = (data ? 'Editar' : 'Cadastrar') + ' instituição';
    return this.formService.open({ title, fields, form });
  }

  searchInstitution() {
    return this.dialog.open<SearchInstitutionDialog, void, EditableInstitution>(
      SearchInstitutionDialog
    );
  }
}

export function provideInstitutionDialog() {
  return {
    provide: InstitutionDialog,
    deps: [MatDialog, FormService],
  };
}
