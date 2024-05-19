import React from 'react'
import "./Destination.css"
import s1 from "../Media/s1.webp"
import s2 from "../Media/s2.webp"
import s6 from "../Media/s6.webp"
import d4 from "../Media/d4.webp"

const Destination = () => {
  return (
    <div className='destination'>
      <div className="text98">
        <div className="heading98">Top Destination</div>
        <div className="para98">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</div>
      </div>
      <div className="card98">
        <div className="c1">
            <div className="pic98">
                <img src={s1} alt="" />
            </div>
            <div className="head98">Food & Wines</div>
            <div className="star98"></div>
        </div>
        <div className="c1"></div>
        <div className="c1"></div>
        <div className="c1"></div>
      </div>
    </div>
  )
}

export default Destination
