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

cargarMarcas();

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
    //2. El controlador
    let res = await crearConsola(consola);

    Swal.fire("Consola creada", "Exito" , "info");

});