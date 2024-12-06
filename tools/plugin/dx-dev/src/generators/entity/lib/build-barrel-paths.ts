import { Barrel } from '../schema';

export function buildBarrelPaths(scope: string, fileName: string): Barrel[] {
  return [
    {
      path: `packages/${scope}/data-access/src/lib/resolvers/index.ts`,
      file: `./${fileName}-wrapped`,
    },
    {
      path: `packages/${scope}/data-access/src/lib/application/index.ts`,
      file: `./${fileName}.facade`,
    },
    {
      path: `packages/${scope}/data-access/src/lib/infrastructure/index.ts`,
      file: `./${fileName}.http.service.impl`,
    },
    {
      path: `packages/${scope}/data-source/src/lib/application/index.ts`,
      file: `./${fileName}s.facade`,
    },
    {
      path: `packages/${scope}/data-access/src/lib/providers/index.ts`,
      file: `./${fileName}`,
    },
    {
      path: `packages/${scope}/data-source/src/lib/dtos/index.ts`,
      file: `./${fileName}`,
    },
    {
      path: `packages/${scope}/data-source/src/lib/dtos/index.ts`,
      file: `./create-${fileName}`,
    },
    {
      path: `packages/${scope}/data-source/src/lib/dtos/index.ts`,
      file: `./update-${fileName}`,
    },
    {
      path: `packages/${scope}/data-source/src/lib/infrastructure/index.ts`,
      file: `./${fileName}s.mongo.service.impl`,
    },
    {
      path: `packages/${scope}/data-source/src/lib/schemas/index.ts`,
      file: `./${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/client/services/index.ts`,
      file: `./${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/client/use-cases/index.ts`,
      file: `./create-${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/client/use-cases/index.ts`,
      file: `./delete-${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/client/use-cases/index.ts`,
      file: `./find-${fileName}-by-id`,
    },
    {
      path: `packages/${scope}/domain/src/client/use-cases/index.ts`,
      file: `./find-${fileName}s`,
    },
    {
      path: `packages/${scope}/domain/src/client/use-cases/index.ts`,
      file: `./update-${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/lib/dtos/index.ts`,
      file: `./create-${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/lib/dtos/index.ts`,
      file: `./update-${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/server/services/index.ts`,
      file: `./${fileName}s`,
    },
    {
      path: `packages/${scope}/domain/src/server/use-cases/index.ts`,
      file: `./create-${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/server/use-cases/index.ts`,
      file: `./delete-${fileName}`,
    },
    {
      path: `packages/${scope}/domain/src/server/use-cases/index.ts`,
      file: `./find-${fileName}-by-id`,
    },
    {
      path: `packages/${scope}/domain/src/server/use-cases/index.ts`,
      file: `./find-${fileName}s`,
    },
    {
      path: `packages/${scope}/domain/src/server/use-cases/index.ts`,
      file: `./update-${fileName}`,
    },
    {
      path: `packages/shared/api-interfaces/src/lib/dtos/index.ts`,
      file: `./editable-${fileName}`,
    },
    {
      path: `packages/shared/api-interfaces/src/lib/entities/index.ts`,
      file: `./${fileName}`,
    },
  ];
}
