import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebDataAccessCoreModule } from '@dominicode/web/data-access-core'
import { WebFeatureDashboardComponent } from './web-feature-dashboard.component'

@NgModule({
  declarations: [WebFeatureDashboardComponent],
  imports: [
    CommonModule,
    WebDataAccessCoreModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebFeatureDashboardComponent }]),
  ],
})
export class WebFeatureDashboardModule {}
