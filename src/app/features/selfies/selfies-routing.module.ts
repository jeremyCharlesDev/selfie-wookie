import { UnSelfieComponent } from './un-selfie/un-selfie.component';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'selfies', component: SelfieListComponent
  },
  {
    path: 'selfies/consulter/:id', component: UnSelfieComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SelfiesRoutingModule { }
