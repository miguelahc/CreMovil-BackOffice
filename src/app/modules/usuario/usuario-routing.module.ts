import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioComponent} from './usuario.component';
import { AuthGuard } from '../../../app/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent, canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Usuarios',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Button',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
