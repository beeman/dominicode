import { ApiDataAccessCommentModule } from '@dominicode/api/data-access-comment'
import { Module } from '@nestjs/common'

import { ApiFeatureCommentResolver } from './api-feature-comment.resolver'

@Module({
  imports: [ApiDataAccessCommentModule],
  providers: [ApiFeatureCommentResolver],
})
export class ApiFeatureCommentModule {}
