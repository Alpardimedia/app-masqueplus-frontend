import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/shared/admin/header/header.component';
import { SidebarComponent } from 'src/app/shared/admin/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/shared/admin/footer/footer.component';

@NgModule({
  declarations: [

  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]
})

export class PagesAdminModule { }
