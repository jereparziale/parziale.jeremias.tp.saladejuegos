import { Injectable, inject} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Auth, authState,createUserWithEmailAndPassword,signInWithEmailAndPassword } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private auth: Auth = inject(Auth);
  usuarioAutenticado: boolean = false;
  usuarioEmail: any = '';
  constructor() {
  }
   estadoLog() {
    return new Promise((resolve, reject) => {
      authState(this.auth).subscribe((res) => {
        if (res) {
          this.usuarioAutenticado = true;
          this.usuarioEmail = res.email;
          resolve(res.email);
        } else {
          this.usuarioAutenticado = false;
          this.usuarioEmail = null;
          reject('Usuario no autenticado');
        }
      });
    });
  }


  registro({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth,email, password);
  }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth,email, password);
  }

  logout() {
    return this.auth.signOut();
  }
}
