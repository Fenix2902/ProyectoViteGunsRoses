export async function consultarCanciones(){
    
    //RECETA PARA CONSUMIR APIS CON JS
    //1. PA' DONDE VAS OME--> URL+EP DEL SERVICIO-->HEADERS
    const IDARTISTA = "6XyY86QOPPrYVGvF9ch6wz"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQAhmL1t9DztHPDKH5cgqLGxs4C4QK1KugZ1lYxspDiJr1reln7BkU2XXBNX8dFUWJPp3iMByKGfux6gSmGu5HMUUb4uHCvkbM_Y4jceXXeA-kIKh8E"

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