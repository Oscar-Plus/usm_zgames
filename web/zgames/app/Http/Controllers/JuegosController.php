<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Juego;

class JuegosController extends Controller
{
    //
    /**/
    public function getJuegosByConsola(Request $request){
       $input = $request->all();
       $idConsola = $input["idConsola"];
       $consola = Consola::find($idConsola);
       return $consola->juegos()->get();

    }

    public function getJuegos(){
        return Juego::all();/*Devuelve todos los juegos */

    }

    public function save(Request $request){
        $input = $request->all();
        $nombre = $input["nombre"];
        $fecha  = $input["fechaLanzamiento"];
        $apto   = $input["aptoNinios"];
        $precio = $input["precio"];
        $descripcion = $input["descripcion"];
        $consolaId = $input["consolaId"];
        
        $juego = new Juego();
        //var_juego / var_juegos
        $juego->nombre = $nombre;
        $juego->fecha_lanzamiento = $fecha;
        $juego->descripcion = $descripcion;
        $juego->apto_ninios = $apto;
        $juego->precio = $precio;
        $consola_id = $consolaId;
        //Guardar en la bd
        $juego->save();
        return juego;
    }

    public function remove(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $juego = Juego::findOrFail($id);
        $juego->delete();
        return "ok";

    }

}
