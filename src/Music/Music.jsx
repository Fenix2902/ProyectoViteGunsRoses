import { useState, useEffect } from "react";
import { consultarCanciones } from "../services/serviciosCanciones";

export function Music() {
  const [canciones, setCanciones] = useState(null);
  const [estaCargando, setEstacargando] = useState(true);

  useEffect(function () {
    consultarCanciones().then(function (respuesta) {
        console.log(respuesta)
      setCanciones(respuesta.tracks);
      setEstacargando(false);
      
    });
  }, []);

  if (estaCargando) {
    <h1>estoy cargando</h1>;
  } else {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        {canciones.map(function (cancion) {
          return (
            <div className="container">
                <div className="col-m-2">
                    <div className="h4h-100 shadow bg-img text-light">
                    <h3 className="fw-bold text-center">{cancion.album.name}</h3>
                    <img src={cancion.images} alt="" className="img_fluid" />
                    <audio controls src={cancion.preview_url}></audio>
                    <p>{cancion.name}</p>
                    </div>
                </div>
            </div>
          )
        })}
      </>
    );
  }
}
