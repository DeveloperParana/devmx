import { Role } from '@devmx/shared-api-interfaces';

export interface AppNavItem {
  title: string;
  path: string;
  icon?: string;
  roles?: Role[];
}

export interface AppNavGroup {
  primary: AppNavItem;
  secondary?: AppNavItem;
  admin?: AppNavItem;
  manage?: AppNavItem;
}

export const appNav = {
  accouny: {
    primary: {
      title: 'Inicio',
      path: '/conta',
      icon: 'menu/home-4',
    },
    admin: {
      title: 'Sobre você',
      path: '/conta/configuracoes',
      icon: 'doc/id-card',
      roles: ['member'],
    },
    manage: {
      title: 'Usuários',
      path: '/conta/administracao/usuarios',
      icon: 'gear',
      roles: ['manager', 'director'],
    },
    secondary: {
      title: 'Sair',
      path: '/conta/sair',
      icon: 'exit',
    },
  },

  events: {
    primary: {
      title: 'Eventos',
      path: '/eventos',
      icon: 'calendar',
    },
    admin: {
      title: 'Eventos',
      path: '/eventos/administracao',
      icon: 'calendar-tasks',
      roles: ['leader'],
    },
    manage: {
      title: 'Eventos',
      path: '/eventos/administracao/gerenciar-eventos',
      icon: 'calendar-tasks',
      roles: ['manager', 'director', 'staff'],
    },
  },

  albums: {
    primary: {
      title: 'Fotos',
      path: '/albuns',
      icon: 'camera-shutter',
    },
    admin: {
      title: 'Fotos',
      path: '/albuns/administracao/meus-albuns',
      icon: 'camera-shutter',
      roles: ['leader', 'fellow', 'director', 'manager', 'staff', 'speaker'],
    },
    manage: {
      title: 'Fotos',
      path: '/albuns/administracao/gerenciar-albuns',
      icon: 'camera-shutter',
      roles: ['director', 'manager', 'staff'],
    },
  },

  careers: {
    primary: {
      title: 'Vagas',
      path: '/carreiras',
      icon: 'finance/bullseye',
    },
    admin: {
      title: 'Vagas',
      path: '/carreiras/administracao',
      icon: 'music/speaker',
      roles: ['recruiter'],
    },
    manage: {
      title: 'Vagas',
      path: '/carreiras/administracao/gerenciar-ofertas',
      icon: 'music/speaker',
      roles: ['manager', 'director', 'staff'],
    },
  },

  presentations: {
    primary: {
      title: 'Apresentações',
      path: '/apresentacoes',
      icon: 'presentation',
    },
    admin: {
      title: 'Apresentações',
      path: '/apresentacoes/administracao',
      icon: 'presentation',
      roles: ['speaker'],
    },
    manage: {
      title: 'Apresentações',
      path: '/apresentacoes/administracao/gerenciar-apresentacoes',
      icon: 'presentation',
      roles: ['manager', 'director', 'staff'],
    },
  },

  academy: {
    primary: {
      title: 'Academia',
      path: '/academia',
      icon: 'academic-cap',
    },
    admin: {
      title: 'Academia',
      path: '/academia/administracao/meus-cursos',
      icon: 'academic-cap',
      roles: ['leader', 'fellow', 'director', 'manager', 'staff', 'academic'],
    },
    manage: {
      title: 'Academia',
      path: '/academia/administracao/gerenciar-cursos',
      icon: 'academic-cap',
      roles: ['manager', 'director', 'staff'],
    },
  },

  learn: {
    primary: {
      title: 'Aprenda',
      path: '/aprenda',
      icon: 'book-opened',
    },
    admin: {
      title: 'Aprenda',
      path: '/aprenda/administracao',
      icon: 'book-opened',
      roles: ['member'],
    },
  },
} satisfies Record<string, AppNavGroup>;
