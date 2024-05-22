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
      <hr style={{display:"inline-block", height:"40px"}}/>
      <Hero/>
      <hr />
      <Experience display="top"/>
      <hr style={{display:"inline-block", height:"70px"}}/>
      <Carousel heading="International Tour Management." paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
      <Blog/>
      <Customers/>
      <Destination/>
    </div>
  )
}

export default Home
