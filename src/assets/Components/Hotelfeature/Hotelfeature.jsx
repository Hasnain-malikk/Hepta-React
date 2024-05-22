import React from 'react'
import "./Hotelfeature.css"
import s1 from "../Media/s1.webp"
import s2 from "../Media/s2.webp"
import s6 from "../Media/s6.webp"

const Hotelfeature = () => {
  return (
    <div className='hotelfeature'>
      <div className="text0">
        <div className="head0">More Hotel Features</div>
        <div className="para0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</div>
      </div>
      <div className="card0">
        <div className="card01">
            <div className="img0">
                <img src={s1} alt="" />
            </div>
            <div className="head00">Five Reasons to Stay at Villa Resort</div>
        </div>
        <div className="card01"><div className="img0">
                <img src={s2} alt="" />
            </div>
            <div className="head00">Five Reasons to Stay at Villa Resort</div></div>
        <div className="card01"><div className="img0">
                <img src={s6} alt="" />
            </div>
            <div className="head00">Five Reasons to Stay at Villa Resort</div></div>
      </div>
    </div>
  )
}

export default Hotelfeature
