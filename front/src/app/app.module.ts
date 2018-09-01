import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {FilmComponent} from './film/film.component'

@NgModule({
    declarations: [
        AppComponent,
        FilmComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        // RouterModule.forRoot(routes, {useHash: true}),
    ],
    providers: [

    ],
    bootstrap: []
})
export class AppModule {
}
