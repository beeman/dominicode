import { ApiDataAccessCoreModule } from '@dominicode/api/data-access-core'
import { Module } from '@nestjs/common'

import { ApiDataAccessPostService } from './api-data-access-post.service'

@Module({
  imports: [ApiDataAccessCoreModule],
  providers: [ApiDataAccessPostService],
  exports: [ApiDataAccessPostService],
})
export class ApiDataAccessPostModule {}
