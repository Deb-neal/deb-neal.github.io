import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import picture1 from '../../images/my.jpeg';

function Header() {
  const location = useLocation();
  return (
    <section className='colorlib-about' data-section='header'>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      ></link>

      <aside id='colorlib-aside'>
        <div className='text center'>
          <img src={picture1} className='author-img' alt='Min su Ann'></img>
          <h1 id='colorlib-logo'>Min su Ann</h1>
          <div className='version-badge-header'>v3.0</div>
          <span className='position'>Backend Engineer</span>
        </div>
        <nav id='colorlib-main-menu' role='navigation' className='navbar'>
          <div id='navbar' className='collapse'>
            <ul>
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to='/' data-nav-section='home'>
                  Home
                </Link>
              </li>
              <li className={location.pathname === '/about' ? 'active' : ''}>
                <Link to='/about' data-nav-section='about'>
                  About
                </Link>
              </li>
              <li className={location.pathname === '/skills' ? 'active' : ''}>
                <Link to='/skills' data-nav-section='skills'>
                  Tech Skills
                </Link>
              </li>
              <li className={location.pathname === '/projects' ? 'active' : ''}>
                <Link to='/projects' data-nav-section='education'>
                  Project
                </Link>
              </li>
              <li
                className={location.pathname === '/education' ? 'active' : ''}
              >
                <Link to='/education' data-nav-section='work'>
                  Education
                </Link>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to='/contact' data-nav-section='contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </section>
  );
}

export default Header;
