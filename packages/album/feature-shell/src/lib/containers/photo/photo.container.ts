import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgPlural, NgPluralCase } from '@angular/common';
import { Album, Photo, UserTag } from '@devmx/shared-api-interfaces';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-photo',
  templateUrl: './photo.container.html',
  styleUrl: './photo.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgPlural, NgPluralCase, AsyncPipe],
})
export class PhotoContainer {
  route = inject(ActivatedRoute);

  photo$ = this.route.data.pipe(
    filter((data) => 'photo' in data),
    map((data) => data['photo'] as Photo & { album: Album })
  );

  getUserFromTags(tags: UserTag[] = []) {
    return tags.map((tag) => tag.user.displayName);
  }
}
