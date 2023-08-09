import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeComponent as HomeLikesComponent } from './pages/my-likes/home/home.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinkComponent } from './components/nav/link/link.component';
import { CancionComponent } from './pages/my-likes/cancion/cancion.component';
import { CantanteComponent } from './pages/my-likes/cantante/cantante.component';
import { GeneroComponent } from './pages/my-likes/genero/genero.component';
import { MyLikesComponent } from './pages/my-likes/my-likes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyLikesComponent,
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactMeComponent,
    FooterComponent,
    LinkComponent,
    CancionComponent,
    CantanteComponent,
    GeneroComponent,
    HomeLikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
