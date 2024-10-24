import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';
import logo from '../images/logo.png'; // Import your logo image
import { SocialIcon } from 'react-social-icons';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false); // State to handle menu toggle
  const [navbarScrolled, setNavbarScrolled] = useState(false); // State to handle scroll effect
  const location = useLocation(); // Use useLocation hook to detect current route

  // Function to handle scroll event
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

  // Apply transparent background only on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`nav-container ${navbarScrolled || !isHomePage ? 'navbar-scrolled' : ''}`}>
      <div className='logo'>
        <NavLink exact="true" to='/'>
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'} {/* Shows X when open and Hamburger when closed */}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink exact="true" 
          to='/about' 
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" 
          to='/artist' 
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
            ARTISTS
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" 
          to='/contact' 
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Social Icons */}
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
