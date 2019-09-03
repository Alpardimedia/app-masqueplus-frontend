import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { PerfilComponent } from './admin/perfil/perfil.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { RecuperarComponent } from '../auth/recuperar/recuperar.component';
import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'admin', component: DashboardComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: '', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: '', component: InicioComponent },
      // { path: '', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recuperar', component: RecuperarComponent },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
