import "./Shop.css";
export function Shop() {
  let productos = [
    {
      id: 1,
      Producto: "Buso",
      descripcion: "Buso para Hombre negro talla unica",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/buzogunsroses.jpg?alt=media&token=b6417870-5b73-4e45-8e59-751e6ab9f6d5",
      Precio:
        "$55.000",
    },
    {
      id: 1,
      Producto: "Camiseta",
      descripcion: "Camiseta para Hombre negro talla unica",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/camiseta%20axlrose.jpg?alt=media&token=22f3a4f0-9f31-42c1-a717-5b33b139a26e",
      Precio:
        "$35.000",
    },
    {
      id: 1,
      Producto: "Gorra",
      descripcion: "Gorra para Hombre negro talla unica",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gorra.jpg?alt=media&token=759c0938-c031-4c51-9cd4-e37d38ea4e1b",
      Precio:
        "$30.000",
    },
    {
      id: 1,
      Producto: "Vaso",
      descripcion: "Vaso en diferentes diseños",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/vaso.jpg?alt=media&token=4fdc2577-69e5-4b2b-86ef-29f10ec4200b",
      Precio:
        "$20.000",
    },
  ];
  return (
    <>
      <div className="container-fluid bg-img">
        <div className="row">
          <div
            id="myCarousel"
            className="carousel slide my-5 pt-2"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/buzogunsroses1.jpg?alt=media&token=a4d99d40-6837-4973-8817-b8c663438240"
                  alt=""
                  className="img-fluid w-100 shop"
                />
                <div className="container">
                  <div className="carousel-caption text-center">
                    <h1>Buso Guns'n Roses</h1>
                    {/* <p>
                      Some representative placeholder content for the first
                      slide of the carousel.
                    </p> */}
                    <p>
                      <a className="btn btn-lg btn-primary" href="#foto">
                        Ver
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/camiseta%20axlrose1.jpg?alt=media&token=6cd5757d-d125-421a-8082-6ffe7d50d4fd"
                  alt=""
                  className="img-fluid w-100 shop"
                />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Camiseta Guns'n Roses</h1>
                    {/* <p>
                      Some representative placeholder content for the second
                      slide of the carousel.
                    </p> */}
                    <p>
                      <a className="btn btn-lg btn-primary" href="#foto">
                        Ver
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gorra1.jpg?alt=media&token=abd85da5-b908-4904-8944-c49990e6b4a0" alt="gorra"
                  className="img-fluid w-100 shop "
                />
                <div className="container">
                  <div className="carousel-caption text-center">
                    <h1 className="text-light">Gorra Guns'n Roses</h1>
                    {/* <p>
                      Some representative placeholder content for the third
                      slide of this carousel.
                    </p> */}
                    <p>
                      <a className="btn btn-lg btn-primary" href="#foto">
                        Ver
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/vaso1.jpg?alt=media&token=c3f52fe5-545c-468e-8b47-905b5f4350b5" alt="vaso"
                  className="img-fluid w-100 shop "
                />
                <div className="container">
                  <div className="carousel-caption text-center">
                    <h1>Vaso Guns'n Roses</h1>
                    {/* <p>
                      Some representative placeholder content for the third
                      slide of this carousel.
                    </p> */}
                    <p>
                      <a className="btn btn-lg btn-primary" href="#foto">
                        Ver
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container-fluid bg-img mt-5">
          <div className="row row-cols-1 row-cols-md-4 g-3 mt-5 mx-3">
            {productos.map(function (producto) {
              return (
                <div key={producto.id}>
                  <div className="col m-2" id="foto">
                    <div className="h-100 shadow bg-img text-light">
                      <h3 className="fw-bold text-center">{producto.Producto}</h3>
                      <img
                        src={producto.foto}
                        alt="foto"
                        className="img-fluid w-100 h-100 radius blancoNegro"
                      />
                      <h4 className="text-center mt-3">{producto.descripcion}</h4>
                      <h5 className="m-3 text-center">Precio: {producto.Precio}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
