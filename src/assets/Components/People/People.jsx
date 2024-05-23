import React from 'react'
import "./People.css"
import p1 from "../Media/p1.webp"
import p2 from "../Media/p2.webp"
import p3 from "../Media/p3.webp"

const People = () => {
  return (
    <div className='people'>
      <div className="text44">
        <div className="heading44">Team</div>
        <div className="para44">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
      </div>
      <div className="main44">
        <div className="card44">
            <div className="card55">
                <div className="pic44">
                    <img src={p3} alt="" />
                </div>
                <div className="title44">CEO, CO-FOUNDER</div>
                <div className="name44">Vince Richardson</div>
            </div>
            <div className="card55"><div className="pic44">
                    <img src={p1} alt="" />
                </div>
                <div className="title44">CEO, CO-FOUNDER</div>
                <div className="name44">Jean Love</div></div>
            <div className="card55"><div className="pic44">
                    <img src={p2} alt="" />
                </div>
                <div className="title44">CEO, CO-FOUNDER</div>
                <div className="name44">Jeff Strak</div></div>
        </div>
        <div className="card44">
        <div className="card55"><div className="pic44">
                    <img src={p3} alt="" />
                </div>
                <div className="title44">CEO, CO-FOUNDER</div>
                <div className="name44">Vince Richardson</div></div>
        <div className="card55"><div className="pic44">
                    <img src={p1} alt="" />
                </div>
                <div className="title44">CEO, CO-FOUNDER</div>
                <div className="name44">Jean Love</div></div>
        <div className="card55"><div className="pic44">
                    <img src={p2} alt="" />
                </div>
                <div className="title44">CEO, CO-FOUNDER</div>
                <div className="name44">Jeff Strak</div></div>
        </div>
      </div>
    </div>
  )
}

export default People
