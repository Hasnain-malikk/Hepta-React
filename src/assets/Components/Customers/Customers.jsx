import React from 'react'
import "./Customers.css"
import p1 from "../Media/p1.webp"
import p2 from "../Media/p2.webp"
import p3 from "../Media/p3.webp"

const Customers = () => {
  return (
    <div className= 'customer'>
      <div className="heading9">Happy Customers</div>
      <div className="review">
        <div className="custom1">
            <div className="cust-pic"><img src={p1} alt="" /></div>
            <div className="cust-para">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</div>
            <div className="cust-name">— Clare Gupta</div>
        </div>
        <div className="custom2">
        <div className="cust-pic"><img src={p2} alt="" /></div>
            <div className="cust-para">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</div>
            <div className="cust-name">— Rogie Slater</div>
        </div>
        <div className="custom3">
        <div className="cust-pic"><img src={p3} alt="" /></div>
            <div className="cust-para">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</div>
            <div className="cust-name">— John Doe</div>
        </div>
      </div>
    </div>
  )
}

export default Customers
