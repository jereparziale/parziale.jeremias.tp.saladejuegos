import { Component, inject } from '@angular/core';
import { Firestore,addDoc,collection, collectionData } from '@angular/fire/firestore';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
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
  public cargando:boolean=true;
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
    this.cargando = true; 
    console.log(this.cargando);
    console.log('Usuario que ingreso:', this.usuario);
    this.UserAuthService.login(this.usuario)
    .then(()=>{
      this.log.usuario=this.usuario.email;

      const fechaActual = new Date();
      this.log.fecha_Ingreso = fechaActual.toISOString().slice(0, 10);
      this.UserAuthService.guardarLog(this.log)
      .then(()=>{
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
      this.router.navigateByUrl("login");

    } )
    .finally(() => {
      this.cargando = false; 
    });

  }


  registro() {
    this.router.navigateByUrl("register");
  }



  // codigo no se utiliza
  // public pregunta = {
  //   pregunta:'',
  //   categoria:'',
  //   op1: '',
  //   op2: '',
  //   op3: '',
  //   respuesta_correcta:''
  // };

  // public datos = [
  //   {
  //     pregunta: '¿Cuál es el símbolo químico del agua?',
  //     categoria: 'Ciencia',
  //     op1: 'H2O',
  //     op2: 'CO2',
  //     op3: 'NaCl',
  //     respuesta_correcta: '1',
  //   },
  //   {
  //     pregunta: '¿Cuál es el planeta más cercano al Sol en nuestro sistema solar?',
  //     categoria: 'Ciencia',
  //     op1: 'Venus',
  //     op2: 'Tierra',
  //     op3: 'Mercurio',
  //     respuesta_correcta: '3',
  //   },
  //   {
  //     pregunta: '¿Cuál es el ácido presente en los limones?',
  //     categoria: 'Ciencia',
  //     op1: 'Ácido acético',
  //     op2: 'Ácido sulfúrico',
  //     op3: 'Ácido cítrico',
  //     respuesta_correcta: '3',
  //   },
  //   {
  //     pregunta: '¿Cuál es el proceso por el cual las plantas fabrican su propio alimento utilizando la luz solar?',
  //     categoria: 'Ciencia',
  //     op1: 'Fotosíntesis',
  //     op2: 'Respiración celular',
  //     op3: 'Mitosis',
  //     respuesta_correcta: '1',
  //   },
  //   {
  //     pregunta: '¿Cuál es el gas más abundante en la atmósfera de la Tierra?',
  //     categoria: 'Ciencia',
  //     op1: 'Oxígeno',
  //     op2: 'Nitrógeno',
  //     op3: 'Dióxido de carbono',
  //     respuesta_correcta: '2',
  //   },
  //   {
  //     pregunta: '¿Cuál es el proceso por el cual el agua se convierte en vapor?',
  //     categoria: 'Ciencia',
  //     op1: 'Evaporación',
  //     op2: 'Condensación',
  //     op3: 'Precipitación',
  //     respuesta_correcta: '1',
  //   },
  //   {
  //     pregunta: '¿Cuál es el elemento químico más ligero?',
  //     categoria: 'Ciencia',
  //     op1: 'Hidrógeno',
  //     op2: 'Helio',
  //     op3: 'Carbono',
  //     respuesta_correcta: '1',
  //   },
  //   {
  //     pregunta: '¿Cuál es la capa más externa de la Tierra?',
  //     categoria: 'Ciencia',
  //     op1: 'Núcleo',
  //     op2: 'Manto',
  //     op3: 'Corteza',
  //     respuesta_correcta: '3',
  //   },
  //   {
  //     pregunta: '¿Cuál es la unidad básica de la herencia en los seres vivos?',
  //     categoria: 'Ciencia',
  //     op1: 'Gen',
  //     op2: 'Átomo',
  //     op3: 'Célula',
  //     respuesta_correcta: '1',
  //   },
  //   {
  //     pregunta: '¿Cuál es el proceso por el cual la sangre se coagula para detener una hemorragia?',
  //     categoria: 'Ciencia',
  //     op1: 'Fotosíntesis',
  //     op2: 'Respiración celular',
  //     op3: 'Mitosis',
  //     respuesta_correcta: '1',
  //   },
  // ];
  
  
  
  
  
  
  
  // convertirDatosAPreguntas(datos: any[]): any[] {
  //   return datos.map((item, index) => ({
  //     pregunta: item.pregunta,
  //     categoria: item.categoria,
  //     op1: item.op1,
  //     op2: item.op2,
  //     op3: item.op3,
  //     respuesta_correcta: item.respuesta_correcta,
  //   }));
  // }
  
  // cargarDatos() {
  //   const preguntas = this.convertirDatosAPreguntas(this.datos);
  //     const instanciaLog = collection(this.firestore, 'preguntados');
  //     preguntas.forEach(element => {
  //       addDoc(instanciaLog,element)
  //     .then(()=>{
  //       console.log("datos guardados preguntados");
  //       this.router.navigateByUrl("home");
  //     })
  //     .catch(error => console.error(error) );
  //     });
      
  //   }

}
 