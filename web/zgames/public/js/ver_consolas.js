const carcarMarcas = async ()=>{
    //1. Ir a buscar el filtro-cbx
    let  filtroCbx = document.querySelector("#filtro-cbx");
    //2. Ir a buscar las marcas
    let marcas = await getMarcas();
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m ;
        option.value = m;
        filtroCbx.appendChild(option);      

    });
};


const iniciarEliminacion = async function(){
    //1. Obtener el id a eliminar
    let id = this.idConsola;
    let resp = await Swal.fire({title:"Esta seguro?" , text: "Esta operacion es irreversible"  
        , icon:"error", showCancelButton:true});
        
        if (resp.isConfirmed){
            //1. Eliminar
            if(await eliminarConsola(id)){
                //2. Si la eliminación fue exitosa , recargar la tabla
                let consolas = await getConsolas();
                cargarTabla(consolas);
                Swal.fire("Consola Eliminada" , "Consola eliminada exitosamente" , "info");
            }else{
                Swal.fire("ERROR", "Cancelado por el usuario" , "info");
            }

        }else{
            Swal.fire("Cancelado", "Cancelado por el usuario" , "info");
        }


}





const cargarTabla = (consolas)=>{
    //1. Obtener una referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-consola");
    tbody.innerHTML = "";
    //2. recorrer todas las consolas
    for(let i = 0 ; i <consolas.length ; ++i){

        //3. POR CADA CONSOLA GENERAR UNA FILA
        let tr = document.createElement("tr");

        //4.generar por cada atributo de la consola, un td
        let tdNombre = document.createElement("td");
        tdNombre.innerText = consolas[i].nombre;
        let tdMarca  = document.createElement("td");
        tdMarca.innerText = consolas[i].marca;
        let tdAnio   = document.createElement("td");
        tdAnio.innerText = consolas[i].anio;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");

        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn" , "btn-danger");
        botonEliminar.idConsola = consolas[i].id;
        botonEliminar.addEventListener("click",iniciarEliminacion)
        tdAcciones.appendChild(botonEliminar);
        //5.Agregar los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdMarca);
        tr.appendChild(tdAnio);
        tr.appendChild(tdAcciones);

        //6. Agregar el tr a la tabla
        tbody.appendChild(tr);

    }
    

};

//El listener Change sirve para cuando quieres ejecutar algo cuando el valor cambia
document.querySelector("#filtro-cbx").addEventListener("change",async()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let consolas = await getConsolas(filtro);
    cargarTabla(consolas);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    //aquie voy a cargar las tablas de consolas
    await carcarMarcas();
    let consolas = await getConsolas();
    cargarTabla(consolas);
});