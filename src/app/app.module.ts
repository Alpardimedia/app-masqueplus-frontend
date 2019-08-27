import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/admin/header/header.component';
import { SidebarComponent } from './shared/admin/sidebar/sidebar.component';
import { FooterComponent } from './shared/admin/footer/footer.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/admin/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { InicioComponent } from './pages/home/inicio/inicio.component';
import { HeaderFrontComponent } from './shared/header-front/header-front.component';
import { SidebarFrontComponent } from './shared/sidebar-front/sidebar-front.component';
import { FooterFrontComponent } from './shared/footer-front/footer-front.component';
import { ModalComponent } from './auth/modal/modal.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { RecuperarComponent } from './auth/recuperar/recuperar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PagesComponent,
    InicioComponent,
    HeaderFrontComponent,
    SidebarFrontComponent,
    ModalComponent,
    RegistroComponent,
    RecuperarComponent,
    FooterFrontComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
