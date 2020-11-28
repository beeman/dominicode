import { ApiDataAccessCoreService } from '@dominicode/api/data-access-core'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ApiDataAccessProfileService {
  constructor(private readonly data: ApiDataAccessCoreService) {}

  profiles() {
    return this.data.user.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }

  profile(username: string) {
    return this.data.findUserByUsername(username)
  }

  profilePosts(userId) {
    return this.data.findUserById(userId).posts()
  }
}
