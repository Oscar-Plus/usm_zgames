//ESTE ARCHIVO VA A TENER LAS OPERACIONES TIPICAS PARA COMUNICARSE CON EL CONTROLADOR


//getConsolas
const getConsolas = async(filtro="todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/consolas/get");
    }else{
        resp = await axios.get(`api/consolas/filtrar?filtro=${filtro}`);
    }
    
    return resp.data;
};

//crearConsola

const crearConsola = async(consola)=>{ //arrow function
    //Estructura de petición post al servidor con axios.
                                // RUTA , OBJETO , TIPO DE OBJETO.
    let resp = await axios.post("api/consolas/post",consola, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return resp.data //propiedad de axios que manda los datos
};

const eliminarConsola = async(id)=>{
    try{
        let resp = await axios.post("api/consolas/delete",{id},{
            headers:{
                "Content-Type": "application/json"
            }

        });

        return resp.data == "ok";
    }catch(e){
        return false ;
    }

};
`
`
