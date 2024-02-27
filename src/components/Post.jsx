import React from 'react'

const Post = ({name, description, likes}) => {


  return (
    <section style = {{border: "3px solid white"}}> 
    <h3>{name}</h3>
    <h4>I want to learn the power of students</h4>
    <p>Rating:0</p>
    </section>
   
  )
}

export default Post