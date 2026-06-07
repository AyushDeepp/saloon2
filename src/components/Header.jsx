import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      <div className="container header-container">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <img 
            src="/logo.png" 
            alt="Elite Makeover Studio Logo" 
            className="logo-img" 
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.getElementById('logo-fallback');
              if (fallback) fallback.style.display = 'flex';
            }} 
          />
          <div id="logo-fallback" className="logo-fallback-container">
            <svg width="34" height="34" viewBox="0 0 100 100" className="logo-svg">
              <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="#DFA54E" strokeWidth="5" />
              <text x="50" y="62" fontFamily="'Playfair Display', serif" fontSize="44" fontWeight="bold" fill="#DFA54E" textAnchor="middle">E</text>
            </svg>
            <span className="logo-text">ELITE</span>
          </div>
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
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <NavLink to="/contact" className="btn btn-outline btn-sm hide-mobile">Book Now</NavLink>
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
