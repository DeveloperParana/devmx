import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MimeType } from '@devmx/shared-api-interfaces';
import { Icon, IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
    selector: 'devmx-file',
    templateUrl: './file.component.html',
    styleUrl: './file.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, IconComponent]
})
export class FileComponent {
  icon = input<Icon>('tech/folder-opened');

  accept = input<MimeType[]>([]);

  selected = output<File>();

  onSelected(list: FileList | null) {
    if (list instanceof FileList) {
      const [file] = Array.from(list);
      this.selected.emit(file);
    }
  }
}
