import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  //names of routes
  routes = [
    { name: 'Inicio', link: '/home' },
    { name: 'Mis Gustos', link: '/my-likes' },
    { name: 'Contácteme', link: '/contact-me' },
  ]
}
