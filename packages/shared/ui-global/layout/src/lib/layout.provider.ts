import { SectionHeaderOptions } from './interfaces';
import { MediaMatcher } from '@angular/cdk/layout';
import { InjectionToken } from '@angular/core';
import { LayoutFacade } from './layout.facade';

export const LAYOUT_SIDENAV_SECTIONS = new InjectionToken<
  SectionHeaderOptions[]
>('layout.sidenav.sections');

export function provideLayout(sections: SectionHeaderOptions[] = []) {
  return [
    {
      provide: LAYOUT_SIDENAV_SECTIONS,
      useValue: sections,
    },
    {
      provide: LayoutFacade,
      deps: [MediaMatcher, LAYOUT_SIDENAV_SECTIONS],
    },
  ];
}
