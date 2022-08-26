import React, { useState } from 'react'
import styled from 'styled-components'

function GhibliMovie({title,image,description,release_date}) {
    const [showModal,setShowModal]= useState(false);
  return (
    <>
    {showModal 
    ? //se for true faça
    <>
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