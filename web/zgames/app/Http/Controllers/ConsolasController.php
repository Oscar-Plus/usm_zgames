<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}

// View productos.blade.php
// renderizar los productos

// ProductosController
    // -ir a buscar los productos a la bd
    // - los filtra por los disponibles
    // - formatea el precio
    // retorna lista de los productos
