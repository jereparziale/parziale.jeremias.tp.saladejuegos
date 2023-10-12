import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'ahorcado',
    loadChildren: () => import('./ahorcado/ahorcado.module').then((m) => m.AhorcadoModule),
    ...canActivate(()=> redirectUnauthorizedTo(['login']))

  },
  {
    path: 'mayor-menor',
    loadChildren: () => import('./mayor-menor/mayor-menor.module').then((m) => m.MayorMenorModule),
    ...canActivate(()=> redirectUnauthorizedTo(['login']))

  },
  {
    path: 'reacciona',
    loadChildren: () => import('./reacciona/reacciona.module').then((m) => m.ReaccionaModule),
    ...canActivate(()=> redirectUnauthorizedTo(['login']))

  },
  {
    path: 'preguntados',
    loadChildren: () => import('./preguntados/preguntados.module').then((m) => m.PreguntadosModule),
    ...canActivate(()=> redirectUnauthorizedTo(['login']))

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
