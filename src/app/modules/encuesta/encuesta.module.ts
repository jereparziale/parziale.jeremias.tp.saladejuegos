import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestaRoutingModule } from './encuesta-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [EncuestaComponent
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class EncuestaModule { }
