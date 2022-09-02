import React from 'react'
import styled from 'styled-components'

 
function GhibliModal(props) {
  console.log (props)
  return (
    <>
      <div className="modal">
        <div>
          <Titulo>{props.title}</Titulo>  
        </div>
        <Geral>
            <Esquerda>
              <Imagem src={props.banner} alt=""/>
            </Esquerda>
            <Direita>
              <h1>{props.nomeOriginal}</h1>
              <p>{props.description}</p>
              <p>directer by: {props.diretor}</p>
              <p>{props.release_date}</p>
              <p>{props.minutos} minutos</p>
              <button id="button" onClick={()=>props.setShowModal(false)}>close</button>
            </Direita>
        </Geral>
          
      </div>

    </>
  )
}

const Geral = styled.div`
  display:flex;

`;
const Imagem = styled.img`
width:100%;
height:100%;

`;
const Esquerda = styled.div`
widith:100%;
height:80%;
`;
const Direita = styled.div`

`;
const Titulo = styled.h1`
color:white;
font-size:28px;
text-align:center;

`; 


export default GhibliModal