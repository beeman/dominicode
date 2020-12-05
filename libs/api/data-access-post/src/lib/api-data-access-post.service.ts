import { ApiDataAccessCoreService } from '@dominicode/api/data-access-core'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ApiDataAccessPostService {
  constructor(private readonly data: ApiDataAccessCoreService) {}

  posts() {
    return this.data.post.findMany({ orderBy: { createdAt: 'desc' }, take: 25 })
  }

  userPosts(userId: string) {
    return this.data.post.findMany({ where: { author: { id: userId } }, orderBy: { createdAt: 'desc' }, take: 25 })
  }

  post({ id }) {
    return this.data.post.findUnique({ where: { id } })
  }

  createPost(userId, data) {
    return this.data.post.create({
      data: {
        author: { connect: { id: userId } },
        ...data,
      },
    })
  }

  async deletePost(userId: string, id: string) {
    const author = await this.data.post.findUnique({ where: { id } }).author()
    if (author.id !== userId) {
      throw new Error('You can only delete your own posts.')
    }
    return this.data.post.delete({ where: { id } })
  }

  postAuthor(id: string) {
    return this.data.post.findUnique({ where: { id } }).author()
  }

  postComments(id: string) {
    return this.data.post.findUnique({ where: { id } }).comments()
  }
}
