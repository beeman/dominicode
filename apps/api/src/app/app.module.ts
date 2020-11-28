import { ApiFeatureAuthModule } from '@dominicode/api/feature-auth'
import { ApiFeatureCoreModule } from '@dominicode/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
