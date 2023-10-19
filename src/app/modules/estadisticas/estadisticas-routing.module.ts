import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadisticasComponent } from './estadisticas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'estadisticas',
    pathMatch: 'full'
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent 
  } 
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,

  ],
  exports: [RouterModule],

})
export class EstadisticasRoutingModule { }
