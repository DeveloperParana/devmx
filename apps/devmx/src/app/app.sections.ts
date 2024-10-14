import { SectionHeaderOptions } from '@devmx/shared-ui-global/layout';

export const appSections: SectionHeaderOptions[] = [
  {
    label: 'Conta',
    links: [
      {
        label: 'Sobre você',
        route: ['/conta', 'configuracoes'],
        icon: 'doc/id-card',
        roles: ['member'],
      },
      {
        label: 'Suas habilidades',
        route: ['/conta', 'habilidades'],
        icon: 'settings',
        roles: ['member'],
      },
      {
        label: 'Suas apresentações',
        route: ['/conta', 'minhas-apresentacoes'],
        icon: 'presentation',
        roles: ['speaker'],
      },
      {
        label: 'Seus eventos',
        route: ['/conta', 'administracao', 'meus-eventos'],
        icon: 'calendar-tasks',
        roles: ['leader'],
      },
      {
        label: 'Suas ofertas',
        route: ['/carreiras', 'administracao', 'suas-ofertas'],
        icon: 'music/speaker',
        roles: ['recruiter'],
      },
      {
        label: 'Administrar contas',
        route: ['/conta', 'administracao', 'contas'],
        icon: 'gear',
        roles: ['manager', 'director'],
      },
      {
        label: 'Dashboard',
        route: ['/conta', 'administracao', 'dashboard'],
        icon: 'gear',
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
