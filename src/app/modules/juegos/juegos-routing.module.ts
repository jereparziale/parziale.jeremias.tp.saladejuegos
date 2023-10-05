import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ahorcado',
    loadChildren: () => import('./ahorcado/ahorcado.module').then((m) => m.AhorcadoModule)
  },
  {
    path: 'mayor-menor',
    loadChildren: () => import('./mayor-menor/mayor-menor.module').then((m) => m.MayorMenorModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)], 
    CommonModule
  ]
})
export class JuegosRoutingModule { }
