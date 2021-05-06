import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { SelfieListComponent } from './../features/selfies/selfie-list/selfie-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SelfieListComponent
  },
  // {
  //   path: '', pathMatch: 'full', redirectTo: '/selfies'
  // },
  {
    path: '**', component: NotFoundComponent
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
export class AppRoutingModule { }
