import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'encuesta',
    pathMatch: 'full'
  },
  {
    path: 'encuesta',
    component: EncuestaComponent 
  } 
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [RouterModule],

})
export class EncuestaRoutingModule { }
