import { ComponentType } from '@angular/cdk/portal';
import { SectionHeaderOptions } from './interfaces';
import { MediaMatcher } from '@angular/cdk/layout';
import { InjectionToken } from '@angular/core';
import { LayoutFacade } from './layout.facade';

export const LAYOUT_SIDENAV_COMPONENT = new InjectionToken<
  ComponentType<unknown>
>('layout.sidenav.component');

export const LAYOUT_SIDENAV_SECTIONS = new InjectionToken<
  SectionHeaderOptions[]
>('layout.sidenav.sections');

export function provideLayout<T>(
  component?: ComponentType<T>,
  sections: SectionHeaderOptions[] = []
) {
  console.log(sections);

  return [
    {
      provide: LAYOUT_SIDENAV_COMPONENT,
      useValue: component ?? null,
    },
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
