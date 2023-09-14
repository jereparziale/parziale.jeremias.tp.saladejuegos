import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { CarrouselJuegosComponent } from './components/home/carrousel-juegos/carrousel-juegos.component';
import { QuienSoyComponent } from './components/home/quien-soy/quien-soy.component';

const routes: Routes = [
  //pathmatch
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada
  {path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'navbar',
        pathMatch: 'full'
      },
      {
        path: 'navbar',
        component: NavbarComponent,
        outlet: 'navbar' // Nombre de salida para NavbarComponent
      },
      {
        path: 'banner',
        component: BannerComponent,
        outlet: 'banner' // Nombre de salida para BannerComponent
      },
      {
        path: 'carrousel-juegos',
        component: CarrouselJuegosComponent,
        outlet: 'carrousel-juegos' // Nombre de salida para CarrouselJuegosComponent
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quien_soy', component: QuienSoyComponent },

  // Agrega cualquier otra ruta que necesites aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
