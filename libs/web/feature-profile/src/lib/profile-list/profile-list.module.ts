import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ProfileListComponent } from './profile-list.component'

const routes: Routes = [{ path: '', component: ProfileListComponent }]

@NgModule({
  declarations: [ProfileListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProfileListModule {}
