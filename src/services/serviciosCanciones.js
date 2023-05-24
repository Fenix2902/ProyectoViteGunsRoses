export async function consultarCanciones(){
    
    //RECETA PARA CONSUMIR APIS CON JS
    //1. PA' DONDE VAS OME--> URL+EP DEL SERVICIO-->HEADERS
    const IDARTISTA = "6XyY86QOPPrYVGvF9ch6wz"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQBiDRPEZQeoNlYIYTdGTmfKXB7e-KtExe2K2fBQimTWumZGsLddMo2uJj0sDEEazKBaqoOsjisRZpcvDXzFoUWLaXErxDKMUCZYoRReknAuN_N4JJA"

    //2. QUE VAS HACER ALLA OME...
    //CONFIGURO LA PETICIÓN
    let peticion = {
        method: "GET",
        headers: {
            "Authorization":TOKEN
        }
    }

    //3. PIDA EL TAXI
    //Utilice la promesa FETCH para ir al back y consumir el API

    let respuesta = await fetch(URI,peticion)
    let canciones = await respuesta.json()
    return canciones

    
}