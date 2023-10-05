import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorMenorRoutingModule } from './mayor-menor-routing.module';
import { FormsModule } from '@angular/forms';
import {MayorMenorComponent} from './mayor-menor.component'
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    MayorMenorComponent

  ], 
  imports: [
    CommonModule,
    MayorMenorRoutingModule,
    FormsModule, 
    SharedModule
  ] 
})
export class MayorMenorModule { }
