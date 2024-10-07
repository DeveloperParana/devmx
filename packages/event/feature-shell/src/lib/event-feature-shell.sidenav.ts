import { LayoutSidenavItem } from '@devmx/shared-ui-global/layout';

export const eventFeatureShellSidenav: LayoutSidenavItem[] = [
  {
    path: ['/eventos'],
    text: 'Eventos',
    roles: ['member'],
    icon: 'events',
  },
  {
    path: ['/eventos/calendario'],
    text: 'Calendário',
    roles: ['member'],
    icon: 'calendar_view_month',
  },
];
