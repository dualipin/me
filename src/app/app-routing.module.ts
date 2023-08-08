import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyLikesComponent } from './pages/my-likes/my-likes.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '/', redirectTo: 'home', pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'my-likes', component: MyLikesComponent
  },
  {
    path: 'contact-me', component: ContactMeComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
