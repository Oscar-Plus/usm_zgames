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

    public function filtrarConsolas(Request $request){
        $input  = $request->all();
        $filtro = $input["filtro"];
        //SELECT * FROM consolas WHERE marca = $filtro
        $consolas = Consola::where("marca" , $filtro)->get();

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

    public function eliminarConsola(Request $request){
        $input = $request->all();
        $id = $input["id"];
        //1. Ir a buscar el registro a la BD.
        $consola = Consola::findOrFail($id);
        //2. Para eliminar llamo al metodo delete
        $consola->delete(); // DELETE FROM consolas WHERE id=1
        
        return "ok";


    }

}




















// EJEMPLO View productos.blade.php
// renderizar los productos

// ProductosController
    // -ir a buscar los productos a la bd
    // - los filtra por los disponibles
    // - formatea el precio
    // retorna lista de los productos
