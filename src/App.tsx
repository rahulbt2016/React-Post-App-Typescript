import React, { useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Posts from './pages/Posts';

import Footer from './pages/Footer';
import Navigation from './pages/Navigation';



function App() {
  return (
    <div>
        <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='post' element={<Posts />} />
                
            </Routes>
        <Footer />
    </div>
  );
}

export default App;
