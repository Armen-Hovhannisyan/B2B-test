<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/getFilms', 'FilmsController@getFilms');
Route::post('/addFilm', 'FilmsController@addFilm');
Route::get('/deleteFilm/{id}', 'FilmsController@deleteFilm');
Route::get('/getFilm/{id}', 'FilmsController@getFilm');