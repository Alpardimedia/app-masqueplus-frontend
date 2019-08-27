import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { InicioComponent } from './pages/home/inicio/inicio.component';

const appRoutes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: '', component: InicioComponent },
      // { path: '', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    component: PagesComponent,
    children: [
      { path: 'admin', component: DashboardComponent },
      { path: '', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: LoginComponent },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
