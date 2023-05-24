import { useState, useEffect } from "react";
import { consultarCanciones } from "../services/serviciosCanciones";

export function Music() {
  const [canciones, setCanciones] = useState(null);
  const [estaCargando, setEstacargando] = useState(true);

  useEffect(function () {
    consultarCanciones().then(function (respuesta) {
      console.log(respuesta);
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
        <section className="bg-img">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-4 g-3 mx-3">
              {canciones.map(function (cancion) {
                return (
                  <div className="container-fluid">
                    <div className="col-m-2">
                      <div className="card h-100 shadow bg-img  text-light">
                        <h3 className="fw-bold text-center p-3">
                          {cancion.album.name}
                        </h3>
                        <img
                          src={cancion.album.images[0].url}
                          alt=""
                          className="img_fluid w-100 h-100"
                        />
                        <audio
                          controls
                          src={cancion.preview_url}
                          className="m-5"
                        ></audio>
                        <p className="text-center p-3 fs-3 fw-bold">{cancion.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
