import React from 'react'
import Hero from '../Components/Hero/Hero'
import "./Home.css"
import Experience from '../Components/Experience/Experience'
import Carousel from '../Components/Carousel/Carousel'

const Home = () => {
  return (
    <div className='home'> 
      <Hero/>
      <hr />
      <Experience/>
      <Carousel/>
    </div>
  )
}

export default Home
