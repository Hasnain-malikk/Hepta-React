import React from 'react'
import "./Newsc.css"
import s1 from "../Media/s1.webp"
import s2 from "../Media/s2.webp"
import s6 from "../Media/s6.webp"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Newsc = () => {
  return (
    <div className='newsc'>
      <div className="cardf">
        <div className="cardz">
            <div className="cardz1">
                <div className="pic120">
                    <img src={s1} alt="" />
                </div>
                <div className="date120">FEBRUARY 26, 2018</div>
                <div className="head120">Free Template by Colorlib</div>
            </div>
            <div className="cardz1">
            <div className="pic120">
                    <img src={s2} alt="" />
                </div>
                <div className="date120">FEBRUARY 26, 2018</div>
                <div className="head120">Free Template by Colorlib</div>
            </div>
            <div className="cardz1">
            <div className="pic120">
                    <img src={s1} alt="" />
                </div>
                <div className="date120">FEBRUARY 26, 2018</div>
                <div className="head120">Free Template by Colorlib</div>
            </div>
            <div className="cardz1">
            <div className="pic120">
                    <img src={s2} alt="" />
                </div>
                <div className="date120">FEBRUARY 26, 2018</div>
                <div className="head120">Free Template by Colorlib</div>
            </div>
            <div className="cardz1">
            <div className="pic120">
                    <img src={s1} alt="" />
                </div>
                <div className="date120">FEBRUARY 26, 2018</div>
                <div className="head120">Free Template by Colorlib</div>
            </div>
            <div className="cardz1">
            <div className="pic120">
                    <img src={s2} alt="" />
                </div>
                <div className="date120">FEBRUARY 26, 2018</div>
                <div className="head120">Free Template by Colorlib</div>
            </div>
        </div>
        <div className="wed">
            <div className="s11">1</div>
            <div className="s22">2</div>
            <div className="s33">3</div>
        </div>
      </div>
      <div className="postf">
        <div className="search12">

      <div className="form-group">
      <div className="input-container">
        <input type="text" className="form-control search-input" placeholder="&nbsp;&nbsp;Search..." />
        <span className="fa fa-search icon-search"></span>
      </div>
        </div>
    </div>
        <div className="popular">
            <div className="pp">Popular Post</div>
            <div className="main-mc">
            <div className="mc">
                <div className="imggg">
                    <img src={s1} alt="" />
                </div>
                <div className="mainfff">
                    <div className="dateee">FEBRUARY 26, 2018</div>
                    <div className="headdd">Free Template by Colorlib</div>
                </div>
            </div>
            <div className="mc"><div className="imggg">
                    <img src={s2} alt="" />
                </div>
                <div className="mainfff">
                    <div className="dateee">FEBRUARY 26, 2018</div>
                    <div className="headdd">Free Template by Colorlib</div>
                </div></div>
            <div className="mc"><div className="imggg">
                    <img src={s1} alt="" />
                </div>
                <div className="mainfff">
                    <div className="dateee">FEBRUARY 26, 2018</div>
                    <div className="headdd">Free Template by Colorlib</div>
                </div></div>
            <div className="mc"><div className="imggg">
                    <img src={s2} alt="" />
                </div>
                <div className="mainfff">
                    <div className="dateee">FEBRUARY 26, 2018</div>
                    <div className="headdd">Free Template by Colorlib</div>
                </div></div>
            <div className="mc"><div className="imggg">
                    <img src={s6} alt="" />
                </div>
                <div className="mainfff">
                    <div className="dateee">FEBRUARY 26, 2018</div>
                    <div className="headdd">Free Template by Colorlib</div>
                </div></div>
            </div>
        </div>
        <div className="cat"></div>
      </div>
    </div>
  )
}

export default Newsc
