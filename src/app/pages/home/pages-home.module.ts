import { NgModule } from "@angular/core";
import { InicioComponent } from './inicio/inicio.component';
import { HeaderFrontComponent } from 'src/app/shared/header-front/header-front.component';
import { SidebarFrontComponent } from 'src/app/shared/sidebar-front/sidebar-front.component';
import { ModalComponent } from 'src/app/auth/modal/modal.component';
import { RegistroComponent } from 'src/app/auth/registro/registro.component';
import { RecuperarComponent } from 'src/app/auth/recuperar/recuperar.component';
import { FooterFrontComponent } from 'src/app/shared/footer-front/footer-front.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { BreadcrumbsComponent } from 'src/app/shared/admin/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [

  ],
  exports: [
    InicioComponent,
    BreadcrumbsComponent,
    HeaderFrontComponent,
    SidebarFrontComponent,
    ModalComponent,
    RegistroComponent,
    RecuperarComponent,
    FooterFrontComponent
  ]
})

export class PagesHomeModule { }
