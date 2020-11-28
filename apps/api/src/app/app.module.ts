import { ApiFeatureAuthModule } from '@dominicode/api/feature-auth'
import { ApiFeatureCommentModule } from '@dominicode/api/feature-comment'
import { ApiFeatureCoreModule } from '@dominicode/api/feature-core'
import { ApiFeaturePostModule } from '@dominicode/api/feature-post'
import { ApiFeatureProfileModule } from '@dominicode/api/feature-profile'

import { Module } from '@nestjs/common'

@Module({
  imports: [
    ApiFeatureAuthModule,
    ApiFeatureCoreModule,
    ApiFeatureCommentModule,
    ApiFeaturePostModule,
    ApiFeatureProfileModule,
  ],
})
export class AppModule {}
