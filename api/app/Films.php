<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Films extends Model
{
    protected  $table ='films';
    protected $casts=['ratings'=>'array'];
}
