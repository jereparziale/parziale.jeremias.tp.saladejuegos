import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import { MensajeComponent } from './chat/mensaje/mensaje.component';
import { FormsModule } from '@angular/forms'; 




@NgModule({
  declarations: [
    NavbarComponent,ChatComponent,MensajeComponent
    
  ],
  exports: [NavbarComponent,ChatComponent], // Exporta el componente NavbarComponent
  imports: [
    CommonModule,FormsModule
  ]
  
})
export class SharedModule { }
