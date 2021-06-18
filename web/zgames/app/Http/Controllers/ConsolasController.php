<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Consola;
// Aqui va a ir toda la logica vinculado a las consolas.
class ConsolasController extends Controller
{
    public function getMarcas(){
        $marcas = array(); // $marcas = [];
        $marcas[] = "Sony";
        $marcas[] = "Microsoft";
        $marcas[] = "Nintendo";
        $marcas[] = "Sega";

        return $marcas;
    }
    //Esta consola va a ir a buscar todas las consolas que existen en la BD
    public function getConsolas(){
        // Equivalente a un select * from consolas
        $consolas = Consola::all();
        return $consolas;

    }

    public function crearConsola(){
        // Equivalente a un insert

        $consola = new Consola();
        $consola->nombre = "Poly station";
        $consola->marca  = "Poly"; 
        $consola->anio   = 2003;

        $consola->save();
    }
}




















// EJEMPLO View productos.blade.php
// renderizar los productos

// ProductosController
    // -ir a buscar los productos a la bd
    // - los filtra por los disponibles
    // - formatea el precio
    // retorna lista de los productos
