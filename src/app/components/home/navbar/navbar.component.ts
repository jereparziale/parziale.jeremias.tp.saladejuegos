import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  usuarioAutenticado: boolean = false;
  usuarioEmail: string = '';

  constructor(private UserAuthService:UserAuthService,private router: Router) { }

 
  ngOnInit(): void {
    this.UserAuthService.estadoLog()
      .then(() => {
        this.usuarioEmail = this.UserAuthService.usuarioEmail;
        this.usuarioAutenticado = true;
        console.log(this.usuarioEmail);
      })
      .catch((error) => {
        console.log(error);
        // Manejar el error aquí si ocurre algún problema durante la autenticación
      });
  }
  quiensoy() {
    this.router.navigateByUrl("quien_soy");
  }
  cerrarSesion() {
    this.UserAuthService.logout()
    .then(() =>{
      this.router.navigateByUrl("login");
    })
    .catch(error => console.error(error) );
  }
  login() {
      this.router.navigateByUrl("login");
  }
  
  registrarse() {
      this.router.navigateByUrl("register");
  }
}
