import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png'; 
import { SocialIcon } from 'react-social-icons';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`nav-container ${navbarScrolled || !isHomePage ? 'navbar-scrolled' : ''}`}>
      <div className='logo'>
        <NavLink exact="true" to='/'>
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink 
            exact="true" 
            to='/about' 
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact="true" 
            to='/artist' 
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            onClick={() => setMenuOpen(false)}
          >
            ARTISTS
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact="true" 
            to='/contact' 
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div className="nav-icons">
        <ul>
          <li className='icons'>
            <SocialIcon className="social-icon" url="https://www.facebook.com/EighthElementTattoo" bgColor="none" />
          </li>
          <li className='icons'>
            <SocialIcon className="social-icon" url="https://www.instagram.com/eighthelementtattoo/" bgColor="none" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
