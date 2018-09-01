<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films', function (Blueprint $table) {
            $table->increments('id');
            $table->string('actors')->nullable();
            $table->string('awards')->nullable();
            $table->string('box_office')->nullable();
            $table->string('country')->nullable();
            $table->string('dvd')->nullable();
            $table->string('director')->nullable();
            $table->string('genre')->nullable();
            $table->string('language')->nullable();
            $table->longText('plot')->nullable();
            $table->string('poster')->nullable();
            $table->string('released')->nullable();
            $table->string('runtime')->nullable();
            $table->string('title')->nullable();
            $table->string('type')->nullable();
            $table->string('website')->nullable();
            $table->string('writer')->nullable();
            $table->string('year')->nullable();
            $table->string('imdbID')->nullable();
            $table->string('imdbRating')->nullable();
            $table->string('imdbVotes')->nullable();
            $table->longText('ratings')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films');
    }
}
