import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from "../../node_modules/@angular/common/http";

// import decode from 'jwt-decode';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public searchFilmUrl: any = "";
    public apiUrl: any = "http://api.b2b.loc/";
    public api_token:string = localStorage.getItem('token');
    constructor(private http: HttpClient, private configService: ConfigService) {
        this.getConfig()
    }

    getConfig() {
        this.configService.getConfig().subscribe(config => {
            if (config) {
                let apiKey = config['apiKey'];
                let searchFilmUrl = config['searchFilmUrl'];
                this.searchFilmUrl = searchFilmUrl + '?apikey=' + apiKey + '&t='
            }
        });
    }
    getFilms() {return this.http.get(this.apiUrl + 'getFilms');}
    searchFilms(searchValue) {return this.http.get(this.searchFilmUrl + searchValue);}
    addFilm(films) {return this.http.post(this.apiUrl + 'addFilm', films);}

    deleteFilm(id) {return this.http.get(this.apiUrl + 'deleteFilm/' + id)}
    getFilm(id){return this.http.get(this.apiUrl + 'getFilm/' + id)}

}
