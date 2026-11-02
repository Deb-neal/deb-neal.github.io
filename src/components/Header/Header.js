import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import picture1 from '../../images/my.jpeg';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 모바일에서 메뉴 이동 후 자동으로 닫기
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
          <div className='version-badge-header'>v5.0</div>
          <span className='position'>Backend Engineer</span>
        </div>
        <button
          type='button'
          className='nav-toggle'
          aria-controls='navbar'
          aria-expanded={menuOpen}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav id='colorlib-main-menu' role='navigation' className='navbar'>
          <div id='navbar' className={`collapse ${menuOpen ? 'in' : ''}`}>
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
                className={`sub-menu ${location.pathname === '/architecture' ? 'active' : ''}`}
              >
                <Link to='/architecture' data-nav-section='architecture'>
                  └ Architecture
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
              <li>
                <a
                  href='https://deb-neal.tistory.com'
                  target='_blank'
                  rel='noreferrer'
                  className='nav-blog-link'
                >
                  <i className='fa fa-pencil'></i> Tech Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </section>
  );
}

export default Header;
