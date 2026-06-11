import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants/siteData';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container header-top-container">
          <div className="header-top-left">
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="top-info-link">
              <Phone className="top-icon" size={13} />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
          <div className="header-top-right">
            <NavLink to="/contact" className="btn-book-appointment">
              BOOK APPOINTMENT
            </NavLink>
            <div className="top-socials">
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="header-main">
        <div className="container header-main-container">
          <NavLink to="/" className="logo-container" onClick={closeMenu}>
            <img src="/logo2.webp" alt="Elite Makeover Studio" className="nav-logo-img" />
          </NavLink>
          
          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} id="nav-menu">
            <ul className="nav-list">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                  end
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  CONTACT
                </NavLink>
              </li>
              {/* BOOK APPOINTMENT link inside menu on mobile only */}
              <li className="mobile-only-item">
                <NavLink to="/contact" className="mobile-book-btn" onClick={closeMenu}>
                  BOOK APPOINTMENT
                </NavLink>
              </li>
            </ul>
          </nav>

          <button 
            className={`nav-toggle ${menuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

