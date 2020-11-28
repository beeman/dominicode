import { ApiDataAccessPostModule } from '@dominicode/api/data-access-post'
import { Module } from '@nestjs/common'

import { ApiFeaturePostResolver } from './api-feature-post.resolver'

@Module({
  imports: [ApiDataAccessPostModule],
  providers: [ApiFeaturePostResolver],
})
export class ApiFeaturePostModule {}
