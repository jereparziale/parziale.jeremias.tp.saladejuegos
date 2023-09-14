import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/home/quien-soy/quien-soy.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { CarrouselJuegosComponent } from './components/home/carrousel-juegos/carrousel-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuienSoyComponent,
    NavbarComponent,
    BannerComponent,
    CarrouselJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
