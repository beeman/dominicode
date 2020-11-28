import { chain, externalSchematic, Rule } from '@angular-devkit/schematics'

export default function (schema: { name: string }): Rule {
  return chain([
    externalSchematic('@nxpm/stack', 'admin-lib', {
      name: schema.name,
      type: 'data-access',
      prefix: schema.name,
      directory: 'api',
    }),
    externalSchematic('@nxpm/stack', 'admin-lib', {
      name: schema.name,
      type: 'feature',
      prefix: schema.name,
      directory: 'api',
    }),
    externalSchematic('@nrwl/nest', 'service', {
      name: `api-data-access-${schema.name}`,
      project: `api-data-access-${schema.name}`,
    }),
    externalSchematic('@nrwl/nest', 'resolver', {
      name: `api-feature-${schema.name}`,
      project: `api-feature-${schema.name}`,
    }),
  ])
}
