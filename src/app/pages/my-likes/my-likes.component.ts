import { Component } from '@angular/core';

@Component({
  selector: 'app-my-likes',
  templateUrl: './my-likes.component.html',
  styleUrls: ['./my-likes.component.css']
})
export class MyLikesComponent {
  sites = [
    {
      name: 'Canciones',
      url: 'cancion'
    },
    {
      name: 'Cantante',
      url: 'cantante'
    },
    {
      name: 'Genero',
      url: 'genero'
    }
  ]
}
