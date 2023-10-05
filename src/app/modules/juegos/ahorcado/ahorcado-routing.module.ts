import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AhorcadoComponent} from './ahorcado.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BotonLetraComponent } from './boton-letra/boton-letra.component'



const routes: Routes = [
  { path: '', component: AhorcadoComponent, children: [] }
];
 
@NgModule({
  declarations: [AhorcadoComponent,BotonLetraComponent],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class AhorcadoRoutingModule { }
