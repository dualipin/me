import { Component } from '@angular/core';

interface Comentario {
  nombre: string;
  correo: string;
  mensaje: string;
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  comentarios: Comentario[] = [
    {
      nombre: 'Juan',
      correo: 'correo@dasdasda.com',
      mensaje: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
  ]


  nombre: string = ''
  correo: string = ''
  mensaje: string = ''

  agregarComentario() {
    this.comentarios.push({
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    })

    this.nombre = ''
    this.correo = ''
    this.mensaje = ''
  }
}
