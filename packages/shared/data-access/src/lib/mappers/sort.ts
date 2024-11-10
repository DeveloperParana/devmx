import { SortDirection } from '@devmx/shared-api-interfaces';

export class SortMapper {
  static toParams(active: string, direction: SortDirection) {
    return { sort: direction ? `${active}:${direction}` : null };
  }

  static fromParams(params: string) {
    const [field, direction] = params.split(':') ?? [];
    return direction ? { [field]: direction } : {};
  }
}
