import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent {
  canciones = [
    {
      imagen: 'https://www.normanrecords.com/artwork/medium/29/145529-mac-demarco-salad-days.jpg',
      metadata: [
        { name: 'Titulo', value: 'Chamber of Reflection' },
        { name: 'Artista', value: 'Mac DeMarco' },
        { name: 'Genero', value: 'Indie' },
        { name: 'Duracion', value: '3:51' },
        { name: 'Album', value: 'Salad Days' },
        { name: 'Año', value: '2014' },
        { name: 'Compositor', value: 'Mac DeMarco' },
        { name: 'Productor', value: 'Mac DeMarco' },
        { name: 'Discografica', value: 'Captured Tracks' },
        { name: 'Escritor', value: 'Mac DeMarco' },
        { name: 'Fecha de lanzamiento', value: '2014-04-01' },

      ]
    },
    {
      imagen: 'https://i1.sndcdn.com/artworks-000274330991-b0ml94-t500x500.jpg',
      metadata: [
        { name: 'Titulo', value: 'For the First Time' },
        { name: 'Artista', value: 'Mac DeMarco' },
        { name: 'Genero', value: 'Indie' },
        { name: 'Duracion', value: '3:05' },
        { name: 'Album', value: 'This Old Dog' },
        { name: 'Año', value: '2017' },
        { name: 'Compositor', value: 'Mac DeMarco' },
        { name: 'Productor', value: 'Mac DeMarco' },
        { name: 'Discografica', value: 'Captured Tracks' },
        { name: 'Escritor', value: 'Mac DeMarco' },
        { name: 'Fecha de lanzamiento', value: '2017-03-30' },
      ]
    },
    {
      imagen: 'https://i.pinimg.com/originals/42/00/ab/4200ab1acdf0d8b5ebfacb00544181ec.jpg',
      metadata: [
        { name: 'Titulo', value: 'Demons' },
        { name: 'Artista', value: 'Joji' },
        { name: 'Genero', value: 'R&B' },
        { name: 'Duracion', value: '3:23' },
        { name: 'Album', value: 'BALLADS 1' },
        { name: 'Año', value: '2018' },
        { name: 'Compositor', value: 'George Miller' },
        { name: 'Productor', value: 'George Miller' },
        { name: 'Discografica', value: '88rising Music/12Tone Music' },
        { name: 'Escritor', value: 'George Miller' },
        { name: 'Fecha de lanzamiento', value: '2018-10-26' },
      ]
    }

  ]


}
