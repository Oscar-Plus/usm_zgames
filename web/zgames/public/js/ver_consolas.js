const cargarTabla = (consolas)=>{
    //1. Obtener una referencia al cuerpo de la tabla
    tbody = document.querySelector("#tbody-consola");
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


document.addEventListener("DOMContentLoaded", async ()=>{

    let consolas = await getConsolas();
    cargarTabla(consolas);
});