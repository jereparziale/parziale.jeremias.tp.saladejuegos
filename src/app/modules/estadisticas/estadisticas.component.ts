import { Component, OnInit, inject } from '@angular/core';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { EstadisticasService } from 'src/app/services/firebase/juegos/estadisticas.service';
interface Estadistica {
  juego: string;
  resultadoPartida: boolean;
  puntuacion: number;
}

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit{
  private estadisticasService: EstadisticasService = inject(EstadisticasService);
  private UserAuthService: UserAuthService = inject(UserAuthService);
  estadisticas: Estadistica[] = [];

  public partidasGanadasAhorcado=0;
  public partidasJugadasAhorcado=0;
  public partidasGanadasReacciona=0;
  public partidasJugadasReacciona=0;
  public puntuacionAcumuladaPreguntados=0;
  public partidasJugadasPreguntados=0;
  public puntuacionAcumuladaMMayorMenor=0;
  public partidasJugadasMayorMenor=0;
  public mensajeAhorcado=``;
  public mensajePreguntados=``;
  public mensajeReacciona=``;
  public mensajeMayorMenor=``;


  ngOnInit(){
    this.UserAuthService.estadoLog()
    .then(() => {
      this.estadisticasService.traerTodos(this.UserAuthService.usuarioEmail)
      .subscribe((data: Estadistica[]) => {
        console.log(data);
        this.estadisticas=data;
        this.CargarDatosEstadisticas();
      });

    })
    .catch((error) => {
      console.log(error);
    });
  }


  private CargarDatosEstadisticas() {
    this.estadisticas.forEach(estadistica => {

      switch (estadistica.juego) {
        case 'ahorcado':
          this.partidasJugadasAhorcado++;
          if (estadistica.resultadoPartida == true) {
            this.partidasGanadasAhorcado++;
          }
          break;

        case 'preguntados':
          this.partidasJugadasPreguntados++;
          this.puntuacionAcumuladaPreguntados += estadistica.puntuacion;
          break;

        case 'mayor-menor':
          this.partidasJugadasMayorMenor++;
          this.puntuacionAcumuladaMMayorMenor += estadistica.puntuacion;
          break;

        case 'reacciona':
          this.partidasJugadasReacciona++;
          if (estadistica.resultadoPartida == true) {
            this.partidasGanadasReacciona++;
          }
          break;

        default:
          // Lógica para otros casos o valores inesperados
          break;
      }
    });
    if (this.partidasJugadasAhorcado === 0) {
      this.mensajeAhorcado = 'Aún no has jugado a este juego';
    } else {
      this.mensajeAhorcado = `De ${this.partidasJugadasAhorcado} partidas jugadas lograste ganar en ${this.partidasJugadasAhorcado}`;
    }
    
    if (this.partidasJugadasReacciona === 0) {
      this.mensajeReacciona = 'Aún no has jugado a este juego';
    } else {
      this.mensajeReacciona = `En ${this.partidasJugadasReacciona} partidas jugadas lograste ganar en ${this.partidasGanadasReacciona}`;
    }
    
    if (this.partidasJugadasPreguntados === 0) {
      this.mensajePreguntados = 'Aún no has jugado a este juego';
    } else {
      this.mensajePreguntados = `En ${this.partidasJugadasPreguntados} partidas jugadas conseguiste un promedio de ${((this.puntuacionAcumuladaPreguntados / this.partidasJugadasPreguntados)).toFixed(2)} apuestas correctas de 5 por partida`;
    }
    
    if (this.partidasJugadasMayorMenor === 0) {
      this.mensajeMayorMenor = 'Aún no has jugado a este juego';
    } else {
      this.mensajeMayorMenor = `En ${this.partidasJugadasMayorMenor} partidas jugadas conseguiste un promedio de ${((this.puntuacionAcumuladaMMayorMenor / this.partidasJugadasMayorMenor)).toFixed(2)} apuestas correctas de 12 por partida`;
    }
    
  }
}
