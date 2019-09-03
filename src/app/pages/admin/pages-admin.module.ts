import { NgModule } from "@angular/core";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    PerfilComponent
  ],
  exports: [
    AccountSettingsComponent,
    PerfilComponent
  ]
})

export class PageAdminModule { }
