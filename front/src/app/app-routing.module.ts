import { NgModule } from '@angular/core';
import {FilmComponent} from "./film/film.component";
import {AppComponent} from "./app.component";
import { Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {path: 'film/:id', component: FilmComponent},
    {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
