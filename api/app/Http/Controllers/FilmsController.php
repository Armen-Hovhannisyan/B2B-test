<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Films;

class FilmsController extends Controller
{
    public function getFilms()
    {
        $films = Films::get();
        if ($films) {
            return response()->json(['success' => true, 'films' => $films]);
        }
        return response()->json(['success' => false]);
    }

    public function addFilm(Request $request)
    {
        $film=Films::where('title','=',$request->title)->orWhere('imdbVotes','=', $request->imdbVotes)->first();
        if ($film) {
            return response()->json(['success' => false,'message' => 'film already exist']);
        }
        $film = new Films;
        $film->actors = $request->actors;
        $film->awards = $request->awards;
        $film->box_office = $request->box_office;
        $film->country = $request->country;
        $film->dvd = $request->dvd;
        $film->director = $request->director;
        $film->genre = $request->genre;
        $film->language = $request->language;
        $film->plot = $request->plot;
        $film->poster = $request->poster;
        $film->released = $request->released;
        $film->runtime = $request->runtime;
        $film->title = $request->title;
        $film->type = $request->type;
        $film->website = $request->website;
        $film->writer = $request->writer;
        $film->year = $request->year;
        $film->imdbID = $request->imdbID;
        $film->imdbRating = $request->imdbRating;
        $film->imdbVotes = $request->imdbVotes;
        $film->ratings =  $request->ratings;

        if ($film->save()) {
            $films = Films::get();
            return response()->json(['success' => true, 'films' => $films, 'messages' => 'film added successfully']);
        }
        return response()->json(['success' => false, 'message' => 'film wasn`t added']);
    }

    public function deleteFilm($id)
    {
        $film= Films::where('id', $id)->delete();
        if ($film) {
            $films = Films::get();
            return response()->json(['success' => true, 'message' => 'film deleted successfully', 'films' => $films]);
        }
        return response()->json(['success' => false, 'message' => 'film wasn`t deleted']);
    }
    public function getFilm($id){
        $film= Films::where('id', $id)->first();
        if ($film) {

            return response()->json(['success' => true,  'film' => $film]);
        }
        return response()->json(['success' => false, 'message' => 'film  deleted']);
    }
}
