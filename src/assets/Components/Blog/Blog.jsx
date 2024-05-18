import React from 'react'
import "./Blog.css"
import s1 from "../Media/s1.webp"
import s6 from "../Media/s6.webp"
import s2 from "../Media/s2.webp"

const Blog = () => {
  return (
    <div className='blog'>
      <div className="blog-post">
        <div className="headingbp"> <p> Recent Blog Post</p></div>
        <div className="parabp">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
      </div>
      <div className="card">
        <div className="card1">
            <div className="pic1"><img src={s1} alt={"img"} /></div>
            <div className="date1">FEBRUARY 26, 2018</div>
            <div className="head45"></div>
            <div className="para45"></div>
        </div>
        <div className="card2"></div>
        <div className="card3"></div>
      </div>
    </div>
  )
}

export default Blog
