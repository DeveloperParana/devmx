import { SectionHeaderOptions } from '@devmx/shared-ui-global/layout';

export const appSections: SectionHeaderOptions[] = [
  {
    label: 'Navegação',
    expanded: true,
    links: [
      {
        label: 'Conta',
        route: ['/conta'],
        icon: 'menu/home-4',
      },
      {
        label: 'Eventos',
        route: ['/eventos'],
        icon: 'calendar',
      },
      {
        label: 'Fotos',
        route: ['/albuns'],
        icon: 'camera-shutter',
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
      {
        label: 'Academia',
        route: ['/academia'],
        icon: 'academic-cap',
      },
      // {
      //   label: 'Aprenda',
      //   route: ['/aprenda'],
      //   icon: 'book-opened',
      // },
    ],
  },
  {
    label: 'Administração',
    expanded: true,
    links: [
      {
        label: 'Eventos',
        route: ['/eventos', 'administracao'],
        icon: 'calendar-tasks',
        roles: ['leader'],
      },
      {
        label: 'Fotos',
        route: ['/albuns', 'administracao', 'meus-albuns'],
        icon: 'camera-shutter',
        roles: ['leader', 'fellow', 'director', 'manager', 'staff', 'speaker'],
      },
      {
        label: 'Apresentações',
        route: ['/apresentacoes', 'administracao'],
        icon: 'presentation',
        roles: ['speaker'],
      },
      {
        label: 'Academia',
        route: ['/academia', 'administracao', 'meus-cursos'],
        icon: 'academic-cap',
        roles: ['leader', 'fellow', 'director', 'manager', 'staff', 'academic'],
      },
      {
        label: 'Vagas',
        route: ['/carreiras', 'administracao'],
        icon: 'music/speaker',
        roles: ['recruiter'],
      },
      {
        label: 'Aprenda',
        route: ['/aprenda', 'administracao'],
        icon: 'book-opened',
        roles: ['member'],
      },
    ],
  },
  {
    label: 'Gerenciamento',
    expanded: true,
    links: [
      {
        label: 'Eventos',
        route: ['/eventos', 'administracao', 'gerenciar-eventos'],
        icon: 'calendar-tasks',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Fotos',
        route: ['/albuns', 'administracao', 'gerenciar-albuns'],
        icon: 'camera-shutter',
        roles: ['director', 'manager', 'staff'],
      },
      {
        label: 'Apresentações',
        route: ['/apresentacoes', 'administracao', 'gerenciar-apresentacoes'],
        icon: 'presentation',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Vagas',
        route: ['/carreiras', 'administracao', 'gerenciar-ofertas'],
        icon: 'music/speaker',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Academia',
        route: ['/academia', 'administracao', 'gerenciar-cursos'],
        icon: 'academic-cap',
        roles: ['manager', 'director', 'staff'],
      },
      {
        label: 'Usuários',
        route: ['/conta', 'administracao', 'usuarios'],
        icon: 'gear',
        roles: ['manager', 'director'],
      },
    ],
  },
  {
    label: 'Conta',
    expanded: true,
    links: [
      {
        label: 'Sobre você',
        route: ['/conta', 'configuracoes'],
        icon: 'doc/id-card',
        roles: ['member'],
      },
      {
        label: 'Sair',
        route: ['/conta', 'sair'],
        icon: 'exit',
      },
    ],
  },
];
