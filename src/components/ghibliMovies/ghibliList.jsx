import React,{useState, useEffect} from 'react'
import GhibliMovie from './GhibliMovie'
import styled from 'styled-components'

function GhibliList() { 
    const [filmes,setFilmes] = useState([])
    useEffect(()=>{
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data =>{
            data.forEach(movie =>{
            //   console.log(movie.title)
            //   console.log(movie.description)  
            //   console.log(movie.release_date)
            })
            setFilmes(data)
        })
    },[])
    // console.log(filmes)

  return (
    <>
        <Container>
        {filmes.map((movie,index)=>
            <GhibliMovie
            key={index}
            title={movie.title}
            image={movie.image}
            description={movie.description}
            release_date={movie.release_date}
            />        
        )}
        </Container>
    </>
  )
}

export default GhibliList

const Container = styled.div`
display:grid;
grid-template-columns: 30% 30% 30%;
justify-items:stretch;
grid-column-gap:50px;
grid-row-gap:50px;
width: 80%;
`;
