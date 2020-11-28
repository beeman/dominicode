import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebFeatureCoreModule } from '@dominicode/web/feature-core'
import { WebFeatureShellModule } from '@dominicode/web/feature-shell'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, WebFeatureCoreModule, WebFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
