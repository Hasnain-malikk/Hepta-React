import React from 'react'
import Hero from '../Components/Hero/Hero'
import "./Home.css"
import Experience from '../Components/Experience/Experience'
import Carousel from '../Components/Carousel/Carousel'
import Blog from '../Components/Blog/Blog'
import Customers from '../Components/Customers/Customers'
import Destination from '../Components/Destination/Destination'

const Home = () => {
  return (
    <div className='home'> 
      <Hero/>
      <hr />
      <Experience/>
      <Carousel/>
      <Blog/>
      <Customers/>
      <Destination/>
    </div>
  )
}

export default Home
