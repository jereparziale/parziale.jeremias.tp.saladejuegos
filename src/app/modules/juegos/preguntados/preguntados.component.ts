import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { ImagenesApiService } from 'src/app/services/imagenes-api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss'],
})
export class PreguntadosComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  private apiImagenes: ImagenesApiService = inject(ImagenesApiService);
  public instanciaFirestore = collection(this.firestore, 'preguntados');
  public pregunta: string = '';
  public op1: string = '';
  public op2: string = '';
  public op3: string = '';
  public jugando: boolean = false;
  public urlDeportes:string="";
  public urlGeografia:string="";
  public urlCiencia:string="";
  public urlPregunta:string="";
  private respuesta_correcta: number = 0;
  private cantRespuestasCorrectas: number = 0;
  private cantIntentos: number = 0;
  private dataPreguntas: any;
  private preguntasSeleccionadas: any[] = [];

  ngOnInit(): void {
    collectionData(this.instanciaFirestore).subscribe((data: any) => {
      console.log(data);
      this.dataPreguntas = data;
    });
    this.apiImagenes.solicitarImagen('geografia').subscribe(url => {
      console.log(url); 
      this.urlGeografia=url;
    });
    this.apiImagenes.solicitarImagen('sport').subscribe(url => {
      console.log(url); 
      this.urlDeportes=url;
    });
    this.apiImagenes.solicitarImagen('science test tubes').subscribe(url => {
      console.log(url); 
      this.urlCiencia=url;
    });
  }

  private cargarPregunta(): void {
    let preguntaSeleccionada;
    do {
      preguntaSeleccionada =
        this.dataPreguntas[
          Math.floor(Math.random() * this.dataPreguntas.length)
        ];
    } while (this.preguntasSeleccionadas.includes(preguntaSeleccionada));

    if(preguntaSeleccionada.categoria=="Deportes"){
      this.urlPregunta=this.urlDeportes;
    }else if(preguntaSeleccionada.categoria=="Ciencia"){
      this.urlPregunta=this.urlCiencia;
    }else{
      this.urlPregunta=this.urlGeografia;
    }
    this.preguntasSeleccionadas.push(preguntaSeleccionada);
    this.pregunta = preguntaSeleccionada.pregunta;
    this.op1 = preguntaSeleccionada.op1;
    this.op2 = preguntaSeleccionada.op2;
    this.op3 = preguntaSeleccionada.op3;
    this.respuesta_correcta = preguntaSeleccionada.respuesta_correcta;
    this.cantIntentos++;
  }
  public verRespuesta(respuesta: number) {
    if (respuesta == this.respuesta_correcta) {
      swal.fire({
        icon: 'success',
        title: 'Respuesta Correcta!',
      });
      this.cantRespuestasCorrectas++;
      if (!this.verificarPuntuacion()){
        this.cargarPregunta();
      } 
    } else {
      swal.fire({
        icon: 'error',
        title: 'Respuesta Incorrecta!',
        text: `La respuesta correcta es la opción ${this.respuesta_correcta}`,
      });
      if (!this.verificarPuntuacion()){
        this.cargarPregunta();
      } 
    }
  }

  public jugar() {
    this.jugando = true;
    this.cargarPregunta();
  }

  private verificarPuntuacion() {
    if (this.cantIntentos >= 5) {
      swal.fire({
        icon: 'success',
        title: 'Fin de la partida!',
        text: `Finalizaste con ${this.cantRespuestasCorrectas} correctas en ${this.cantIntentos} preguntas`,
      });
      this.jugando = false;
      return true;
    } else {
      return false;
    }
  }
}
