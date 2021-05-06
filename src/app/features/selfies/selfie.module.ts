import { SharedModule } from './../../shared/modules/shared/shared.module';
import { AddSelfieComponent } from './add-selfie/add-selfie.component';
import { UnSelfieReadonlyComponent } from './un-selfie-readonly/un-selfie-readonly.component';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { SelfiesRoutingModule } from './selfies-routing.module';
import { UnSelfieComponent } from './un-selfie/un-selfie.component';



@NgModule({
  declarations: [
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfieComponent,
    UnSelfieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebcamModule,
    SelfiesRoutingModule
  ],
  exports: [
    SelfieListComponent
  ]
})
export class SelfieModule { }
