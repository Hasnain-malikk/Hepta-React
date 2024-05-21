import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className='brand' href="#">Hepta</a>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/hotels">Hotels</a>
        <a href="/aboutus">About Us</a>
        <a href="/gallery">Gallery</a>
        <a href="/news">News</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
