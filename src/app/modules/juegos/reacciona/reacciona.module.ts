import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaccionaComponent } from './reacciona.component';
import { ReaccionaRoutingModule } from './reacciona-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ReaccionaComponent 
  ],
  imports: [
    CommonModule, 
    ReaccionaRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ReaccionaModule { }
