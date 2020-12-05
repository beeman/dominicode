import { ApiDataAccessCoreService } from '@dominicode/api/data-access-core'
import { Injectable } from '@nestjs/common'
import { CreateCommentInput } from './dto/create-comment.input'

@Injectable()
export class ApiDataAccessCommentService {
  constructor(private readonly data: ApiDataAccessCoreService) {}

  comments(postId) {
    return this.data.comment.findMany({
      where: { post: { id: postId } },
      orderBy: { createdAt: 'asc' },
      take: 100,
    })
  }

  comment({ id }) {
    return this.data.comment.findUnique({ where: { id } })
  }

  async createComment(userId: string, { postId, text }: CreateCommentInput) {
    const comment = await this.data.comment.create({
      data: {
        author: { connect: { id: userId } },
        post: { connect: { id: postId } },
        text,
      },
    })
    const post = await this.data.post.findUnique({ where: { id: postId } })
    await this.data.post.update({ where: { id: postId }, data: { commentCount: post.commentCount + 1 } })
    return comment
  }

  async deleteComment(userId: string, id: string) {
    const author = await this.data.comment.findUnique({ where: { id } }).author()
    if (author.id !== userId) {
      throw new Error('You can only delete your own comments.')
    }
    return this.data.comment.delete({ where: { id } })
  }

  commentAuthor(id: string) {
    return this.data.comment.findUnique({ where: { id } }).author()
  }

  commentPost(id: string) {
    return this.data.comment.findUnique({ where: { id } }).post()
  }
}
