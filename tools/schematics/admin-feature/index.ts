import { chain, externalSchematic, Rule } from '@angular-devkit/schematics'

export default function (schema: { name: string; type: 'admin' | 'shared' | 'web' }): Rule {
  return chain([
    externalSchematic('@nxpm/stack', 'admin-lib', {
      name: schema.name,
      type: 'data-access',
      prefix: schema.name,
      directory: schema.type,
    }),
    externalSchematic('@nxpm/stack', 'admin-lib', {
      name: schema.name,
      type: 'feature',
      prefix: schema.name,
      directory: schema.type,
    }),
    externalSchematic('@nxpm/stack', 'admin-lib', {
      name: schema.name,
      type: 'ui',
      prefix: schema.name,
      directory: schema.type,
    }),
    externalSchematic('@nrwl/angular', 'module', {
      name: `${schema.name}-list`,
      route: 'list',
      project: `${schema.type}-feature-${schema.name}`,
      module: `${schema.type}-feature-${schema.name}`,
    }),
    externalSchematic('@nrwl/angular', 'module', {
      name: `${schema.name}-detail`,
      route: 'detail',
      project: `${schema.type}-feature-${schema.name}`,
      module: `${schema.type}-feature-${schema.name}`,
    }),
  ])
}
