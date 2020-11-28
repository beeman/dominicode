import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ProfileDetailComponent } from './profile-detail.component'

const routes: Routes = [{ path: '', component: ProfileDetailComponent }]

@NgModule({
  declarations: [ProfileDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProfileDetailModule {}
