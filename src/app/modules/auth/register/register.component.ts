import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';
import swal from'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private UserAuthService:UserAuthService,private router: Router){
  }
  usuario = {
    email: '',
    password: ''
  };


  registro() {
    console.log('Usuario registrado:', this.usuario);
    this.UserAuthService.registro(this.usuario)
    .then(res =>{
      console.log(res);
      this.router.navigateByUrl("home");
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El correo electrónico ya está en uso. Por favor, elige otro correo electrónico.',
        })
        //DESARROLLAR MAS CASOS
      }else{
        console.error(error);
      }
    } );
  }


}
 