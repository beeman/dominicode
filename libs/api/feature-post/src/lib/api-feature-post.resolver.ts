import { CtxUser, GqlAuthGuard, User } from '@dominicode/api/data-access-auth'
import { Comment } from '@dominicode/api/data-access-comment'
import { ApiDataAccessPostService, CreatePostInput, Post } from '@dominicode/api/data-access-post'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => Post)
export class ApiFeaturePostResolver {
  constructor(private readonly service: ApiDataAccessPostService) {}

  @Query(() => [Post], { nullable: true })
  posts() {
    return this.service.posts()
  }

  @Query(() => [Post], { nullable: true })
  userPosts(@Args('userId') userId: string) {
    return this.service.userPosts(userId)
  }

  @Query(() => Post, { nullable: true })
  post(@CtxUser() user: User, @Args('id') id: string) {
    return this.service.post({ id })
  }

  @Mutation(() => Post, { nullable: true })
  @UseGuards(GqlAuthGuard)
  createPost(@CtxUser() user: User, @Args('data') data: CreatePostInput) {
    return this.service.createPost(user.id, data)
  }

  @Mutation(() => Post, { nullable: true })
  @UseGuards(GqlAuthGuard)
  deletePost(@CtxUser() user: User, @Args('id') id: string) {
    return this.service.deletePost(user.id, id)
  }

  @ResolveField('author', () => User, { nullable: true })
  author(@Parent() post: Post) {
    return this.service.postAuthor(post.id)
  }

  @ResolveField('comments', () => [Comment], { nullable: true })
  comments(@Parent() post: Post) {
    return this.service.postComments(post.id)
  }
}
