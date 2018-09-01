import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
    selector: 'film-component',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
    public film_id: number;
    public filmData: any = '';

    constructor(private activateRoute: ActivatedRoute, private  route: Router, private apiService: ApiService) {
    }

    ngOnInit() {
        this.activateRoute.params.subscribe(params => {
            this.film_id = 'id' in params ? params['id'] : null;
            this.getFilm();
        });
    }

    getFilm() {
        this.apiService.getFilm(this.film_id).subscribe((res: any) => {
            if (res.success) {
                this.filmData = res.film;
                if(this.filmData['imdbRating'] !=='N/A') {
                    let reting = this.filmData['imdbRating'] / 10 * 10
                    let count = Math.round(reting);
                    var starChecked = new Array(count);
                    this.filmData.starChecked = starChecked
                    let starAnCheckedCount = new Array(10 - count)
                    this.filmData.starAnChecked = starAnCheckedCount;
                }else{
                    let starAnCheckedCount=new Array(10)
                    this.filmData.starAnChecked=starAnCheckedCount;
                }
            }
        })
    }

    redirect() {
        this.route.navigate([''])
    }

}