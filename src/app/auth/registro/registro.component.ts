import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from "sweetalert";
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;

  constructor(
    // tslint:disable-next-line: variable-name
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      dia: new FormControl(null, Validators.required),
      mes: new FormControl(null, Validators.required),
      ano: new FormControl(null, Validators.required),
      codigoPostal: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    }, {validators: this.sonIguales('password', 'password2')});

    this.forma.setValue({
      nombre: 'Test ',
      email: 'test@test.com',
      dia: '21',
      mes: '06',
      ano: '1990',
      codigoPostal: '15172',
      password: '123456',
      password2: '123456',
      condiciones: true
    });

  }

  registrarUsuario() {

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      swal('Importante', 'Debe de aceptar las condiciones', 'warning');
      return;
    }

    var limiteEdad = 14;

    var fechaHoy = new Date().getFullYear();

    var edad = fechaHoy - this.forma.value.ano;

    console.log(edad);

    if (edad <= limiteEdad) {
      swal('Importante', 'No puedes acceder a la plataforma. Tienes que ser mayor de ' + limiteEdad + ' años.', 'error');
      return;
    }

    var usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password,
      this.forma.value.dia,
      this.forma.value.mes,
      this.forma.value.ano,
      this.forma.value.codigoPostal
    );

    this._usuarioService.crearUsuario(usuario)
      .subscribe(resp => this.router.navigate(['/login']));
  }

}
