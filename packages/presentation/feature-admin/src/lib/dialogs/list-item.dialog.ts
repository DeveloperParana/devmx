import { MatDialog } from '@angular/material/dialog';
import {
  textbox,
  FormService,
  TypedFields,
  createFormGroup,
} from '@devmx/shared-ui-global/forms';

export interface ListItem {
  value: string;
}

export class ListItemDialog {
  constructor(private dialog: MatDialog, private formService: FormService) {}

  open(data: ListItem | null = null) {
    const fields: TypedFields<ListItem> = {
      value: textbox({
        label: 'Item',
        type: 'text',
        value: data && data.value ? data.value : '',
        errors: {
          required: 'Obrigatório',
        },
      }),
    };

    const form = createFormGroup(fields);

    const title = (data ? 'Alterar' : 'Adicionar') + ' item';
    return this.formService.open({ title, fields, form });
  }
}

export function provideListItemDialog() {
  return {
    provide: ListItemDialog,
    deps: [MatDialog, FormService],
  };
}
