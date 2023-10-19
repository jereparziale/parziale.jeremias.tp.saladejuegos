import { Component, OnInit, inject } from '@angular/core';
import { ImagenesApiService } from 'src/app/services/apis/imagenes-api.service';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { EstadisticasService } from 'src/app/services/firebase/juegos/estadisticas.service';
import { PreguntadosService } from 'src/app/services/firebase/juegos/preguntados.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss'],
})
export class PreguntadosComponent implements OnInit {
  private estadisticasService: EstadisticasService = inject(EstadisticasService);
  private UserAuthService: UserAuthService = inject(UserAuthService); 
  private preguntadosService: PreguntadosService = inject(PreguntadosService);
  private apiImagenes: ImagenesApiService = inject(ImagenesApiService);


  public pregunta: string = '';
  public op1: string = '';
  public op2: string = '';
  public op3: string = '';
  public jugando: boolean = false;
  public urlDeportes: string = '';
  public urlGeografia: string = '';
  public urlCiencia: string = '';
  public urlPregunta: string = '';
  
  private respuesta_correcta: number = 0;
  private cantRespuestasCorrectas: number = 0;
  private cantIntentos: number = 0;
  private dataPreguntas: any;
  private preguntasSeleccionadas: any[] = [];



  estadistica = {
    usuario: '',
    juego: 'preguntados',
    puntuacion: 0,
    fecha: new Date(), // Definición de fecha como tipo Date
  };

  ngOnInit(): void {
    this.preguntadosService.traerTodasPreguntas().subscribe((data: any) => {
      this.dataPreguntas = data;
    });
    this.apiImagenes.solicitarImagen('geografia').subscribe((url) => {
      this.urlGeografia = url;
    });
    this.apiImagenes.solicitarImagen('sport').subscribe((url) => {
      this.urlDeportes = url;
    });
    this.apiImagenes.solicitarImagen('science test tubes').subscribe((url) => {
      this.urlCiencia = url;
    });
  }



  public verRespuesta(respuesta: number) {
    if (respuesta == this.respuesta_correcta) {
      swal.fire({
        icon: 'success',
        title: 'Respuesta Correcta!',
      });
      this.cantRespuestasCorrectas++;
      if (!this.verificarPuntuacion()) {
        this.cargarPregunta();
      }
    } else {
      swal.fire({
        icon: 'error',
        title: 'Respuesta Incorrecta!',
        text: `La respuesta correcta es la opción ${this.respuesta_correcta}`,
      });
      if (!this.verificarPuntuacion()) {
        this.cargarPregunta();
      }
    }
  }

  private cargarPregunta(): void {
    let preguntaSeleccionada;
    do {
      preguntaSeleccionada =
        this.dataPreguntas[
          Math.floor(Math.random() * this.dataPreguntas.length)
        ];
    } while (this.preguntasSeleccionadas.includes(preguntaSeleccionada));
    this.cargarDatosPreguntaHtml(preguntaSeleccionada);
    this.cantIntentos++;
  }

  public jugar() {
    this.jugando = true;
    this.cargarPregunta();
  }

  private verificarPuntuacion() {
    if (this.cantIntentos >= 5) {

      this.UserAuthService.estadoLog()
      .then(() => {
        this.estadistica.puntuacion=this.cantRespuestasCorrectas;
         this.estadistica.usuario = this.UserAuthService.usuarioEmail;
         this.estadisticasService.alta(this.estadistica)

         swal.fire({
          icon: 'success',
          title: 'Fin de la partida!',
          text: `Finalizaste con ${this.cantRespuestasCorrectas} correctas en ${this.cantIntentos} preguntas`,
        });
        this.jugando = false;
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
    } 
    return false;
  }




  private cargarDatosPreguntaHtml(preguntaSeleccionada: any) {
    if (preguntaSeleccionada.categoria == 'Deportes') {
      this.urlPregunta = this.urlDeportes;
    } else if (preguntaSeleccionada.categoria == 'Ciencia') {
      this.urlPregunta = this.urlCiencia;
    } else {
      this.urlPregunta = this.urlGeografia;
    }
    this.preguntasSeleccionadas.push(preguntaSeleccionada);
    this.pregunta = preguntaSeleccionada.pregunta;
    this.op1 = preguntaSeleccionada.op1;
    this.op2 = preguntaSeleccionada.op2;
    this.op3 = preguntaSeleccionada.op3;
    this.respuesta_correcta = preguntaSeleccionada.respuesta_correcta;
  }
}
