import { SectionHeaderOptions } from '@devmx/shared-ui-global/layout';

export const appSections: SectionHeaderOptions[] = [
  {
    label: 'Navegação',
    links: [
      {
        label: 'Eventos',
        route: ['/eventos'],
        icon: 'calendar',
      },
      {
        label: 'Apresentações',
        route: ['/apresentacoes'],
        icon: 'presentation',
      },
      {
        label: 'Vagas',
        route: ['/carreiras'],
        icon: 'finance/bullseye',
      },
    ],
  },
  {
    label: 'Configurações',
    links: [
      {
        label: 'Sobre você',
        route: ['/conta', 'configuracoes'],
        icon: 'doc/id-card',
        roles: ['member'],
      },
      {
        label: 'Minhas apresentações',
        route: ['/apresentacoes', 'administracao'],
        icon: 'presentation',
        roles: ['speaker'],
      },
      {
        label: 'Meus eventos',
        route: ['/eventos', 'administracao'],
        icon: 'calendar-tasks',
        roles: ['leader'],
      },
      {
        label: 'Vagas',
        route: ['/carreiras', 'administracao'],
        icon: 'music/speaker',
        roles: ['recruiter'],
      },
      {
        label: 'Contas',
        route: ['/conta', 'administracao', 'contas'],
        icon: 'gear',
        roles: ['manager', 'director'],
      },
      {
        label: 'Gerenciar eventos',
        route: ['/eventos', 'administracao', 'gerenciar-eventos'],
        icon: 'calendar-tasks',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Gerenciar apresentações',
        route: ['/apresentacoes', 'administracao', 'gerenciar-apresentacoes'],
        icon: 'calendar-tasks',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Dashboard',
        route: ['/conta', 'dashboard'],
        icon: 'menu/layout-6',
        roles: ['manager', 'director'],
      },
      {
        label: 'Sair',
        route: ['/conta', 'sair'],
        icon: 'exit',
      },
    ],
  },
];
