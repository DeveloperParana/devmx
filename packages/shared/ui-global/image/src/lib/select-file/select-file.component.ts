import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'devmx-select-file',
    templateUrl: './select-file.component.html',
    styleUrl: './select-file.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButtonModule, IconComponent]
})
export class SelectFileComponent {
  selectedChange = output<File>();

  onFilesChange(files: FileList | null) {
    const [file] = Array.from(files ?? []);

    if (file) this.selectedChange.emit(file);
  }
}
