import { NgModule } from '@angular/core';
import {FilmComponent} from "./film/film.component";
import {HomeComponent} from "./home/home.component";
import { Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {path: 'film/:id', component: FilmComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
