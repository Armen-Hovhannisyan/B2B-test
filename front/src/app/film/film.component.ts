import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'film-component',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
    public film_id:number;
    public filmData:any = '';
    constructor( private route: ActivatedRoute,private apiService:ApiService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.film_id = 'id' in params ? params['id'] : null;
            this.getFilm();
        });
    }

    getFilm(){
        this.apiService.getFilm( this.film_id).subscribe((res:any) => {
            if(res.success){
                this.filmData = res.film;
            }
        })
    }

}