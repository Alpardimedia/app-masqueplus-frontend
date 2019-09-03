import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Inicio',
      icono: 'fa fa-home',
      url: ''
    },
    {
      titulo: 'Nosotros',
      icono: 'assets/images/usuarios/logo_masqueplus.png',
      url: ''
    },
    {
      titulo: 'Contacto',
      icono: 'fa fa-phone',
      url: ''
    },
    {
      titulo: 'Legal',
      icono: 'fa fa-balance-scale',
      url: ''
    },
    {
      titulo: 'Facebook',
      icono: 'fa fa-facebook',
      url: 'https://www.facebook.com/Masquepluscom/'
    },
    {
      titulo: 'Twitter',
      icono: 'fa fa-twitter',
      url: 'https://twitter.com/Masquepluscom'
    },
    {
      titulo: 'Instagram',
      icono: 'fa fa-instagram',
      url: 'https://www.instagram.com/masquepluscom/'
    }
  ]

  constructor() { }
}
