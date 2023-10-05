import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//modulos
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { JuegosModule } from './modules/juegos/juegos.module';

//servicios
import { environment } from '../environments/environment';
import { provideFirebaseApp,initializeApp  } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';





@NgModule({
  declarations: [
    AppComponent,HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    SharedModule,
    JuegosModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
