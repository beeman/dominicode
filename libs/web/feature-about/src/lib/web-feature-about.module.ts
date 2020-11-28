import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebDataAccessCoreModule } from '@dominicode/web/data-access-core'
import { WebFeatureAboutComponent } from './web-feature-about.component'

@NgModule({
  declarations: [WebFeatureAboutComponent],
  imports: [
    CommonModule,
    WebDataAccessCoreModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebFeatureAboutComponent }]),
  ],
})
export class WebFeatureAboutModule {}
