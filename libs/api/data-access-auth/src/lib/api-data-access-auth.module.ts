import { ApiDataAccessCoreModule } from '@dominicode/api/data-access-core'
import { ApiFeatureCoreModule } from '@dominicode/api/feature-core'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApiDataAccessAuthService } from './api-data-access-auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiDataAccessCoreModule,
    ApiFeatureCoreModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'NXPM_STACK_SECRET9485563',
    }),
  ],
  exports: [ApiDataAccessAuthService],
  providers: [ApiDataAccessAuthService, JwtStrategy],
})
export class ApiDataAccessAuthModule {}
