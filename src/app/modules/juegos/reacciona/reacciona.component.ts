import { Component, OnInit, inject } from '@angular/core';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { EstadisticasService } from 'src/app/services/firebase/juegos/estadisticas.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-reacciona',
  templateUrl: './reacciona.component.html',
  styleUrls: ['./reacciona.component.scss']
})
export class ReaccionaComponent implements OnInit{
  private estadisticasService: EstadisticasService = inject(EstadisticasService);
  private UserAuthService: UserAuthService = inject(UserAuthService); 

  public cuadricula: boolean[][] = [];
  public nivel: number = 1;
  private celdaActiva: { fila: number, columna: number } = { fila: -1, columna: -1 };
  public tiempoRestante: number = 5; 
  private tiempoPorNivel: number = 5; 
  private intervalo: any; 
  public jugando:boolean=false;
  private partidaGanada:boolean=false;

  estadistica = {
    usuario: '',
    juego: 'reacciona',
    resultadoPartida: false,
    fecha: new Date(), // Definición de fecha como tipo Date
  };

  ngOnInit() {
    this.inicializarCuadricula();
  }

  inicializarCuadricula() {
    for (let i = 0; i < 20; i++) {
      this.cuadricula[i] = [];
      for (let j = 0; j < 10; j++) {
        this.cuadricula[i][j] = false;
      }
    }
  }

  jugar() {
    this.celdaActiva=this.elegirCeldaAleatoria();
    this.cuadricula[this.celdaActiva.fila][this.celdaActiva.columna] = true;
    this.iniciarCuentaRegresiva();
    this.jugando=true;
  }

  reiniciarJuego() {

    this.UserAuthService.estadoLog()
    .then(() => {
      this.estadistica.resultadoPartida=this.partidaGanada;
       this.estadistica.usuario = this.UserAuthService.usuarioEmail;
       this.estadisticasService.alta(this.estadistica)

       this.detenerCuentaRegresiva();
       this.celdaActiva={ fila: -1, columna: -1 };
       this.tiempoRestante = 5; 
       this.tiempoPorNivel = 5; 
       this.nivel = 1; 
       this.jugando=false;
       this.partidaGanada=false;
   
       this.inicializarCuadricula();
    })
    .catch((error) => {
      console.log(error);
    });

    
  }

  siguienteNivel() {
    //paro la cuenta regresiva y el mensaje de perdiste
    this.detenerCuentaRegresiva();
    swal.fire({
      icon: 'info',
      title: 'Celda Correcta!',
      text: 'Continua con el siguiente nivel sera mas dificil!',
      showDenyButton: true,
      confirmButtonText: 'Continuar',
      denyButtonText: `Empezar Otra Vez`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.jugar();
      } else if (result.isDenied) {
        this.reiniciarJuego();
      }
    })
    this.celdaActiva={ fila: -1, columna: -1 };
    this.inicializarCuadricula();
    this.nivel++;
    this.tiempoPorNivel--;
    this.tiempoRestante=this.tiempoPorNivel;
  if(this.tiempoPorNivel<1){
    this.partidaGanada=true;
    swal.fire('No hay más Niveles','¡Has ganado!','success');
    this.reiniciarJuego();
  }
  }

  elegirCeldaAleatoria() {
    const filaAleatoria = Math.floor(Math.random() * 20);
    const columnaAleatoria = Math.floor(Math.random() * 10);
    return { fila: filaAleatoria, columna: columnaAleatoria };
  }

  clicEnCelda(fila: number, columna: number) {

    if(this.jugando){
      const celdaSeleccionada = {fila,columna};
      console.log(celdaSeleccionada);
      console.log(this.celdaActiva);
      if(celdaSeleccionada.fila === this.celdaActiva.fila && 
        celdaSeleccionada.columna === this.celdaActiva.columna){
         this.siguienteNivel();
        
      }else{
        swal.fire({
          icon: 'error',
          title: 'Perdiste!',
          text: 'No era la celda correcta!',
        });
        this.reiniciarJuego();
      }
    }else{
      swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Comienza la partida para jugar!',
      });
    }
    

  }

  iniciarCuentaRegresiva() {
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        this.reiniciarJuego();
        swal.fire({
          icon: 'error',
          title: 'Perdiste!',
          text: 'No diste el click a tiempo!',
        });
        clearInterval(this.intervalo); 
      }
    }, 800); 
  }

  detenerCuentaRegresiva() {
    clearInterval(this.intervalo); 
  }
}
