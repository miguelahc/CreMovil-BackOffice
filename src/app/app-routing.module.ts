import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      }, {
        path: 'perfil',
        loadChildren: () => import('./modules/perfil/perfil.module').then(m => m.PerfilModule)
      },{
        path: 'usuario',
        loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule),
      },{
        path: 'servicio',
        loadChildren: () => import('./modules/servicio/servicio.module').then(m => m.ServicioModule),
      },{
        path: 'parametro',
        loadChildren: () => import('./modules/parametro/parametro.module').then(m => m.ParametroModule),
      },{
        path: 'puntoayp',
        loadChildren: () => import('./modules/puntoayp/puntoayp.module').then(m => m.PuntoaypModule),
      },{
        path: 'changepass',
        loadChildren: () => import('./modules/auth/changepass/changepass.module').then(m => m.ChangePassModule),
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
