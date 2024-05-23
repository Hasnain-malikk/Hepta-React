import React from 'react'
import "./Hero12.css"
import hero2 from "../Media/background1.jpg"

const Hero12 = ({heading}) => {
  return (
    <div className='hero12'>
      <div className="pic12">
        <img src={hero2} alt="" />
      </div>
      <div className="text12">
        <div className="heading12">{heading}</div>
        <div className="para121">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        <div className="para122">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        <div className="btn12"><button class="transparent-button">LEARN MORE</button></div>
      </div>
    </div>
  )
}

export default Hero12
