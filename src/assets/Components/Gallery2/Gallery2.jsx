import React from 'react';
import "./Gallery2.css"

const Gallery = ({s1,s2,s3,s4,s5,s6}) => {
  return (
    <div className="gallery">
      <div className="card">
        <img src={s1} alt="Image 1" />
      </div>
      <div className="card">
        <img src={s2} alt="Image 2" />
      </div>
      <div className="card">
        <img src={s3} alt="Image 3" />
      </div>
      <div className="card">
        <img src={s4} alt="Image 4" />
      </div>
      <div className="card">
        <img src={s5} alt="Image 5" />
      </div>
      <div className="card">
        <img src={s6} alt="Image 6" />
      </div>
    </div>
  );
}

export default Gallery;
