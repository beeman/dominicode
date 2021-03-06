import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { getAuthError, getAuthUser, login } from '@dominicode/web/data-access-auth'
import { WebUiFormField } from '@dominicode/web/ui-form'
import { filter, take } from 'rxjs/operators'

@Component({
  template: `
    <auth-page
      #f
      [form]="form"
      [fields]="fields"
      pageTitle="Login"
      buttonTitle="Log in"
      [model]="model"
      (submit)="submit($event)"
    >
      <div class="error" *ngIf="getAuthError | async as error">
        {{ error }}
      </div>
      <a routerLink="/register" class="btn btn-outline-primary">Register</a>
    </auth-page>
  `,
})
export class LoginComponent {
  getAuthError = this.store.select(getAuthError)
  getAuthUser = this.store.select(getAuthUser)
  form = new FormGroup({})
  model = {}
  fields = [
    WebUiFormField.email('email', { label: 'Email', required: true }, { focus: true }),
    WebUiFormField.password('password', { label: 'Password', required: true }),
  ]
  constructor(private readonly store: Store, private readonly router: Router) {
    this.getAuthUser
      .pipe(
        filter((user) => !!user),
        take(1),
      )
      .subscribe(() => this.router.navigate(['/']))
  }

  public submit(input) {
    this.store.dispatch(login({ input }))
  }
}
