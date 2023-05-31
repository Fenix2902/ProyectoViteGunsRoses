export async function consultarCanciones(token) {
  //RECETA PARA CONSUMIR APIS CON JS
  //1. PA' DONDE VAS OME--> URL+EP DEL SERVICIO-->HEADERS
  const IDARTISTA = "6XyY86QOPPrYVGvF9ch6wz";
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`;
  const TOKEN = `Bearer ${token}`;

  //2. QUE VAS HACER ALLA OME...
  //CONFIGURO LA PETICIÓN
  let peticion = {
    method: "GET",
    headers: {
      Authorization: TOKEN,
    },
  };

  //3. PIDA EL TAXI
  //Utilice la promesa FETCH para ir al back y consumir el API

  let respuesta = await fetch(URI, peticion);
  let canciones = await respuesta.json();
  return canciones;
}

export async function updateToken() {
  const url = "https://accounts.spotify.com/api/token";

  let solicitudToken = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&client_id=5938fd7d0e5f4d889ba4db749d5780ad&client_secret=63d8eca3cf88416ca881b4f92588b05b",
  };

  let respuesta = await fetch(url, solicitudToken);
  let token = await respuesta.json();
  token=token.token_type+" "+token.access_token
  return token
}
