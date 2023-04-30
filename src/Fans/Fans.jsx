import './Fans.css'
import { Cuestionario } from '../Cuestionario/Cuestionario'
import { Registro } from '../Registro/Registro'
export function Fans() {
    let eventos = [
        {
            id: 1,
            evento: "Julio 2023",
            foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gunsbogota1.png?alt=media&token=12287602-aff5-4f65-9c4a-3f0cc6bdc071"
        },
        {
            id: 2,
            evento: "Agosto 2023",
            foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gunsbogota2.jpg?alt=media&token=a39b7537-1af1-4f58-b5d4-5cb5ad574be1"
        },
        {
            id: 3,
            evento: "Septiembre 2023",
            foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gunsbogota3.jpg?alt=media&token=2c6e8615-227c-4923-8a1d-d442256be177"
        },
        {
            id: 4,
            evento: "Octubre 2023",
            foto: "https://firebasestorage.googleapis.com/v0/b/musica-fb408.appspot.com/o/gunsbogota4.jpg?alt=media&token=eb358ee4-7326-4f93-99f0-5f9cf4631359"
        },
    ]
    return (

        <>
            <div className="container-fluid bgf-img text-light">
                <section className="text-center text-light mt-5 p-5">
                    <h1 className=" text-uppercase fw-bold fst-italic animate__animated animate__backInLeft">Bienvenido a mi página de fans</h1>
                    <p className="fst-italic">
                        Aquí encontrarás
                        información sobre sus próximos conciertos, fotos y noticias.
                    </p>
                </section>
                <section className="bg-img" >
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-md-4 g-3 mx-3">
                            {eventos.map(function (evento) {
                                return (
                                    <div key={evento.id}>
                                        <div className="col m-2">
                                            <div className="card h-100 shadow bg-img  text-light">
                                                <h3 className="fw-bold text-center">{evento.evento}</h3>
                                                <img
                                                    src={evento.foto}
                                                    alt="foto"
                                                    className="img-fluid w-100 h-100 radius blancoNegro"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </section >
                <section className='m-5'>
                    <h2 className='text-center mt-5 text-uppercase fst-italic fw-bold'>Noticias</h2>
                    <article className='mt-5'>
                        <h3>Ponen a la venta nuevas entradas por menos de 100 euros para ver a Guns N' Roses en Vigo</h3>
                        <p>The Pretenders serán los teloneros de la banda de Axl Rose en el concierto del próximo 12 de junio en Balaídos</p>
                        <a href="https://www.elespanol.com/treintayseis/articulos/vivir/ponen-a-la-venta-nuevas-entradas-por-menos-de-100-euros-para-ver-a-guns-n-roses-en-vigo" target='blank' className='text-light'>Leer más</a>
                    </article>
                    <article className='mt-5'>
                        <h3>La curiosa opinión de Paul McCartney del cover de Guns N’ Roses de “Live and Let Die”</h3>
                        <p>Esto es lo que Paul McCartney piensa del famoso cover de "Live and Let Die" de Guns N' Roses.</p>
                        <a href="https://www.lifeboxset.com/2023/04/la-curiosa-opinion-paul-mccartney-cover-guns-n-roses-live-and-let-die/" target='blank' className='text-light'>Leer más</a>
                    </article>
                </section>
                <Registro/>
                <Cuestionario/>
            </div>
        </>
    )
}