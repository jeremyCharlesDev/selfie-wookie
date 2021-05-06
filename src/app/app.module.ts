import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { SelfieModule } from './features/selfies/selfie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelfieModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
