import { PresentationReactionType } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {
  COOL_ICON,
  CLAPS_ICON,
  AMAZING_ICON,
  LEARNED_ICON,
  INSIGHTFUL_ICON,
  MINDBLOWING_ICON,
  registerIcons,
} from '@devmx/shared-ui-global';

export interface ReactionEvent {
  presentation: string;
  type: PresentationReactionType;
}

@Component({
  selector: 'devmx-reaction',
  templateUrl: './reaction.component.html',
  styleUrl: './reaction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule],
  standalone: true,
})
export class ReactionComponent {
  reactions: PresentationReactionType[] = [
    'claps',
    'mindblowing',
    'insightful',
    'amazing',
    'learned',
    'cool',
  ];

  presentation = input<string>();

  reacted = output<ReactionEvent>();

  constructor() {
    registerIcons([
      ['claps', CLAPS_ICON],
      ['mindblowing', MINDBLOWING_ICON],
      ['insightful', INSIGHTFUL_ICON],
      ['amazing', AMAZING_ICON],
      ['learned', LEARNED_ICON],
      ['cool', COOL_ICON],
    ]);
  }

  react(type: PresentationReactionType) {
    const presentation = this.presentation();
    if (presentation) {
      this.reacted.emit({ presentation, type });
    }
  }
}
