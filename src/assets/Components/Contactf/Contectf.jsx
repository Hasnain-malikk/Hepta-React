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
        <div className="address">Address: 123 Main St, Anytown, USA</div>
        <div className="phone">Phone: (123) 456-7890</div>
        <div className="email">Email: info@example.com</div>
      </div>
    </div>
  );
}

export default Contectf;
