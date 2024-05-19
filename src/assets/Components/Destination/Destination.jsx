import React from 'react'
import "./Destination.css"
import s1 from "../Media/s1.webp"
import s2 from "../Media/s2.webp"
import s6 from "../Media/s6.webp"
import d4 from "../Media/d4.webp"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

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
            <div className="star98">
                <span className="str">
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" color='#65C0BA' />
                    <FontAwesomeIcon icon={far.faStar} color='#65C0BA' />
                </span>
                <span className="rew">3,239 reviews</span>
            </div>
        </div>
        <div className="c1"><div className="pic98">
                <img src={s2} alt="" />
            </div>
            <div className="head98">Resort & Spa</div>
            <div className="star98">
                <span className="str">
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" color='#65C0BA' />
                    <FontAwesomeIcon icon={far.faStar} color='#65C0BA' />
                </span>
                <span className="rew">4,921 reviews</span>
            </div></div>
        <div className="c1"><div className="pic98">
                <img src={s6} alt="" />
            </div>
            <div className="head98">Hotel Rooms</div>
            <div className="star98">
                <span className="str">
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon={far.faStar} color='#65C0BA' />
                </span>
                <span className="rew">2,112 reviews</span>
            </div></div>
        <div className="c1"><div className="pic98">
                <img src={d4} alt="" />
            </div>
            <div className="head98">Mountain Climbing</div>
            <div className="star98">
                <span className="str">
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon="fa-solid fa-star" color='#65C0BA' />
                    <FontAwesomeIcon icon={far.faStar} color='#65C0BA' />
                </span>
                <span className="rew">6,421 reviews</span>
            </div></div>
      </div>
    </div>
  )
}

export default Destination
