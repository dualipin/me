import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  favoritos = [
    {
      image: 'https://www.normanrecords.com/artwork/medium/29/145529-mac-demarco-salad-days.jpg',
      type: 'Cancion',
      name: 'Chamber of Reflection',
    },
    {
      image: 'https://www.rollingstone.com/wp-content/uploads/2019/05/Mac_Demarco_by_Coley_Brown_April_2019_High_Res_02.jpg?crop=900:600&width=440',
      type: 'Cantante',
      name: 'Mac DeMarco',
    },
    {
      image: 'http://4.bp.blogspot.com/_KtvKiVmGPfU/TOBpG6XQ_yI/AAAAAAAAAcI/0eO1LV7EHCk/s1600/indiehi6.jpg',
      type: 'Genero',
      name: 'Indie',
    },
  ]
}
