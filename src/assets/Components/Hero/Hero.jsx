import React, { useState } from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div className='main'>
      <div className="container">
        <div className="left">
          {/* Left side content */}
        </div>
        <div className="right">
          <div className="heading">Welcome To Our Website</div>
          <div className="para1">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </div>
          <div className="para2">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </div>
          <div className="btn">
            <Link to="#" onClick={handleClick} style={{ color: "rgb(63, 154, 148)", textDecoration: "none" }}>
              <span className="play"><FontAwesomeIcon icon={faPlay} /></span>
              <span className="text">&nbsp;&nbsp;&nbsp;WATCH THE VIDEO</span>
            </Link>
          </div>
          {showVideo && (
            <div className="overlay">
              <div className="video-container">
                <button className="close-button" onClick={handleClose}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <iframe
                  src="https://www.youtube.com/embed/linlz7-Pnvw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
