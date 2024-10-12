import { ComponentType } from '@angular/cdk/portal';
import { MediaMatcher } from '@angular/cdk/layout';
import { InjectionToken } from '@angular/core';
import { Layout } from './layout';

export const LAYOUT_SIDENAV_COMPONENT = new InjectionToken<
  ComponentType<unknown>
>('layout.sidenav.component');

export function provideLayout<T>(component?: ComponentType<T>) {
  return [
    {
      provide: LAYOUT_SIDENAV_COMPONENT,
      useValue: component ?? null,
    },
    {
      provide: Layout,
      deps: [MediaMatcher, LAYOUT_SIDENAV_COMPONENT],
    },
  ];
}
