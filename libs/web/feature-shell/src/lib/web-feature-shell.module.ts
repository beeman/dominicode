import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebDataAccessAuthModule, IsLoggedInGuard } from '@dominicode/web/data-access-auth'
import { WebDataAccessCoreModule } from '@dominicode/web/data-access-core'
import { WebLayoutComponent } from '@dominicode/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@dominicode/web/feature-about').then((m) => m.WebFeatureAboutModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@dominicode/web/feature-dashboard').then((m) => m.WebFeatureDashboardModule),
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '',
    loadChildren: () => import('@dominicode/web/feature-auth').then((m) => m.WebFeatureAuthModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), WebDataAccessCoreModule, WebDataAccessAuthModule],
})
export class WebFeatureShellModule {}
