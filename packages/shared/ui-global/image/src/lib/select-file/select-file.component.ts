import { Icon, IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MimeType } from '@devmx/shared-api-interfaces';
import {
  input,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-select-file',
  templateUrl: './select-file.component.html',
  styleUrl: './select-file.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, IconComponent],
})
export class SelectFileComponent {
  icon = input<Icon>('tech/folder-opened');

  accept = input<MimeType[]>([
    'image/png',
    'image/jpeg',
    'image/svg+xml',
    'image/webp',
  ]);

  selectChange = output<File>();

  onFilesChange(files: FileList | null) {
    const [file] = Array.from(files ?? []);

    if (file) this.selectChange.emit(file);
  }
}
