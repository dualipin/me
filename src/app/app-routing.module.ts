import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HomeComponent as HomeLikesComponent } from './pages/my-likes/home/home.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { MyLikesComponent } from './pages/my-likes/my-likes.component';
import { CancionComponent } from './pages/my-likes/cancion/cancion.component';
import { CantanteComponent } from './pages/my-likes/cantante/cantante.component';
import { GeneroComponent } from './pages/my-likes/genero/genero.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Sobre Martin Sanchez' },
  {
    path: 'my-likes', component: MyLikesComponent, title: 'Mis Gustos',
    children: [
      { path: '', component: HomeLikesComponent, title: 'Mis Gustos' },
      {
        path: 'cancion', component: CancionComponent, title: 'Mis Canciones',
      },
      {
        path: 'cantante', component: CantanteComponent, title: 'Mis Cantantes',
      },
      {
        path: 'genero', component: GeneroComponent, title: 'Mis Generos',
      }
    ]
  },
  { path: 'contact-me', component: ContactMeComponent, title: 'Contácteme' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
