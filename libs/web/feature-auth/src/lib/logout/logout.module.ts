import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebDataAccessAuthModule } from '@dominicode/web/data-access-auth'
import { WebUiFormModule } from '@dominicode/web/ui-form'
import { AuthPageModule } from '../components/auth-page/auth-page.module'
import { LogoutComponent } from './logout.component'

const routes: Routes = [{ path: '', component: LogoutComponent }]

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WebUiFormModule, AuthPageModule, WebDataAccessAuthModule],
})
export class LogoutModule {}
