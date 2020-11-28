import { CtxUser, GqlAuthGuard, User } from '@dominicode/api/data-access-auth'
import { ApiDataAccessCommentService, Comment, CreateCommentInput } from '@dominicode/api/data-access-comment'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => Comment)
export class ApiFeatureCommentResolver {
  constructor(private readonly service: ApiDataAccessCommentService) {}

  @Query(() => [Comment])
  comments(@Args('postId') postId: string) {
    return this.service.comments(postId)
  }

  @Mutation(() => Comment)
  @UseGuards(GqlAuthGuard)
  async createComment(@CtxUser() user: User, @Args('data') data: CreateCommentInput) {
    return this.service.createComment(user.id, data)
  }

  @Mutation(() => Comment)
  @UseGuards(GqlAuthGuard)
  async deleteComment(@CtxUser() user: User, @Args('id') id: string): Promise<any> {
    return this.service.deleteComment(user.id, id)
  }

  @ResolveField('author', () => User)
  author(@Parent() comment: Comment) {
    return this.service.commentAuthor(comment.id)
  }

  @ResolveField('post', () => [Comment])
  post(@Parent() comment: Comment) {
    return this.service.commentPost(comment.id)
  }
}
