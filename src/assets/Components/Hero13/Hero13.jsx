import React from 'react'
import "./Hero13.css"
import hero1 from "../Media/hero1.webp"

const Hero13 = () => {
  return (
    <div className='hero13'>
      <div className="text13"><div className="heading12">Presidential Room</div>
        <div className="para121">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        <div className="para122">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        <div className="btn12"><button class="transparent-button">LEARN MORE</button></div></div>
      <div className="pic13">
      <img src={hero1} alt="" />
      </div>
    </div>
  )
}

export default Hero13
