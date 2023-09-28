import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import swal from'sweetalert2';


@Component({
  selector: 'app-carrousel-juegos',
  templateUrl: './carrousel-juegos.component.html',
  styleUrls: ['./carrousel-juegos.component.scss']
})
export class CarrouselJuegosComponent {
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
      this.router.navigateByUrl("jugar");
    }else{
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes estar logeado para jugar'
      })
    }
  }

}
 