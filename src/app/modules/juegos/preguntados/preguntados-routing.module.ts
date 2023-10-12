import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreguntadosComponent } from './preguntados.component';



 
const routes: Routes = [
  { path: '', component: PreguntadosComponent, children: [] }
];

@NgModule({
  declarations: [], 
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
  ],
  exports: [RouterModule]
})
export class PreguntadosRoutingModule { }
