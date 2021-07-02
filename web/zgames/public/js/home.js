const cargarMarcas = async ()=>{
    // 1. ir a buscar las marcas a la api
    let resultado = await axios.get("api/marcas/get");
    let marcas = resultado.data;
    console.log(resultado.data);

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
    let nombre = document.querySelector("#nombre-txt").value;
    let marca  = document.querySelector("#marca-select").value; 
    let anio   = document.querySelector("#anio-txt").value;
   
    let consola = {};
    consola.nombre = nombre;
    consola.marca  = marca;
    consola.anio   = anio;

    //SOLO esta linea hace:
    //1.va al controlador, le pasa los datos
    //2. El controlador crea el modelo
    //3.el modelo ingresa en la BD
    let res = await crearConsola(consola);

    await Swal.fire("Consola creada", "Exito al crear una consola" , "info");
    //la linea que viene despues del Swal.fire se va ajecutar solo cuando la persona aprete el ok
    //Aqui a redirigir a otra pagina
    window.location.href = "ver_consolas";
});