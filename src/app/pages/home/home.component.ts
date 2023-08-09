import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bio = [
    {
      icon: 'fa-solid fa-location-dot',
      type: 'Ubicación',
      value: 'Macuspana, Tabasco, México'
    },
    {
      icon: 'fa-solid fa-birthday-cake',
      type: 'Edad',
      value: '20 años'
    },
    {
      icon: 'fa-solid fa-school',
      type: 'Educación',
      value: 'Ingeniería en Sistemas Computacionales'
    },
    {
      icon: 'fa-solid fa-briefcase',
      type: 'Ocupación',
      value: 'Estudiante y Desarrollador Web JR'
    }
  ]

  contact = [
    {
      icon: 'fa-brands fa-github',
      type: 'Github',
      value: 'dualipin',
      link: 'https://github.com/dualipin'
    },
    {
      icon: 'fa-solid fa-envelope',
      type: 'Email',
      value: 'martin.msr1304@gmail.com',
      link: 'mailto:martin.msr1304@gmail.com'
    },
    {
      icon: 'fa-solid fa-phone',
      type: 'Teléfono',
      value: '+52 936 107 57 28',
      link: 'tel:+529361075728'
    },
  ]
}
