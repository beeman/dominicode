import { ApiDataAccessProfileModule } from '@dominicode/api/data-access-profile'
import { Module } from '@nestjs/common'

import { ApiFeatureProfileResolver } from './api-feature-profile.resolver'

@Module({
  imports: [ApiDataAccessProfileModule],
  providers: [ApiFeatureProfileResolver],
})
export class ApiFeatureProfileModule {}
