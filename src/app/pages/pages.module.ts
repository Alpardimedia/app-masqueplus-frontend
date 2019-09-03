import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { AccountSettingsComponent } from './admin/account-settings/account-settings.component';
import { PageAdminModule } from './admin/pages-admin.module';
import { ServiceModule } from '../services/service.module';

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
    CommonModule,
    ServiceModule,
    PAGES_ROUTES,
    AuthModule,
    PageAdminModule,
    SharedModule
  ]
})

export class PagesModule { }
