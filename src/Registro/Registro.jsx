export function Registro(){
    return(
        <>
        <section className='mt-5 p-5'>
                    <h2 className='fst-italic'>Registrate</h2>
                    <form>

                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bi bi-person-circle" id="basic-addon1"></span>
                                    <input type="text" className="form-control" placeholder="Nombre Cliente" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bi bi-envelope-at-fill" id="basic-addon1"></span>
                                    <input type="text" className="form-control" placeholder="Correo cliente" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bi bi-calendar-week-fill" id="basic-addon1"> Nacimiento </span>
                                    <input type="date" className="form-control" placeholder="fecha nacimiento" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bi bi-lock-fill" id="basic-addon1"></span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='Password'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Suscribir</button>
                    </form>
                </section>
        </>
    )
}