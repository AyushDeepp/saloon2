import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000); // Transitions background every 6 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero" id="home">
      {images.map((img, idx) => (
        <div 
          key={idx}
          className={`hero-bg ${idx === currentIdx ? 'active' : ''}`} 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url(${img})` 
          }}
        ></div>
      ))}
      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle gold-text">Premium Unisex Salon</span>
          <h1 className="hero-title">Elite Makeover <br /><span className="gold-text italic">Studio</span></h1>
          <p className="hero-text">Your destination for professional hair, skin, makeup, and grooming services in Faridabad. Dedicated salon care for both men and women with custom satisfaction.</p>
          <div className="hero-btns">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <a 
              href="https://wa.me/918383856742?text=Hi%20Elite%20Makeover%20Studio,%20I'd%20like%20to%20inquire%20about%20booking%20an%20appointment!" 
              className="btn btn-outline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ marginRight: '8px' }}
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Quick Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
