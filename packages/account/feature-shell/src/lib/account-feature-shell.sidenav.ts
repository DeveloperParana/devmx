import { LayoutSidenavItem } from '@devmx/shared-ui-global/layout';

export const accountFeatureShellSidenav: LayoutSidenavItem[] = [
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
        icon: 'user-circle',
      },
      {
        path: ['/conta', 'minhas-apresentacoes'],
        text: 'Apresentações',
        roles: ['speaker'],
        icon: 'presentation',
      },
      {
        path: ['/conta', 'minhas-vagas'],
        text: 'Vagas',
        roles: ['recruiter'],
        // icon: 'offer',
      },
    ],
  },
  {
    path: ['/conta', 'dashboard'],
    text: 'Dashboard',
    // icon: 'dashboard',
    roles: ['director', 'manager'],
  },
  {
    path: ['/conta', 'administracao'],
    text: 'Administração',
    icon: 'gear',
    roles: ['director', 'manager', 'leader', 'staff', 'fellow'],
    children: [
      {
        path: ['/conta', 'administracao', 'contas'],
        icon: 'list-fill',
        text: 'Contas',
        roles: ['director', 'manager', 'leader', 'staff', 'fellow'],
      },
      {
        path: ['/conta', 'administracao', 'meus-eventos'],
        icon: 'calendar-tasks',
        text: 'Meus eventos',
        roles: ['leader'],
      },
    ],
  },
];
