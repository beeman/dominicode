import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'list',
        loadChildren: () => import('./profile-list/profile-list.module').then((m) => m.ProfileListModule),
      },
      {
        path: 'detail',
        loadChildren: () => import('./profile-detail/profile-detail.module').then((m) => m.ProfileDetailModule),
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class WebFeatureProfileModule {}
