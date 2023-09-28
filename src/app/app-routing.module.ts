import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/home/quien-soy/quien-soy.component';
import {JugarComponent  } from './components/home/jugar/jugar.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  //pathmatch
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada
  {path: 'home',
    component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jugar', component: JugarComponent,
  ...canActivate(()=> redirectUnauthorizedTo(['login']))  },
  { path: 'quien_soy', component: QuienSoyComponent, 
  ...canActivate(()=> redirectUnauthorizedTo(['login'])) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
