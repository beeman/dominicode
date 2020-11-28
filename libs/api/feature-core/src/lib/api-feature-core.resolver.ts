import { Float, Query, Resolver } from '@nestjs/graphql'
import { ApiFeatureCoreService } from './api-feature-core.service'

@Resolver()
export class ApiFeatureCoreResolver {
  constructor(private readonly service: ApiFeatureCoreService) {}

  @Query(() => Float, { nullable: true })
  uptime() {
    return this.service.uptime()
  }
}
