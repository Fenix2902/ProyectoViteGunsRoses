import './Members.css'
export function Members() {
  let Members = [
    {
      id: 1,
      nombre: "Axl Rose",
      role: "Vocalista y pianista",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/axl-rose.jpg?alt=media&token=25fd1c63-1b33-4215-aacc-a0613e424a3c",
      nacimiento:
        "6 de febrero de 1962 (edad 61 años), Lafayette, Indiana, Estados Unidos",
    },
    {
      id: 2,
      nombre: "Slash",
      role: "Guitarrista líder",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/slash.jpg?alt=media&token=744f4fbb-d023-4d3d-aab6-9e4e1641d970",
      nacimiento: "23 de julio de 1965 (edad 57 años), Stoke-on-Trent",
    },
    {
      id: 3,
      nombre: "Steven Adler",
      role: "Baterista",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/steve%20Adler.jpg?alt=media&token=9176c269-c8ea-4195-bf34-e88e2190ecbf",
      nacimiento: "22 de enero de 1965    (edad 58 años), Cleveland, Ohio",
    },
    {
      id:4,
      nombre: "Richard Fortus",
      role: "Guitarrista rítmico",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/Richard%20Fortus.jpg?alt=media&token=159d7feb-263f-47b7-9f95-bb34aceda08f",
      nacimiento:
        "17 de noviembre de 1966 (edad 56 años),San Luis, Misuri, Estados Unidos",
    },
    {
      id:5,
      nombre: "Melissa Reese",
      role: "Tecladista y Sintetizadora",
      foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/melissaReese.jpg?alt=media&token=38cdce01-030e-4f68-adf7-9e42b36e6c9e",
      nacimiento:
        "1 de marzo de 1990 (edad 33 años), Seattle, Washington, Estados Unidos",
    }
  ];

  return (
    <>   
      <div className="container-fluid bg-img mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-3 mt-5">
        {Members.map(function (Member) {
          return (
            <div key={Member.id}>
              <div className="col m-2">
                <div className="card h-100 shadow bg-img">
                  <h3 className="fw-bold text-center">{Member.nombre}</h3>
                  <img
                    src={Member.foto}
                    alt="foto"
                    className="img-fluid w-100 h-100"
                  />
                  <h4 className="text-center mt-3">Rol: {Member.role}</h4>
                  <h5 className="m-3">Nacimiento: {Member.nacimiento}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      
    </>
  );
}
