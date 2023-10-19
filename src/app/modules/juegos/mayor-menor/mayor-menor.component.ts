import { Component, OnInit, inject } from '@angular/core';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { EstadisticasService } from 'src/app/services/firebase/juegos/estadisticas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit{
  private estadisticasService: EstadisticasService = inject(EstadisticasService);
  private UserAuthService: UserAuthService = inject(UserAuthService); 

  public cartaActual:number=0;
  public cartaAnterior:number=0;
  public puntuacion:number=0;
  public intentosRestantes:number=12;
  public cartasPosibles:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];

  
  estadistica = {
    usuario: '',
    juego: 'mayor-menor',
    puntuacion: 0,
    fecha: new Date(), // Definición de fecha como tipo Date
  };

  ngOnInit(): void {
    this.cartaActual = this.devolverNumAleatorio();
  }
 
  public verificarMayorMenor(valor:number){
    this.cartaAnterior=this.cartaActual;
    this.cartaActual = this.devolverNumAleatorio();
    if(valor==1 && this.cartaActual>this.cartaAnterior){
      this.puntuacion++;
    }
    if(valor==0 && this.cartaActual<this.cartaAnterior){
      this.puntuacion++;
    }
    this.intentosRestantes--;
    if(this.intentosRestantes==0){
      swal.fire({
        icon: 'success',
        title: 'Partida Finalizada!',
        text: this.puntuacion+' puntos totales.',
      });
      this.reiniciarJuego();
    }


  }

  private devolverNumAleatorio():number{
    return this.cartasPosibles[Math.floor(Math.random() * this.cartasPosibles.length)];
  }

  private reiniciarJuego(){

    this.UserAuthService.estadoLog()
    .then(() => {
      this.estadistica.puntuacion=this.puntuacion;
       this.estadistica.usuario = this.UserAuthService.usuarioEmail;
       this.estadisticasService.alta(this.estadistica)

       this.cartaActual = this.devolverNumAleatorio();
       this.cartaAnterior=0;
       this.puntuacion=0;
       this.intentosRestantes=0;
    })
    .catch((error) => {
      console.log(error);
    });

   
  }

}
