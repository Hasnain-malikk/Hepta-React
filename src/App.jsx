import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./assets/Components/Navbar/Navbar"
import Home from "./assets/Pages/Home"
import AboutUS from './assets/Pages/AboutUS';
import Contact from './assets/Pages/Contact';
import Gallery from './assets/Pages/Gallery';
import Hotels from './assets/Pages/Hotels';
import News from './assets/Pages/News';
import Footer from './assets/Components/Footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutus" element={<AboutUS />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/hotels" element={<Hotels/>} />
      <Route path="/news" element={<News/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
