import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

@NgModule({
  declarations: [
    LoginComponent,
    ModalComponent,
    RegistroComponent,
    RecuperarComponent
  ],
  exports: [
    LoginComponent,
    ModalComponent,
    RegistroComponent,
    RecuperarComponent
  ]
})

export class AuthModule {}
