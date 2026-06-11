import React from 'react';
import { ABOUT_DATA } from '../constants/siteData';
import './About.css';

const About = () => {
  const renderHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'shield':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
    }
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="grid grid-2">
          <div className="about-images">
            <div className="img-wrapper main-img">
              <img 
                src={ABOUT_DATA.images.main} 
                alt="Elite Makeover Studio Styling Area" 
                loading="lazy" 
              />
            </div>
            <div className="img-wrapper sub-img">
              <img 
                src={ABOUT_DATA.images.sub} 
                alt="Hair Styling Session" 
                loading="lazy" 
              />
            </div>
          </div>
          <div className="about-content">
            <span className="section-subtitle gold-text">About Us</span>
            <h2 className="section-title">{ABOUT_DATA.sectionTitle}</h2>
            {ABOUT_DATA.paragraphs.slice(0, 2).map((p, idx) => (
              <p className="about-text" key={idx}>{p}</p>
            ))}
            
            <div className="about-highlights">
              {ABOUT_DATA.highlights.map((item) => (
                <div className="highlight-item" key={item.id}>
                  <div className="highlight-icon">
                    {renderHighlightIcon(item.icon)}
                  </div>
                  <div className="highlight-info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
