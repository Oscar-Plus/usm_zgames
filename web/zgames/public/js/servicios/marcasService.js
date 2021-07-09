const getMarcas = async()=>{
    // 1. ir a buscar las marcas a la api
    let resultado = await axios.get("api/marcas/get");
    return resultado.data;
}