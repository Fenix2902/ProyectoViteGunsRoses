import { useState, useEffect } from "react";
import "./Home.css";
import { Carga } from "../Hook/Carga";
export function Home() {

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
    return (
      <>
      <Carga/>
      </>
    )
  }
  return (
    <>
    <section className="banner p-5"/>    
    </>
  );
}
