import React from 'react'
import "./Experience.css"

const Experience = () => {
  return (
    <div className='exp'>
      <div className="top">
        <div className="heading1">Experience Once In Your Life Time</div>
        <div className="paraa">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
      </div>
      <div className="bottom">
        <div className="block" id="a">
          <div className='img1'></div>
          {/* <img src={require("../Media/.png")} alt="" /> */}
          <div className="head1">Good Foods</div>
          <div className="paraaa">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
        </div>
        <div className="block" id="b"></div>
        <div className="block" id="c"></div>
        <div className="block" id="d"></div>
        <div className="block" id="e"></div>
        <div className="block" id="f"></div>
      </div>
    </div>
  )
}

export default Experience
