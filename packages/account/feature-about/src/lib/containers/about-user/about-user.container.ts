import { MarkdownViewComponent } from '@devmx/shared-ui-global/markdown';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { ShadowPipe } from '@devmx/shared-ui-global/shadow';
import { MatButtonModule } from '@angular/material/button';
import { markdownToText } from '@devmx/shared-util-data';
import { EventFacade } from '@devmx/event-data-access';
import { Graph } from '@devmx/shared-ui-global/graph';
import { User } from '@devmx/shared-api-interfaces';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { filter, map, take } from 'rxjs';
import {
  UserEventsComponent,
  UserPresentationsComponent,
  UserSkillsComponent,
} from '../../components';
import {
  inject,
  computed,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-about-user',
  templateUrl: './about-user.container.html',
  styleUrl: './about-user.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MarkdownViewComponent,
    UserPresentationsComponent,
    MatSlideToggleModule,
    UserSkillsComponent,
    UserEventsComponent,
    MatProgressBarModule,
    MatButtonModule,
    IconComponent,
    ShadowPipe,
    AsyncPipe,
  ],
  standalone: true,
})
export class AboutUserContainer {
  authFacade = inject(AuthenticationFacade);

  presentationFacade = inject(PresentationFacade);

  eventFacade = inject(EventFacade);

  route = inject(ActivatedRoute);

  graph = inject(Graph);

  user$ = this.route.data.pipe(
    filter(({ about }) => !!about),
    map(({ about }) => about as User)
  );

  designMode = computed(() => {
    return document.designMode === 'on';
  });

  constructor() {
    this.user$
      .pipe(
        filter((user) => !!user.id),
        map((user) => user.id),
        take(1)
      )
      .subscribe((owner) => {
        console.log('owner: ', owner);

        const filter = { title: '', owner };
        this.eventFacade.setFilter(filter);
        this.presentationFacade.setFilter(filter);

        this.eventFacade.load();
        this.presentationFacade.load();
      });

    this.user$.pipe(take(1)).subscribe((user) => {
      console.log('user: ', user);

      this.graph.setImage({
        title: `Perfil de ${user.displayName}`,
        description: markdownToText(user.profile?.minibio ?? ''),
        url: `https://devparana.mx/#/sobre/${user.name}`,
        image: 'https://devparana.mx/images/resume-folder.webp',
        type: 'image/webp',
        width: 800,
        height: 800,
      });
    });
  }

  toggleDesignMode() {
    const { designMode } = document;
    const state = designMode === 'on' ? 'off' : 'on';
    document.designMode = state;
  }

  print() {
    window.print();
  }
}
