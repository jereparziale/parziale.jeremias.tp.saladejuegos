import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  orderBy,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { limit, query } from 'firebase/firestore';
import { UserAuthService } from 'src/app/services/user-auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  constructor(
    private UserAuthService: UserAuthService,
    private router: Router
  ) {}
  private firestore: Firestore = inject(Firestore);
  public instanciaFirestore = collection(this.firestore, 'mensajes');
  public queryInstancia:any | undefined;
  public usuarioActual: string = '';
  public usuarioAutenticado: boolean | undefined;
  public mensajes: any[] = [];

  mensaje = {
    usuario: '',
    mensaje: '',
    fecha: new Date(), // Definición de fecha como tipo Date
  };

  ngOnInit(): void {
    this.UserAuthService.estadoLog()
      .then(() => {
        this.usuarioActual = this.UserAuthService.usuarioEmail;
        this.usuarioAutenticado = true;
        this.mensaje.usuario = this.usuarioActual;
        //EN SERVICIO DE CHAT/FIRESTORE
        const colRef = collection(this.firestore, 'mensajes');
        this.queryInstancia = query(colRef, orderBy('fecha', 'desc'), limit(20));
        collectionData(this.queryInstancia).subscribe((data: any) => {
          this.mensajes = data;
          this.mensajes = data.reverse();
          this.mensajes.forEach((mensaje: any) => {
            mensaje.fecha = this.formatearFecha(mensaje.fecha.toDate());
            if (mensaje.usuario === this.usuarioActual) {
              mensaje.clase = 'user-mensaje';
            } else {
              mensaje.clase = 'otro-user-mensaje';
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public enviarMensaje() {
    if (this.mensaje.mensaje.length>0) {
      const fechaActual = new Date();
      this.mensaje.fecha = fechaActual;

      addDoc(this.instanciaFirestore, this.mensaje)
        .then(() => {
          console.log('mensaje enviado \n' + this.mensaje);
        })
        .catch((error) => console.error(error));
    }else{
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El mensaje debe tener al menos 1 caracter',
      });
    }
    this.mensaje.mensaje = '';
  }

  ngOnDestroy(): void {
    //desuscribirse
  }

  private formatearFecha(fecha: Date) {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    return `${dia}/${mes}/${fecha.getFullYear()} ${hora}:${minutos}`;
  }

  verificarAcceso(event: Event) {
    if (!this.usuarioActual) {
      event.stopPropagation();
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes estar logeado para chatear',
      });
    }
  }
  // verificarAcceso() {
  //   if (!this.usuarioActual) {
  //     this.router.navigateByUrl('auth/login');

  //   }
  // }
}
