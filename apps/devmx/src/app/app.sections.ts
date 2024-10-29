import { SectionHeaderOptions } from '@devmx/shared-ui-global/layout';

export const appSections: SectionHeaderOptions[] = [
  {
    label: 'Configurações',
    icon: 'settings',
    links: [
      {
        label: 'Sobre você',
        route: ['/conta', 'configuracoes'],
        icon: 'doc/id-card',
        roles: ['member'],
      },
      // {
      //   label: 'Habilidades',
      //   route: ['/conta', 'habilidades'],
      //   icon: 'settings',
      //   roles: ['member'],
      // },
      {
        label: 'Minhas apresentações',
        route: ['/apresentacoes', 'administracao'],
        icon: 'presentation',
        roles: ['speaker'],
      },
      {
        label: 'Eventos',
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
