<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Juego extends Model
{
    use HasFactory;
    //Juego pertenece a una sola consola
    public function consola(){
        return $this->belongsTo("App\Models\Consola","consola_id");
    }

}
