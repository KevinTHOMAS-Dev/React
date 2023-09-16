import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';

const App = () => {
  return (
    <BrowserRouter>
      <Logo/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;