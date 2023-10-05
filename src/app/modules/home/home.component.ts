import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  usuarioAutenticado: boolean = false;

  constructor(private UserAuthService:UserAuthService,private router: Router) { }

  ngOnInit(): void {
    this.UserAuthService.estadoLog()
      .then(() => {
        this.usuarioAutenticado = true;
      })
      .catch((error) => {
        console.log(error);
        // Manejar el error aquí si ocurre algún problema durante la autenticación
      });
  }

  irAhorcado(){
    if(this.usuarioAutenticado){
      this.router.navigateByUrl("juegos/ahorcado");
    }else{
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes estar logeado para jugar'
      })
    }
  }
  irMayorMenor(){
    if(this.usuarioAutenticado){
      this.router.navigateByUrl("juegos/mayor-menor");
    }else{
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes estar logeado para jugar'
      })
    }
  }


}
   