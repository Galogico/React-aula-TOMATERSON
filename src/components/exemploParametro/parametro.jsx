import React from 'react'

function parametro({text, numero}) {

    const numeroConvertido = parseInt(numero)
    const numerofinal = numeroConvertido + 7;

  return (
    <>
    <h1>{text}</h1>
    <p>seu numero final foi {numerofinal}</p>

    
    </>
  )
}

export default parametro