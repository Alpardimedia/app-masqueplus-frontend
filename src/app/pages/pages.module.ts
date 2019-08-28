import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    PagesComponent,

    // Paginas Admin
    DashboardComponent,

    // Paginas Home
    InicioComponent
  ],
  exports: [
    // Paginas Admin
    DashboardComponent,

    // Paginas Home
    InicioComponent
  ],
  imports: [
    PAGES_ROUTES,
    AuthModule,
    SharedModule
  ]
})

export class PagesModule { }
