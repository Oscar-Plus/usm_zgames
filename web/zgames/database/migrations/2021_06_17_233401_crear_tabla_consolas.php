<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaConsolas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consolas', function (Blueprint $table) {
            $table->id();//secuencias autoincrementales
            //Autoincrementeales : claves unicas generadas automaticamente por el motor
            $table->string("nombre",150);
            $table->string("marca",50);
            $table->integer("anio");
            $table->timestamps();// dos campos que son el creat_at y el update_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consolas');
    }
}
