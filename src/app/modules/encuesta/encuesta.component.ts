import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from 'src/app/services/firebase/encuesta/encuesta.service';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {

  form!: FormGroup;
  usuarioEmail:string="";

  constructor(private encuestaService: EncuestaService,private UserAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      usuario:  new FormControl(''),
      apellido:  new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      edad: new FormControl('', [Validators.min(18),Validators.max(99)]),
      mail: new FormControl('', [Validators.email]),
      experienciaUsuario: new FormControl(''),
      juegoAhorcado: new FormControl(''),
      juegoMayorMenor: new FormControl(''),
      juegoPreguntados: new FormControl(''),
      juegoReacciona: new FormControl(''),
      recomendacion: new FormControl(''),
      nroTelefono: new FormControl('', [Validators.minLength(8),Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
    });

    this.UserAuthService.estadoLog()
    .then(() => {
      this.usuarioEmail = this.UserAuthService.usuarioEmail;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  habilitarRequerido(controlName: string) {
    this.form.get(controlName)?.setValidators([Validators.required]);
    this.form.get(controlName)?.updateValueAndValidity();
  }

  get apellido() {
    return this.form.get('apellido');
  }
  get recomendacion() {
    return this.form.get('recomendacion');
  }
  get juegoAhorcado() {
    return this.form.get('apellido');
  }
  get juegoMayorMenor() {
    return this.form.get('apellido');
  }
  get juegoPreguntados() {
    return this.form.get('apellido');
  }
  get juegoReacciona() {
    return this.form.get('apellido');
  }
  get nombre() {
    return this.form.get('nombre');
  }
  get edad() {
    return this.form.get('edad');
  }
  get mail() {
    return this.form.get('mail');
  }
  get nroTelefono() {
    return this.form.get('nroTelefono');
  }
  get experienciaUsuario() {
    return this.form.get('experienciaUsuario');
  }

  enviarForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      formData.usuario = this.usuarioEmail;
      
      this.encuestaService.alta(formData)
      .then(() => {
        swal.fire({
          icon: 'success',
          title: 'Encuesta enviada exitosamente',
        });

      })
      .catch((error) => {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text:error,
        });
        console.error('Error al intentar guardar:', error);
      })
    }
    
  }
}