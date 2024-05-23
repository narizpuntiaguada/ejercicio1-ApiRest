let urlBase = "https://pokeapi.co/api/v2/pokemon/";
const getPokemon = async (nameOrId) => {
    try {
        let url = urlBase+nameOrId;
        let response = await fetch(url);
        
        if(response.status == 200) {
            let data = await response.json();
        
        console.log(data);
        }else if(response.status == 404){
            let respuesta = await response.text();
            if(respuesta.includes("Cannot GET")){
                console.log("el recurso no ha sido encontrado, debe verificar la ruta.");
            }else if(respuesta == "Not Found"){
                console.log("No se ha encontrado el pokémon con el nombre o id indicado: " + nameOrId);
            }else {
                console.log("Ups! no se ha encontrado el recurso.")
            }
        }else {
            console.log("Ups! ha ocurrido un error.")
        }
    } catch (error) {
        console.log(error);
    }
}
getPokemon(10000);