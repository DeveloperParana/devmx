import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchUserComponent } from '@devmx/account-ui-shared';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { UserRef } from '@devmx/shared-api-interfaces';
import { TagUserData } from './tag-user-data';

@Component({
  selector: 'devmx-tag-user',
  template: `<devmx-search-user
    [except]="data.except ?? []"
    (selected)="dialogRef.close($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SearchUserComponent],
  styles: `
    :host {
      display: flex;
      padding: 0.8em 0.6em 0;
      border-radius: 0.6em;
      background-color: rgba(255,255,255,.8);
    }
  `,
})
export class TagUserComponent {
  dialogRef = inject<DialogRef<UserRef, TagUserComponent>>(DialogRef);

  data = inject<TagUserData>(DIALOG_DATA);
}
