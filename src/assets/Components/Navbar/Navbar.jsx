// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import your CSS file

// const Navbar = () => {
//   return (
//     <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
//       <header className="mdl-layout__header mdl-layout__header--transparent head">
//         <div className="mdl-layout__header-row">
//           <span className="mdl-layout-title abril-fatface-regular">Hepta</span>
//           <div className="mdl-layout-spacer"></div>
//           <nav className="mdl-navigation hide">
//             <Link to="/" className="mdl-navigation__link">HOME</Link>
//             <Link to="/" className="mdl-navigation__link">HOTELS</Link>
//             <Link to="/" className="mdl-navigation__link">ABOUT US</Link>
//             <Link to="/" className="mdl-navigation__link">GALLERY</Link>
//             <Link to="/" className="mdl-navigation__link">NEWS</Link>
//             <Link to="/" className="mdl-navigation__link">CONTACT</Link>
//           </nav>
//         </div>
//       </header>

//       <div className="mdl-layout__drawer show_drawer">
//         <nav className="mdl-navigation show">
//           <Link to="/" className="mdl-navigation__link">HOME</Link>
//           <Link to="/" className="mdl-navigation__link">HOTELS</Link>
//           <Link to="/" className="mdl-navigation__link">ABOUT US</Link>
//           <Link to="/" className="mdl-navigation__link">GALLERY</Link>
//           <Link to="/" className="mdl-navigation__link">NEWS</Link>
//           <Link to="/" className="mdl-navigation__link">CONTACT</Link>
//         </nav>
//       </div>

//       <main>
//         <div className="mdl-grid">
//           <h1 className="heading1">Travel & Tours</h1>
//         </div>
//         <div>
//           <p className="mukta-mahee-extralight">
//             A free template by &nbsp;
//             <Link style={{ color: 'rgb(232, 231, 231)', textDecoration: 'none' }} to="/">Colorlib</Link>
//             . Download and share!
//           </p>
//         </div>
//         <div className="btndiv">
//           <button className="transparent-button">VISIT COLORLIB</button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Navbar;

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
        <a href="#">Home</a>
        <a href="#">Hotels</a>
        <a href="#">About Us</a>
        <a href="#">Gallery</a>
        <a href="#">News</a>
        <a href="#">Contacts</a>
      </div>
    </nav>
  );
};

export default Navbar;
