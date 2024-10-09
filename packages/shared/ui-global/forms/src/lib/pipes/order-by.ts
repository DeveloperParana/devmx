/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true,
})
export class OrderByPipe implements PipeTransform {
  transform<T>(values: T[], prop: keyof T | string): T[] {
    const p = prop.toString();
    const hasDot = p.indexOf('.') > -1;

    return values.sort((a, b) => {
      let aProp;
      let bProp;

      if (hasDot) {
        const path = p.split('.');
        aProp = path.reduce(
          (prev, curr) => (prev ? prev[curr] : undefined),
          a as any
        );
        bProp = path.reduce(
          (prev, curr) => (prev ? prev[curr] : undefined),
          b as any
        );
      } else {
        aProp = a[prop as keyof T];
        bProp = b[prop as keyof T];
      }

      return aProp - bProp;
    });
  }
}
