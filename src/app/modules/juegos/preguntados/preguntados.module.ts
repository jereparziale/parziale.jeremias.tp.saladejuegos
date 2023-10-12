import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PreguntadosComponent } from './preguntados.component';



@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule, 
    PreguntadosRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PreguntadosModule { }
