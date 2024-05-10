import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar/Navbar';
import Home from './assets/Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Home/> */}
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
