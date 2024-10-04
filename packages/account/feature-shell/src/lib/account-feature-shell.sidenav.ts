import { SidenavItem } from '@devmx/shared-ui-global';

export const accountFeatureShellSidenav: SidenavItem[] = [
  {
    path: ['/conta', 'configuracoes'],
    text: 'Conta',
    icon: 'settings',
    roles: ['member'],
    children: [
      {
        path: ['/conta', 'configuracoes'],
        text: 'Meus dados',
        roles: ['member'],
        icon: 'account_circle',
      },
      {
        path: ['/conta', 'minhas-apresentacoes'],
        text: 'Apresentações',
        roles: ['speaker'],
        icon: 'collections_bookmark',
      },
    ]
  },
  {
    path: ['/conta', 'dashboard'],
    text: 'Dashboard',
    icon: 'dashboard',
    roles: ['director', 'manager'],
  },
  {
    path: ['/conta', 'administracao'],
    text: 'Administração',
    icon: 'admin_panel_settings',
    roles: ['director', 'manager', 'leader', 'staff', 'fellow'],
    children: [
      {
        path: ['/conta', 'administracao', 'contas'],
        icon: 'group',
        text: 'Contas',
        roles: ['director', 'manager', 'leader', 'staff', 'fellow'],
      },
      {
        path: ['/conta', 'administracao', 'meus-eventos'],
        icon: 'calendar_month',
        text: 'Meus eventos',
        roles: ['leader'],
      },
    ],
  },
];
