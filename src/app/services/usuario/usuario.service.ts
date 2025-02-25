import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    console.log('Servicio de usuario listo');

    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/']);
  }

  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, {token})
      .map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);

        return true;
      });
  }

  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
      .map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
      })
      .catch(err => {
        swal('Error en el login', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario)
      .map((res: any) => {
        swal('Usuario creado', usuario.email, 'success');
        return res.usuario;
      })
      .catch(err => {
        console.log(err);
        swal(err.error.mensaje, err.error.errors.message, 'error');
        return Observable.throw(err);
      });
  }
}
