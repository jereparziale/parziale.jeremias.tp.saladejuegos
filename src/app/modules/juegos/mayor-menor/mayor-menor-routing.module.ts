import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MayorMenorComponent } from './mayor-menor.component';



 
const routes: Routes = [
  { path: '', component: MayorMenorComponent, children: [] }
];

@NgModule({
  declarations: [], 
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
  ],
  exports: [RouterModule]
})
export class MayorMenorRoutingModule { }
