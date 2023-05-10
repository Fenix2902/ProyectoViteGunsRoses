import { useState,useEffect } from "react"

export function Hook(){

    //antes del retorno configuramos nuestras variables de estado
    const [contador,setContador]=useState(0)
    //programando detector de ejecuciones
    useEffect(function(){
        setContador(contador+1)
    },[])
    //funcion para decir que hacer cuando de clic al boton
    function incrementarCuenta(){
        setContador(contador+1)
    }

    return(
        <>
        
        <div className="container my-5 p-5">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={incrementarCuenta}>click</button>
                    <h2>La cuenta va en:{contador} </h2>
                </div>
            </div>
        </div>

        </>
    )
}