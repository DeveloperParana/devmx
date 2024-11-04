import { SectionHeaderOptions } from '@devmx/shared-ui-global/layout';

export const appSections: SectionHeaderOptions[] = [
  {
    label: 'Navegação',
    expanded: true,
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
      // {
      //   label: 'Albuns',
      //   route: ['/albuns'],
      //   icon: 'camera-shutter',
      // },
      {
        label: 'Academia',
        route: ['/academia'],
        icon: 'academic-cap',
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
      // {
      //   label: 'Meus albuns',
      //   route: ['/albuns', 'administracao', 'meus-albuns'],
      //   icon: 'camera-shutter',
      //   roles: ['leader', 'fellow', 'director', 'manager', 'staff', 'speaker'],
      // },
      {
        label: 'Meus cursos',
        route: ['/academia', 'administracao', 'meus-cursos'],
        icon: 'academic-cap',
        roles: ['leader', 'fellow', 'director', 'manager', 'staff', 'academic'],
      },
      {
        label: 'Minhas vagas',
        route: ['/carreiras', 'administracao'],
        icon: 'music/speaker',
        roles: ['recruiter'],
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
        icon: 'presentation',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Gerenciar ofertas',
        route: ['/carreiras', 'administracao', 'gerenciar-ofertas'],
        icon: 'music/speaker',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Gerenciar cursos',
        route: ['/academia', 'administracao', 'gerenciar-cursos'],
        icon: 'academic-cap',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Gerenciar usuários',
        route: ['/conta', 'administracao', 'usuarios'],
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
