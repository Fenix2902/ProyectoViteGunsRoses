import axios from "axios";
export async function consultarConAxios() {

  //RECETA PARA CONSUMIR APIS CON JS
  //1. PA' DONDE VAS OME--> URL+EP DEL SERVICIO-->HEADERS
  const IDARTISTA = "6XyY86QOPPrYVGvF9ch6wz";
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`;
  const TOKEN =
    "Bearer BQBiDRPEZQeoNlYIYTdGTmfKXB7e-KtExe2K2fBQimTWumZGsLddMo2uJj0sDEEazKBaqoOsjisRZpcvDXzFoUWLaXErxDKMUCZYoRReknAuN_N4JJA";

  //2. QUE VAS HACER ALLA OME...
  //CONFIGURO LA PETICIÓN
  let peticion = {
    headers: {
      Authorization: TOKEN,
    },
  };

  //Ordenar mi respuesta
  try {
    //utilizamos la promesa encargada de consumir el API
    let respuesta = await axios.get(URI, peticion);
    let canciones = respuesta.data
    return canciones
  } catch (error) {
    throw new Error("upss fallamos"+error)
  }
}
