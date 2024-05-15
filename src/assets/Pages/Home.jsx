import React from 'react'
import Hero from '../Components/Hero/Hero'
import "./Home.css"
import Experience from '../Components/Experience/Experience'

const Home = () => {
  return (
    <div className='home'> 
      <Hero/>
      <hr />
      <Experience/>
      
    </div>
  )
}

export default Home
