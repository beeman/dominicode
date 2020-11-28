import { ApiDataAccessCoreModule } from '@dominicode/api/data-access-core'
import { Module } from '@nestjs/common'

import { ApiDataAccessProfileService } from './api-data-access-profile.service'

@Module({
  exports: [ApiDataAccessProfileService],
  imports: [ApiDataAccessCoreModule],
  providers: [ApiDataAccessProfileService],
})
export class ApiDataAccessProfileModule {}
