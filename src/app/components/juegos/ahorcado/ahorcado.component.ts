import { Component } from '@angular/core';
import swal from'sweetalert2';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {

  public palabras = ["universidad", "sanvicente", "ahorcado", "tomasguido"];
  public palabraSeleccionada:string = "";
  public palabraGuionada: string[] = this.generarPalabraGuionada(this.palabraSeleccionada);
  public letrasRestantes: string[] = this.palabraSeleccionada.split("");
  public letrasAdivinadas: string[] = [];
  public letrasUtilizadas: string[] = [];
  public intentosRestantes = 6;
  public letraSeleccionada:string="";

  constructor() {
    // Selección aleatoria de palabra en el constructor
    this.palabraSeleccionada = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraGuionada = this.generarPalabraGuionada(this.palabraSeleccionada);
    this.letrasRestantes = this.palabraSeleccionada.split("");
  }
 
  public verificarLetra(){
    let indiceLetraAdivinada:number[] = [];
    let adivinoLetra:boolean=false;
    this.letraSeleccionada=this.letraSeleccionada.toLowerCase();

    if(!this.letrasUtilizadas.includes(this.letraSeleccionada)){
      for(let i=0;i<this.palabraSeleccionada.length;i++){
        if(this.palabraSeleccionada[i]===this.letraSeleccionada){
          indiceLetraAdivinada.push(i);
          adivinoLetra=true;
        }
      }
      if(adivinoLetra){
        this.letrasAdivinadas.push(this.letraSeleccionada);
        this.letrasUtilizadas.push(this.letraSeleccionada);
        this.eliminarLetraAdivinada(this.letraSeleccionada);
        this.cargarLetraEnPalabraGuionada();
        console.log(`Letra ${this.letraSeleccionada} adivinada!`);
      }else{
        this.intentosRestantes--;
        this.letrasUtilizadas.push(this.letraSeleccionada);
        console.log(`Letra ${this.letraSeleccionada} no forma parte de la palabra!`);
      }
      this.letraSeleccionada="";
      this.verificarGanador();
      this.declararPerdedor();

    }else{
      console.log("letra ya utilizada");
    }
  }


  private eliminarLetraAdivinada(letra:string){
    this.letrasRestantes = this.letrasRestantes.filter(l => l !== letra);
  }
  private generarPalabraGuionada(palabra:string){
    this.palabraGuionada = [];
    for(let i=0;palabra.length>i;i++){
      this.palabraGuionada.push("__  ");
    }
    console.log(this.palabraGuionada);
    return this.palabraGuionada;
  }
  private cargarLetraEnPalabraGuionada() {
    for (let i = 0; i < this.palabraSeleccionada.length; i++) {
      if (this.palabraSeleccionada[i] == this.letraSeleccionada) {
        this.palabraGuionada[i] = this.letraSeleccionada;
      }
    }
    console.log(this.palabraGuionada);
  }

  private verificarGanador(): boolean{
    if(this.letrasRestantes.length==0){
      swal.fire(
        'Ganaste!',
        'Felicitaciones!',
        'success'
      )
      this.reiniciarJuego();
      return true;
    }
    return false;
  }
  private declararPerdedor(){
    if(this.intentosRestantes==0){
      swal.fire({
        icon: 'error',
         title: 'Perdiste!',
        imageUrl: 'assets/gif-perdiste-ahorcado.gif',
        imageAlt: 'gif',
        imageHeight: 250,

      })
      this.reiniciarJuego();
    }
  }
  private reiniciarJuego(): any{
    this.palabraSeleccionada = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraGuionada = this.generarPalabraGuionada(this.palabraSeleccionada);
    this.letrasRestantes = this.palabraSeleccionada.split("");
    this.letrasAdivinadas = [];
    this.letrasUtilizadas = [];
    this.intentosRestantes = 6;
    this.letraSeleccionada = "";    
  }
  





}
