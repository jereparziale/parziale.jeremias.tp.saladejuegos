import { Component, inject } from '@angular/core';
import { Firestore,addDoc,collection, collectionData } from '@angular/fire/firestore';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private firestore: Firestore = inject(Firestore);

  constructor(private UserAuthService:UserAuthService,private router: Router) { 
  }
  public emailAccesoRapido='';
  public passwordAccesoRapido='';
  usuario = {
    email: '',
    password: ''
  }; 
  log = {
    usuario: '',
    fecha_Ingreso: ''
  };

  accesoRapido(){
    this.emailAccesoRapido="a552parziale@gmail.com"
    this.passwordAccesoRapido="12345678"
    this.usuario.email="a552parziale@gmail.com";
    this.usuario.password="12345678";

  }

  login() {
    console.log('Usuario que ingreso:', this.usuario);
    this.UserAuthService.login(this.usuario)
    .then(res =>{
      console.log("ingreso exitoso");
      this.log.usuario=this.usuario.email;
      const fechaActual = new Date();
      this.log.fecha_Ingreso = fechaActual.toISOString().slice(0, 10);
      const instanciaLog = collection(this.firestore, 'logs_login');
      addDoc(instanciaLog,this.log)
      .then(()=>{
        console.log("datos guardados");
        this.router.navigateByUrl("home");
      })
      .catch(error => console.error(error) );
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.error('El correo electrónico no se encuentra en nuestros registros. Por favor registrate.');
        //DESARROLLAR MAS CASOS
      } else if(error.code === 'auth/invalid-login-credentials'){
        console.error('Contraseña incorrecta por favor revisa el campo.');
      }else{
        console.error(error);
      }
    } )
    this.router.navigateByUrl("login");

  }


  registro() {
    this.router.navigateByUrl("register");
  }

}
 