import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter forceRefresh>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </>
    </div>
  );
}

export default App;
