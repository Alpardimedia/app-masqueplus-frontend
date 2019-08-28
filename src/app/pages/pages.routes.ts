import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { InicioComponent } from './home/inicio/inicio.component';

const pagesRoutes: Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    children: [
      { path: 'admin', component: DashboardComponent },
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
  }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
