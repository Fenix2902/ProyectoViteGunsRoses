import './Cuestionario.css'
export function Cuestionario(){
    return(
        <>
        <section className='mt-2 p-5 bgc-img'>
                    <h2 className='fst-italic'>Miremos que tan fan eres....</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                El Guitarrista Lider es:
                            </label>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">Axl Rose</option>
                                <option value="2">Steven Adler</option>
                                <option value="3">Slash</option>
                                <option value="4">Richard Fortus</option>
                                <option value="5">Melissa Reese</option>
                                <option value="6">Duff McKagan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                El Vocalista y pianista es:
                            </label>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">Axl Rose</option>
                                <option value="2">Steven Adler</option>
                                <option value="3">Slash</option>
                                <option value="4">Richard Fortus</option>
                                <option value="5">Melissa Reese</option>
                                <option value="6">Duff McKagan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                El Bajista es:
                            </label>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">Axl Rose</option>
                                <option value="2">Steven Adler</option>
                                <option value="3">Slash</option>
                                <option value="4">Richard Fortus</option>
                                <option value="5">Melissa Reese</option>
                                <option value="6">Duff McKagan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                El Baterista es:
                            </label>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">Axl Rose</option>
                                <option value="2">Steven Adler</option>
                                <option value="3">Slash</option>
                                <option value="4">Richard Fortus</option>
                                <option value="5">Melissa Reese</option>
                                <option value="6">Duff McKagan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                El Guitarrista rítmico es:
                            </label>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">Axl Rose</option>
                                <option value="2">Steven Adler</option>
                                <option value="3">Slash</option>
                                <option value="4">Richard Fortus</option>
                                <option value="5">Melissa Reese</option>
                                <option value="6">Duff McKagan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                El Tecladista y Sintetizador es:
                            </label>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">Axl Rose</option>
                                <option value="2">Steven Adler</option>
                                <option value="3">Slash</option>
                                <option value="4">Richard Fortus</option>
                                <option value="5">Melissa Reese</option>
                                <option value="6">Duff McKagan</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </section>
        </>
    )
}