import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { CommonModule } from '@angular/common';

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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AuthModule {}
