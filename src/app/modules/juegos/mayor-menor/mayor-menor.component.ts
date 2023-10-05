import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit{

  public cartaActual:number=0;
  public cartaAnterior:number=0;
  public puntuacion:number=0;
  public intentosRestantes:number=12;
  public cartasPosibles:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];

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
    this.cartaActual = this.devolverNumAleatorio();
    this.cartaAnterior=0;
    this.puntuacion=0;
    this.intentosRestantes=0;
  }

}
