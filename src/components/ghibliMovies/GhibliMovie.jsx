import React from 'react'

function GhibliMovie({title,image,description,release_date}) {
    console.log(title)
  return (
    <>
    <h2>{title}</h2>
    <img src={image}/>
    <p>{description}</p>
    <h3>{release_date}</h3>
    </>
  )
}

export default GhibliMovie