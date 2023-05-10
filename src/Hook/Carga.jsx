import { useState,useEffect } from "react"
export function Carga(){
    
    const [estaCargando,setestaCargando]=useState(true);
    const [tiempo,setTiempo]=useState(0);

    useEffect(function(){
        if(tiempo>0){
            setestaCargando(false)
        }else{
            setestaCargando(true)
        }
    },[tiempo])

    setTimeout(function(){
        setTiempo(1)
    },5000)
    
    if(estaCargando){
        return(
            <>
            <div className="container my-5 p-5">
                <div className="row">
                    <div className="col12">
                        <h3>Estamos Cargando...</h3>
                        <img src="../../src/assets/img/giphy.gif" alt="gif de carga" className="img-fluid mx-auto d-block"/>
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return(
            <>
            <h4>ya cargamos todo....</h4>
            </>
        )
    }
}