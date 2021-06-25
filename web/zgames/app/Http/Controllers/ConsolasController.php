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
    //Esta función va a ir a buscar todas las consolas que existen en la BD
    
    public function getConsolas(){
        // Equivalente a un select * from consolas
        $consolas = Consola::all();
        return $consolas;

    }

    //Una Request es un objeto php que permite acceder a las consolas que se mandaron desde la interfaz(desde el formulario)
    //Cuando el metodo recibe cosas el REQUEST va en los parentesis

    public function crearConsola(Request $request){
        // Equivalente a un insert
        $input = $request->all(); //Genera un arreglo con todo lo que mandaron
        $consola = new Consola();
        $consola->nombre = $input["nombre"];
        $consola->marca  = $input["marca"]; 
        $consola->anio   = $input["anio"];

        $consola->save(); // guardado en la BD
    }
}




















// EJEMPLO View productos.blade.php
// renderizar los productos

// ProductosController
    // -ir a buscar los productos a la bd
    // - los filtra por los disponibles
    // - formatea el precio
    // retorna lista de los productos
