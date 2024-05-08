import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes within the <Routes> component */}
        <Route path="/" element={<Navbar />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
