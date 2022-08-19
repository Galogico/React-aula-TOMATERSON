import React from 'react'
import Parametro from './exemploParametro/parametro'
import GhibliList from './ghibliMovies/ghibliList'

export default function Home() {
  return (
    <>
    <div className = "home-title">
    <h1 className = "home-text">STUDIO GHIBLI</h1>
    </div>

    {/* <Parametro text='Bem vindo ao meu site'
    numero = '12'/> */}

    <GhibliList/>
    </>
  )
}
