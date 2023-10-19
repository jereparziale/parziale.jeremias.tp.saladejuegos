import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas.component';
import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EstadisticasComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    SharedModule
  ]
})
export class EstadisticasModule { }
