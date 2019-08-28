import { NgModule } from "@angular/core";
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';


import { BreadcrumbsComponent } from './admin/breadcrumbs/breadcrumbs.component';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { SidebarFrontComponent } from './sidebar-front/sidebar-front.component';
import { FooterFrontComponent } from './footer-front/footer-front.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,

    BreadcrumbsComponent,
    HeaderFrontComponent,
    SidebarFrontComponent,
    FooterFrontComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,

    BreadcrumbsComponent,
    HeaderFrontComponent,
    SidebarFrontComponent,
    FooterFrontComponent
  ]
})

export class SharedModule { }
