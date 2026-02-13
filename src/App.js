import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Education from './components/Education/Education.js';
import Contact from './components/Contact/Contact.js';
import Architecture from './components/Architecture/Architecture.js';

function App() {
  return (
    <Router>
      <div id='page'>
        <div className='container-wrap'>
          <link
            href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Fira+Code:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <Header />
          <Nav />
          <div id='colorlib-main'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/neal-portfolio' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/education' element={<Education />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/architecture' element={<Architecture />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
