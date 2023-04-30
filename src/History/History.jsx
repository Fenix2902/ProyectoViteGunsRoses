import WOW from "wow.js";
import { useEffect } from "react";
import "./History.css";
export function History() {
  useEffect(function () {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <div className="container-fluid bgn-img text-light mt-1 p-4">
        <div className="row g-3 mt-5">
          <div className="col-12 col-md-12">
            <h2>Guns´N Roses</h2>
            <p>
              Guns N Roses es una banda fraguada en las calles de Los Angeles,
              entre bares y trabajos de medio tiempo. Sus cinco integrantes se
              reunieron por una pasión: la música. Un aviso en un periódico fue
              su lazo de comunicación. En realidad, el grupo es el resultado de
              la fusión de dos bandas: L.A Guns y Hollywood Rose.
            </p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gnroses1.jpg?alt=media&token=8c12b821-f617-489b-a04c-a1307f669657"
              alt="foto"
              className="img-fluid w-100 wow animate__animated animate__backInLeft" data-wow-duration = "3s" data-wow-delay = "2s"
            />
          </div>
          {/* <div className="col-12 col-md-3">
            <h2>Guns´N Roses</h2>
            <p>
              Guns N Roses es una banda fraguada en las calles de Los Angeles,
              entre bares y trabajos de medio tiempo. Sus cinco integrantes se
              reunieron por una pasión: la música. Un aviso en un periódico fue
              su lazo de comunicación. En realidad, el grupo es el resultado de
              la fusión de dos bandas: L.A Guns y Hollywood Rose.
            </p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gnroses1.jpg?alt=media&token=8c12b821-f617-489b-a04c-a1307f669657"
              alt="foto"
              className="img-fluid w-100"
            />
          </div>
          <div className="col-12 col-md-3">
            <h2>Guns´N Roses</h2>
            <p>
              Guns N Roses es una banda fraguada en las calles de Los Angeles,
              entre bares y trabajos de medio tiempo. Sus cinco integrantes se
              reunieron por una pasión: la música. Un aviso en un periódico fue
              su lazo de comunicación. En realidad, el grupo es el resultado de
              la fusión de dos bandas: L.A Guns y Hollywood Rose.
            </p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gnroses1.jpg?alt=media&token=8c12b821-f617-489b-a04c-a1307f669657"
              alt="foto"
              className="img-fluid w-100"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
