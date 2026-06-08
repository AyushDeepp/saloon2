import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
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
            <a href="tel:+918383856742" className="top-info-link">
              <Phone className="top-icon" size={13} />
              <span className="phone-plus">+91 </span>
              <span className="phone-number">83838 56742</span>
            </a>
            <a href="/contact" className="top-info-link">
              <MapPin className="top-icon" size={13} />
              <span>Find a Salon</span>
            </a>
          </div>
          <div className="header-top-right">
            <NavLink to="/contact" className="btn-book-appointment">
              BOOK APPOINTMENT
            </NavLink>
            <div className="top-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-link">
                <Facebook size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-link">
                <Twitter size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link">
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
            <div className="logo-looks">ELITE</div>
            <div className="logo-salon">SALON</div>
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

