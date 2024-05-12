import React from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='main'>
      <div className="container">
      <div className="left">
  
      </div>
      <div className="right">
        <div className="heading">Welcome To Our Website</div>
        <div className="para1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        <div className="para2">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        <div className="btn">
          <Link style={{color:"rgb(63, 154, 148)",textDecoration: "none"}}>
          <span className="play"><FontAwesomeIcon icon={faPlay} /></span>
          <span className="text">&nbsp;&nbsp;&nbsp;WATCH THE VIDEO</span>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
