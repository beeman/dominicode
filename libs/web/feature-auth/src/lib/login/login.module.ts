import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebDataAccessAuthModule } from '@dominicode/web/data-access-auth'
import { WebUiFormModule } from '@dominicode/web/ui-form'
import { AuthPageModule } from '../components/auth-page/auth-page.module'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WebUiFormModule, AuthPageModule, WebDataAccessAuthModule],
})
export class LoginModule {}
