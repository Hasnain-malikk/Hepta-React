import React from 'react'
import Main12 from '../Components/Main12/Main12'
import Hero12 from '../Components/Hero12/Hero12';
import Carousel from '../Components/Carousel/Carousel'
import People from '../Components/People/People';

const AboutUS = () => {
  return (
    <div>
      <Main12/>    
      <hr style={{display:"inline-block", height:"40px"}}/>
      <Hero12 heading="Welcome Travel & Tours" />
      <hr style={{display:"inline-block", height:"40px"}}/>
      <Carousel heading="Hotel Gallery" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed." />
      <People/>
    </div>
  )
};

export default AboutUS
