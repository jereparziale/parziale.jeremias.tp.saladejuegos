import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReaccionaComponent } from './reacciona.component';



 
const routes: Routes = [
  { path: '', component: ReaccionaComponent, children: [] }
];

@NgModule({
  declarations: [], 
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
  ],
  exports: [RouterModule]
})
export class ReaccionaRoutingModule { }
