import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent implements OnInit {
  public palabras = [
    'casa',
    'perro',
    'gato',
    'amarillo',
    'computadora',
    'jardin',
    'taza',
    'silla',
    'libro',
    'televisor',
    'bicicleta',
    'ciudad',
    'montaña',
    'amigo',
    'ventana',
    'escuela',
    'trabajo',
    'playa',
    'auto',
    'viaje',
    'musica',
    'pelota',
    'foto',
    'familia',
    'sol',
    'lluvia',
    'fruta',
    'papel',
    'reloj',
    'cielo',
  ];
  public palabraSeleccionada: string = '';
  public palabraGuionada: string[] = this.generarPalabraGuionada(
    this.palabraSeleccionada
  );
  public letrasRestantes: string[] = this.palabraSeleccionada.split('');
  public letrasAdivinadas: string[] = [];
  public letrasUtilizadas: string[] = [];
  public intentosRestantes = 6;
  public letraSeleccionada: string = '';
  abecedario = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  constructor() {}
  ngOnInit(): void {
    // Selección aleatoria de palabra en el constructor
    this.palabraSeleccionada =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];
      this.letrasRestantes = this.palabraSeleccionada.split('');
    this.palabraGuionada = this.generarPalabraGuionada(
      this.palabraSeleccionada
    );
  }

  public verificarLetra(letra:string) {
    let indiceLetraAdivinada: number[] = [];
    let adivinoLetra: boolean = false;
    this.letraSeleccionada=letra;
    this.letraSeleccionada = this.letraSeleccionada.toLowerCase().trim();


    if (this.letraSeleccionada !== '') {
      if (!this.letrasUtilizadas.includes(this.letraSeleccionada)) {
        for (let i = 0; i < this.palabraSeleccionada.length; i++) {
          if (this.palabraSeleccionada[i] === this.letraSeleccionada) {
            indiceLetraAdivinada.push(i);
            adivinoLetra = true;
          }
        }
        if (adivinoLetra) {
          this.letrasAdivinadas.push(this.letraSeleccionada);
          this.letrasUtilizadas.push(this.letraSeleccionada);
          this.eliminarLetraAdivinada(this.letraSeleccionada);
          this.cargarLetraEnPalabraGuionada();
        } else {
          this.intentosRestantes--;
          this.letrasUtilizadas.push(this.letraSeleccionada);
        }
        this.letraSeleccionada = '';
        this.verificarGanador();
        this.declararPerdedor();
      } else {
        swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Letra Ya Utilizada',
        });
      }
    } else {
      swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Letra Vacia',
      });
    }
  }

  private eliminarLetraAdivinada(letra: string) {
    this.letrasRestantes = this.letrasRestantes.filter((l) => l !== letra);
  }
  private generarPalabraGuionada(palabra: string) {
    this.palabraGuionada = [];
    for (let i = 0; palabra.length > i; i++) {
        this.palabraGuionada.push('__  ');
    }
    return this.palabraGuionada;
  }
  private cargarLetraEnPalabraGuionada() {
    for (let i = 0; i < this.palabraSeleccionada.length; i++) {
      if (this.palabraSeleccionada[i] == this.letraSeleccionada) {
        this.palabraGuionada[i] = this.letraSeleccionada;
      }
    }
  }

  private verificarGanador(): boolean {
    if (this.letrasRestantes.length == 0) {
      if(this.intentosRestantes<2){
        swal.fire({
          icon: 'success',
          title: 'Ganaste en la ultima!',
          imageUrl: 'assets/ganaste_justo.gif',
          imageAlt: 'gif',
          imageHeight: 250,
        });
      }else{
        swal.fire({
          icon: 'success',
          title: 'Ganaste, Felicitaciones!',
          imageUrl: 'assets/ganaste.gif',
          imageAlt: 'gif',
          imageHeight: 250,
        });
      }
      this.reiniciarJuego();
      return true;
    }
    return false;
  }
  private declararPerdedor() {
    if (this.intentosRestantes == 0) {
      swal.fire({
        icon: 'error',
        title: 'Perdiste!',
        imageUrl: 'assets/gif-perdiste-ahorcado.gif',
        imageAlt: 'gif',
        imageHeight: 250,
      });
      this.reiniciarJuego();
    }
  }
  private reiniciarJuego(): any {
    this.palabraSeleccionada =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraGuionada = this.generarPalabraGuionada(
      this.palabraSeleccionada
    );
    this.letrasRestantes = this.palabraSeleccionada.split('');
    this.letrasAdivinadas = [];
    this.letrasUtilizadas = [];
    this.intentosRestantes = 6;
    this.letraSeleccionada = '';
  }
}
