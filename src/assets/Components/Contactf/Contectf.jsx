import React from 'react';
import './Contectf.css';

const Contectf = () => {
  return (
    <div className="contactf">
      <div className="form">
        <div className="field1">
          <div className="input-group">
            <label className="ph2" htmlFor="name">Name</label>
            <input className="ph1" type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label className="ph2" htmlFor="phone">Phone</label>
            <input className="ph1" type="tel" id="phone" name="phone" placeholder="Enter your phone" />
          </div>
        </div>
        <div className="field2">
          <div className="input-group">
            <label className="ph2" htmlFor="email">Email</label>
            <input className="ph1" type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="field3">
          <form>
            <label className="ph2" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Type your message here"></textarea>
            <input type="submit" value="Send Message" />
          </form>
          {/* <div className="message-box">
            This is a message displayed in a box.
          </div> */}
        </div>
      </div>
      <div className="info">
        <div className="addressw" id='bb'>ADDRESS:</div>
        <div className="aaddress">98 West 21th Street, Suite</div>
        <div className="aaddress" id='aa'>721 New York NY 10016</div>
        <div className="phonew">PHONE:</div>
        <div className="phnw">(+1) 435 3533</div>
        <div className="emailw">Email:</div>
        <div className="emlw">info@yourdomain.com</div>
      </div>
    </div>
  );
}

export default Contectf;
