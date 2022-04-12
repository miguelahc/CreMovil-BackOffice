import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicioComponent} from './servicio.component';
import { AuthGuard } from '../../../app/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ServicioComponent, canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Servicio',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Perfil',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
