import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    // localhost:4200
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    // ruta de autentificacion
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    // redireccion al home
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    // rutas inexistentes
    // si yo coloco una ruta que no haya sido definida me vas a mandar a la ruta error 404
    path: '**',
    redirectTo: 'error/404',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
