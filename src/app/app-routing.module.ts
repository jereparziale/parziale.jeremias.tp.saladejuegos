import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomeComponent } from './modules/home/home.component';
import { QuienSoyComponent } from './modules/home/quien-soy/quien-soy.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  //lazy loading
  { path: 'quien_soy', component: QuienSoyComponent, },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  //comunicar cargando tiempo de respuesta login/register
  { path: 'juegos', loadChildren: () => import('./modules/juegos/juegos.module').then(m => m.JuegosModule), 
  ...canActivate(()=> redirectUnauthorizedTo(['login']))  },
  //resta pagina 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
