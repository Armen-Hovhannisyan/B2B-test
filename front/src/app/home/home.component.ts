import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public filmData: any='';
    public searchValue: string = '';
    public films: any = [];
    public films_name: any = [];
    public success_message:string = '';
    public error_message:string = '';
    public myControl = new FormControl();
    public filteredOptions: Observable<string[]>;
    constructor(private http: HttpClient, private apiService: ApiService) {}
    getFilms() {
        this.apiService.getFilms().subscribe(res => {
            this.films = res['films'];
            this.films_name=res['films_name'];
        });
    }
    ngOnInit() {
        this.getFilms()
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        this.searchValue = value
        return this.films_name.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    search() {
        this.filmData = null
        this.apiService.searchFilms(this.searchValue).subscribe(request => {
            if(request['Response']=='True'){
                this.filmData = {
                    actors: request['Actors'],
                    awards: request['Awards'],
                    box_office: request['BoxOffice'],
                    country: request['Country'],
                    dvd: request['DVD'],
                    director: request['Director'],
                    genre: request['Genre'],
                    language: request['Language'],
                    plot: request['Plot'],
                    poster: request['Poster'],
                    released: request['Released'],
                    runtime: request['Runtime'],
                    title: request['Title'],
                    type: request['Type'],
                    website: request['Website'],
                    writer: request['Writer'],
                    year: request['Year'],
                    imdbID: request['imdbID'],
                    imdbRating: request['imdbRating'],
                    imdbVotes: request['imdbVotes'],
                    ratings: request['Ratings'],
                }
                if(this.filmData['imdbRating'] !=='N/A'){
                    let reting=this.filmData['imdbRating']/10*10
                    let count=Math.round(reting);
                    var starChecked = new Array(count);
                    this.filmData.starChecked=starChecked
                    let starAnCheckedCount=new Array(10-count)
                    this.filmData.starAnChecked=starAnCheckedCount;
                }else{
                    let starAnCheckedCount=new Array(10)
                    this.filmData.starAnChecked=starAnCheckedCount;
                }

            }else{
                this.error_message = request['Error'];
                setTimeout(() => {
                    this.error_message = '';
                }, 2500);
            }
        })
    }

    addFilm() {
        if (!this.filmData) {
            this.error_message = 'film requered';
            setTimeout(() => {
                this.error_message = '';
            },2500)
            return false
        }
        this.apiService.addFilm(this.filmData).subscribe(res => {
            if (res['success']) {
                this.filmData = ''
                this.films = res['films']
                console.log(res)
                this.success_message = res['message'];
                setTimeout(() => {
                    this.success_message = '';
                },2500)
            } else {
                this.filmData = ''
                this.error_message = res['message'];
                setTimeout(() => {
                    this.error_message = '';
                },2500)
            }
        })
    }

    deleteFilm(id) {
        this.apiService.deleteFilm(id).subscribe(res => {
            if (res['success']) {
                this.films = res['films']
                this.success_message = res['message'];
                setTimeout(() => {
                    this.success_message = '';
                },2500)
            } else {
                this.error_message = res['message'];
                setTimeout(() => {
                    this.error_message = '';
                },2500)
            }
        })
    }
    remove(){
        this.filmData = ''
    }
}
