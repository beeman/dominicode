import { User } from '@dominicode/api/data-access-auth'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => User)
export class ApiFeatureAuthUserResolver {
  @ResolveField(() => String, { nullable: true })
  name(@Parent() user: User) {
    return [user.firstName, user.lastName].join(' ').trim()
  }
}
