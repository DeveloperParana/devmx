import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devmx-account-feature-board',
  templateUrl: './account-feature-board.component.html',
  styleUrl: './account-feature-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class AccountFeatureBoardComponent {}
