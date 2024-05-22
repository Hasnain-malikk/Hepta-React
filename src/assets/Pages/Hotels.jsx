import React from 'react'
import Main11 from '../Components/Main11/Main11'
import Experience from '../Components/Experience/Experience'
import Hero12 from '../Components/Hero12/Hero12'
import Hero13 from '../Components/Hero13/Hero13'
import Carousel from '../Components/Carousel/Carousel'
import Hotelfeature from '../Components/Hotelfeature/Hotelfeature'


const Hotels = () => {
  return (
    <div>
      <Main11/>
      <hr style={{display:"inline-block", height:"70px"}}/>
      <Experience display="dn" />
      <hr style={{display:"inline-block", height:"70px"}}/>
      <Hero12/>
      <Hero13/>
      <Carousel heading="Hotel Gallery" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed." />
      {/* <hr style={{display:"inline-block", height:"70px"}}/> */}
      <Hotelfeature/>
    </div>
  )
}

export default Hotels
