import { Post } from '@dominicode/api/data-access-post'
import { ApiDataAccessProfileService, Profile } from '@dominicode/api/data-access-profile'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => Profile)
export class ApiFeatureProfileResolver {
  constructor(private readonly service: ApiDataAccessProfileService) {}

  @Query(() => [Profile], { nullable: true })
  profiles() {
    return this.service.profiles()
  }

  @Query(() => Profile, { nullable: true })
  profile(@Args('username') username: string) {
    return this.service.profile(username)
  }

  @ResolveField(() => Post, { nullable: true })
  posts(@Parent() profile) {
    return profile?.posts
  }

  @ResolveField(() => String, { nullable: true })
  name(@Parent() user: Profile) {
    const name = [user.firstName, user.lastName].join(' ').trim()
    return name ? name : user.username
  }
}
