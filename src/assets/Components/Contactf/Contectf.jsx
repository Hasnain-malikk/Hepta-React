import React from 'react'
import "./Contectf.css"

const Contectf = () => {
  return (
    <div className='contactf'>
      <div className="form">
        <div className="field1">
          <div className="namee">
          <div className="ph2">Name</div>
            <div className="ph1">
              <input type="name" />
            </div>
          </div>
          <div className="phonee">
          <div className="ph2">Phone</div>
            <div className="ph1">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="field2">
          <div className="ph2">Email</div>
          <div className="ph1">
            <input type="text" />
          </div>
        </div>
        <div className="field3">
        <div className="ph2">Write Message</div>
          <div className="ph1"><input type="text" /></div>
        </div>
        <div className="btn46"></div>
      </div>
      <div className="info">
        <div className="address"></div>
        <div className="phone"></div>
        <div className="email"></div>
      </div>
    </div>
  )
}

export default Contectf
