import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/home/quien-soy/quien-soy.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { CarrouselJuegosComponent } from './components/home/carrousel-juegos/carrousel-juegos.component';
import { environment } from '../environments/environment';
import { provideFirebaseApp,initializeApp  } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AhorcadoComponent } from './components/juegos/ahorcado/ahorcado.component';
import { MayoMenorComponent } from './components/juegos/mayo-menor/mayo-menor.component';
import { JugarComponent } from './components/home/jugar/jugar.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuienSoyComponent,
    NavbarComponent,
    BannerComponent,
    CarrouselJuegosComponent,
    AhorcadoComponent,
    MayoMenorComponent,
    JugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
