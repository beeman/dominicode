import { ApiDataAccessCoreModule } from '@dominicode/api/data-access-core'
import { Module } from '@nestjs/common'

import { ApiDataAccessCommentService } from './api-data-access-comment.service'

@Module({
  imports: [ApiDataAccessCoreModule],
  exports: [ApiDataAccessCommentService],
  providers: [ApiDataAccessCommentService],
})
export class ApiDataAccessCommentModule {}
