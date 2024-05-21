import React from 'react'
import Hero from '../Components/Hero/Hero'
import Experience from '../Components/Experience/Experience'
import Carousel from '../Components/Carousel/Carousel'
import Blog from '../Components/Blog/Blog'
import Customers from '../Components/Customers/Customers'
import Destination from '../Components/Destination/Destination'
import Main from '../Components/Main/Main'

const Home = () => {
  return (
    <div className='home'> 
      <Main/>
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
