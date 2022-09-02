import React, { useState } from 'react'
import styled from 'styled-components'
import GhibliModal from './GhibliModal'
import "./ghiblimovie.css"

function GhibliMovie({title,image,description,banner,release_date,diretor,nomeOriginal,minutos}) {
    const [showModal,setShowModal]= useState(false);
  return (
    <>
    {showModal 
    ? //se for true faça
    <>
    <GhibliModal
    setShowModal={setShowModal}
    title={title}
    banner={banner}
    diretor={diretor}
    nomeOriginal={nomeOriginal}
    minutos={minutos}
    description={description}
    />
    <button onClick={()=>setShowModal(false)}>cancela</button>
    </>
    : //se não for true faça
    <>
        <Quadro onClick={()=>setShowModal(true)}>
        <TextoQuadro>{title}</TextoQuadro>
        <Imagem src={image}/>
        <TextoQuadro>{release_date}</TextoQuadro>
        </Quadro>
    </>

    }

    </>
  )
}

export default GhibliMovie

const Imagem = styled.img`
width:80%;
height:500px;
border-radius:9px;
`;
const Quadro = styled.div`
background-color: #5852F2;
width: 100%;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
border-radius: 20px;


&:hover{
  background-color: #AAA7F2;
  cursor:pointer;
}
`;
const TextoQuadro = styled.h1`
 color: #fff;
 font-size:24px;
 font-family: cursive;
`;