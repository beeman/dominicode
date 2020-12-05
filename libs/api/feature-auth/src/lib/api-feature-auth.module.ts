import { ApiDataAccessAuthModule } from '@dominicode/api/data-access-auth'
import { Module } from '@nestjs/common'
import { ApiFeatureAuthUserResolver } from './api-feature-auth-user.resolver'
import { ApiFeatureAuthResolver } from './api-feature-auth.resolver'

@Module({
  imports: [ApiDataAccessAuthModule],
  providers: [ApiFeatureAuthResolver, ApiFeatureAuthUserResolver],
})
export class ApiFeatureAuthModule {}
