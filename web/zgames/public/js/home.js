const cargarMarcas = async ()=>{
    // 1. ir a buscar las marcas a la api
    let marcas = await getMarcas();
    

    //2. Cargar las marcas dentro del select
    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);

    });
}

// esto ejecuta un codigo asegurandose que el total de la pagina incluidos todos sus recursos este cargado antes de ejecutarS
document.addEventListener("DOMContentLoaded",()=>{
    cargarMarcas();
});


document.querySelector("#registrar-btn").addEventListener("click",async()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim(); // trim() elimina los espacios
    let marca  = document.querySelector("#marca-select").value.trim(); 
    let anio   = document.querySelector("#anio-txt").value.trim();
   
    let errores = [];

    if(nombre === ""){
        errores.push("debe ingresa un nombre");
    }else{
        // Validar si la consoolas existe en el sistema
        let consolas = await getConsolas();
        let consolaEncontrada = consolas.find(c=>c.nombre.toLowerCase() === nombre.toLowerCase());
        if(consolaEncontrada != undefined){
            errores.push("La consola ya existe");
        }
    }
    if(isNaN(anio)){
        errores.push("El año debe ser numerico");
    }else if(+anio < 1958 ){ // + convertir texto a numero
        errores.push("El año es incorrecto");
    }
    console.log(errores.length);

    if(errores.length == 0){
        console.log("holas que pasa");
        let consola = {};
        consola.nombre = nombre;
        consola.marca  = marca;
        consola.anio   = anio;
        // TODO: FALTA VALIDAR
        //SOLO esta linea hace:
        //1.va al controlador, le pasa los datos
        //2. El controlador crea el modelo
        //3.el modelo ingresa en la BD
        let res = await crearConsola(consola);

        await Swal.fire("Consola creada", "Exito al crear una consola" , "info");
        //la linea que viene despues del Swal.fire se va ajecutar solo cuando la persona aprete el ok
        //Aqui a redirigir a otra pagina
        window.location.href = "ver_consolas";
        //ABRIR NUEVA PESTAÑA
        //window.open("url","_blank")
    }else{
        //Mostrar errores
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
    

});